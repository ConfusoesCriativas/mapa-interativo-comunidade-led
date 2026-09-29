# Comunidade LED: mapa e portfólio

Portal estático da Comunidade LED, com apresentação, mapa de iniciativas e e-book interativo.

## Produção e sincronização

- Site publicado: https://mapaled.linkscc.com.br
- Idioma: português do Brasil.
- 105 perfis; 34 vencedores do Prêmio LED e 10 do Desafio LED (primeiro e segundo lugares).
- Portfólio: PDF de 166 páginas, com flipbook e download.

**Estado do GitHub:** o código deste repositório ainda corresponde à versão anterior do mapa. Esta atualização publica a documentação da versão em produção; não inclui a sincronização do HTML, do PDF ou das imagens do flipbook. Consulte o guia do e-book antes de implantar a versão completa em outra hospedagem.

## Tecnologia

HTML, CSS e JavaScript, sem React, Next.js, backend, banco de dados, autenticação ou compilação obrigatória.

| Componente | Tecnologia |
| --- | --- |
| Mapa | Leaflet 1.9.4 e Leaflet.markercluster 1.5.3 |
| Mapa-base | OpenStreetMap |
| Tipografia | Poppins via Google Fonts |
| Flipbook | PageFlip 2.0.7, arquivo JavaScript local |
| Fotos e páginas | WebP local |
| Download | PDF original servido pelo próprio site |

Na versão atual, `index.html` reúne estrutura, dados e mapa; `assets/portal.css` e `assets/portal.js` complementam o portal. As bibliotecas do mapa e as fontes vêm de serviços externos. Os dados incorporados no código são públicos.

## Documentação

- [Arquitetura e estrutura de publicação](docs/ARQUITETURA.md)
- [E-book: arquivos, funcionamento, atualização e validação](docs/EBOOK-E-FLIPBOOK.md)
- [Dados e regras](docs/DADOS-E-REGRAS.md)
- [Fontes e dependências](docs/FONTES-E-DEPENDENCIAS.md)

## Propriedade e licenciamento

O repositório reúne conteúdo produzido para a Comunidade LED. Nenhuma licença pública foi atribuída ao conteúdo do projeto. O uso, a redistribuição e a publicação devem seguir as orientações da Globo e dos responsáveis pelo projeto. As bibliotecas de terceiros mantêm suas próprias licenças.
