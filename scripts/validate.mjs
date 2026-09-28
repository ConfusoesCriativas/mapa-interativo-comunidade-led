import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectDirectory = path.resolve(scriptDirectory, "..");
const htmlPath = path.join(projectDirectory, "index.html");
const html = fs.readFileSync(htmlPath, "utf8");

function extractBetween(startMarker, endMarker) {
  const start = html.indexOf(startMarker);
  if (start < 0) throw new Error(`Marcador ausente: ${startMarker}`);
  const contentStart = start + startMarker.length;
  const end = html.indexOf(endMarker, contentStart);
  if (end < 0) throw new Error(`Marcador final ausente: ${endMarker}`);
  return html.slice(contentStart, end);
}

function extractSet(name) {
  const source = extractBetween(`const ${name} = new Set([`, "]);" );
  return [...source.matchAll(/"([^"]+)"/g)].map((match) => match[1]);
}

const projects = JSON.parse(
  extractBetween("const projects = ", ";\nconst categoryColors")
);
const premioWinners = extractSet("premioWinners");
const desafioWinners = extractSet("desafioWinners");
const projectKeys = new Set(
  projects.map((project) => `${project.edition}|${project.ambassador}`)
);

const errors = [];
const warnings = [];

for (const project of projects) {
  for (const field of [
    "edition",
    "group",
    "ambassador",
    "project",
    "city",
    "uf",
    "region",
    "photo"
  ]) {
    if (!project[field]) errors.push(`${project.ambassador || "Perfil"}: campo ${field} vazio`);
  }

  if (!Number.isFinite(project.lat) || !Number.isFinite(project.lon)) {
    errors.push(`${project.ambassador}: coordenadas inválidas`);
  }

  const photoPath = path.join(projectDirectory, project.photo);
  if (!fs.existsSync(photoPath)) {
    errors.push(`${project.ambassador}: imagem ausente (${project.photo})`);
  }
}

for (const key of [...premioWinners, ...desafioWinners]) {
  if (!projectKeys.has(key)) errors.push(`Vencedor sem perfil correspondente: ${key}`);
}

const overlap = premioWinners.filter((key) => desafioWinners.includes(key));
if (overlap.length) {
  errors.push(`Vencedores presentes nas duas listas: ${overlap.join(", ")}`);
}

const photos = new Map();
for (const project of projects) {
  const people = photos.get(project.photo) || [];
  people.push(project.ambassador);
  photos.set(project.photo, people);
}
for (const [photo, people] of photos) {
  if (people.length > 1) warnings.push(`Imagem repetida ${photo}: ${people.join("; ")}`);
}

if (projects.length !== 105) warnings.push(`Quantidade de perfis alterada: ${projects.length}`);
if (premioWinners.length !== 34) warnings.push(`Quantidade de vencedores do Prêmio alterada: ${premioWinners.length}`);
if (desafioWinners.length !== 10) warnings.push(`Quantidade de vencedores do Desafio alterada: ${desafioWinners.length}`);

console.log(`Perfis: ${projects.length}`);
console.log(`Cidades: ${new Set(projects.map((p) => `${p.city}|${p.uf}`)).size}`);
console.log(`Vencedores do Prêmio LED: ${premioWinners.length}`);
console.log(`Vencedores do Desafio LED: ${desafioWinners.length}`);

for (const warning of warnings) console.warn(`AVISO: ${warning}`);
for (const error of errors) console.error(`ERRO: ${error}`);

if (errors.length) process.exit(1);
console.log("Validação concluída sem erros bloqueantes.");
