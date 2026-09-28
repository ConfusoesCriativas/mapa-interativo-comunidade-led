# Mapa Interativo da Comunidade LED

Aplicação web estática que apresenta participantes, projetos e vencedores das edições do Prêmio LED e do Desafio LED em um mapa do Brasil.

## Produção

- URL: https://mapaled.linkscc.com.br
- Hospedagem atual: Vercel
- Idioma: português do Brasil
- Perfis cadastrados: 105
- Cidades: 62
- Vencedores do Prêmio LED: 34
- Vencedores do Desafio LED: 10, considerando somente primeiro e segundo lugares de cada edição

## Tecnologia

O projeto não possui backend, banco de dados, autenticação nem etapa de compilação.

- HTML, CSS e JavaScript em `index.html`
- Leaflet 1.9.4
- Leaflet.markercluster 1.5.3
- OpenStreetMap como mapa-base
- Google Fonts, família Poppins
- Imagens locais em `images/`

As bibliotecas de mapa e a fonte são carregadas por serviços externos. Todos os dados dos participantes são entregues ao navegador e podem ser consultados no código-fonte da página.

## Documentação

- [Arquitetura](docs/ARQUITETURA.md)
- [Dados e regras](docs/DADOS-E-REGRAS.md)
- [Deploy e domínio](docs/DEPLOY-E-DOMINIO.md)
- [Handoff para TI](docs/HANDOFF-GLOBO.md)
- [Fontes externas](docs/FONTES-E-DEPENDENCIAS.md)
- [Pendências conhecidas](docs/PENDENCIAS.md)

## Propriedade e licenciamento

O repositório reúne conteúdo produzido para a Comunidade LED. Nenhuma licença pública foi atribuída. O uso, a redistribuição e a publicação devem seguir as orientações da Globo e dos responsáveis pelo projeto.
