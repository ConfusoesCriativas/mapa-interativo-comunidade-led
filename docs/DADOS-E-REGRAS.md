# Dados e regras

## Estrutura de um perfil

Cada item da constante `projects` usa os seguintes campos:

| Campo | Conteúdo |
| --- | --- |
| `edition` | Edição do Prêmio LED ou Desafio LED |
| `rawCategory` | Categoria original da base |
| `group` | Grupo visual usado nas cores e filtros |
| `ambassador` | Nome do participante |
| `project` | Nome do projeto |
| `city` | Cidade |
| `state` | Estado por extenso |
| `uf` | Sigla do estado |
| `region` | Região do Brasil |
| `about` | Descrição do projeto |
| `bio` | Minibio do participante |
| `instagram` | Perfil no Instagram, quando informado |
| `lat` | Latitude |
| `lon` | Longitude |
| `photo` | Caminho local da imagem |
| `displayCategory` | Categoria mostrada na interface |

## Distribuição atual

| Edição | Perfis |
| --- | ---: |
| Prêmio LED 2022 | 15 |
| Prêmio LED 2023 | 15 |
| Prêmio LED 2024 | 15 |
| Prêmio LED 2025 | 15 |
| Prêmio LED 2026 | 15 |
| Desafio LED 2022 | 10 |
| Desafio LED 2023 | 5 |
| Desafio LED 2024 | 5 |
| Desafio LED 2025 | 5 |
| Desafio LED 2026 | 5 |
| **Total** | **105** |

## Categorias visuais

| Grupo | Cor | Perfis |
| --- | --- | ---: |
| Estudantes | `#eb672b` | 50 |
| Educadores | `#8265f2` | 25 |
| Empreendedores e Organizações | `#bf28a4` | 30 |

## Regra dos vencedores

A chave usada para identificar um vencedor é:

```text
edição|nome do participante
```

As listas ficam nos conjuntos `premioWinners` e `desafioWinners`.

- `premioWinners`: 34 perfis validados como vencedores do Prêmio LED.
- `desafioWinners`: 10 perfis, correspondentes ao primeiro e segundo lugares das edições de 2022 a 2026.
- Um vencedor do Desafio LED não deve aparecer no filtro de vencedores do Prêmio LED.
- O troféu aparece nos cartões, pop-ups e detalhes de todos os perfis presentes em uma das listas.
- Os dois filtros são mutuamente exclusivos.

## Vencedores do Desafio LED

| Edição | Participante |
| --- | --- |
| 2022 | Gabriela Leite |
| 2022 | Weverton Alves |
| 2023 | Maria Eduarda de Carvalho |
| 2023 | Alexandre Carvalho |
| 2024 | Nathália Peixoto |
| 2024 | Raislúcio de Carvalho Leal |
| 2025 | Ana Paula de Souza |
| 2025 | Milena Nicolay |
| 2026 | Monique Albuquerque |
| 2026 | Jenifer Carolina |

## Atualização de conteúdo

1. Localize a constante `projects` em `index.html`.
2. Edite ou acrescente o perfil mantendo todos os campos.
3. Salve a imagem em `images/` com nome estável, em minúsculas e sem espaços.
4. Se o perfil for vencedor, acrescente a chave ao conjunto correto.
5. Execute `npm run validate`.
6. Teste busca, edição, mapa, modal e os dois filtros de vencedores.
7. Gere uma publicação Preview antes de promover para produção.

## Governança recomendada

- A equipe de conteúdo valida nomes, textos, colocações e fontes.
- A equipe técnica valida formato dos dados, imagens, coordenadas e publicação.
- Alterações devem passar por pull request e revisão.
- A fonte que comprova cada resultado deve ser registrada no pull request.
