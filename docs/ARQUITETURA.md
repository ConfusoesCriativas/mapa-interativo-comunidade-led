## Visão geral

O mapa é uma aplicação estática executada integralmente no navegador.

1. A Vercel entrega `index.html` e as imagens.
2. O navegador carrega Leaflet, MarkerCluster e Poppins.
3. O JavaScript lê a constante `projects`, cria filtros, indicadores, cartões, marcadores e agrupamentos.
4. O Leaflet solicita os blocos do mapa ao OpenStreetMap.
5. Não há chamadas para API própria, banco de dados ou serviço de autenticação.

## Estrutura

```text
mapa-interativo-comunidade-led/
├── index.html
├── images/
├── scripts/
│   └── validate.mjs
├── docs/
├── package.json
└── README.md
```

## Componentes

### Interface

O HTML, o CSS e o JavaScript estão no mesmo arquivo. A interface possui:

- cabeçalho e indicadores;
- busca por texto;
- filtro por edição;
- filtro de vencedores do Prêmio LED;
- filtro de vencedores do Desafio LED;
- mapa com marcadores agrupados;
- lista de participantes;
- modal com detalhes e link para Instagram.

### Dados

A constante `projects`, dentro de `index.html`, contém os 105 perfis. Não existe sincronização automática com planilha ou CMS.

### Estado

Os filtros são mantidos somente durante a sessão da página. Não existe persistência no servidor.

### Segurança

Não há segredos ou tokens necessários para executar a versão atual. Como os dados são incorporados ao JavaScript, qualquer informação cadastrada fica pública para visitantes do site.

## Dependências externas

| Dependência | Versão | Finalidade | Origem atual |
| --- | --- | --- | --- |
| Leaflet | 1.9.4 | Renderização do mapa | unpkg.com |
| Leaflet.markercluster | 1.5.3 | Agrupamento de marcadores | unpkg.com |
| OpenStreetMap | serviço externo | Mapa-base | tile.openstreetmap.org |
| Poppins | variável por peso | Tipografia | fonts.googleapis.com e fonts.gstatic.com |

## Limitações técnicas

- Atualizações de conteúdo exigem edição do código e novo deploy.
- A disponibilidade do mapa-base depende do OpenStreetMap.
- As bibliotecas são carregadas por CDN e não estão copiadas para o repositório.
- Não há testes automatizados de interface.
- Não há ambiente administrativo para equipes de conteúdo.
