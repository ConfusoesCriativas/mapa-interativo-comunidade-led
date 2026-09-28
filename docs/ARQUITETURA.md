# Arquitetura

Atualizado em 28/09/2026 com base na versão publicada em https://mapaled.linkscc.com.br.

## Escopo e estado do repositório
A versão em produção usa Sites e inclui Início, Mapa de iniciativas e Portfólio. O código neste GitHub ainda é a versão anterior do mapa, com `index.html`, `images/`, `scripts/` e `package.json`. A documentação descreve a evolução publicada; os arquivos novos precisam ser sincronizados antes de este repositório reproduzir o portal completo.

## Execução
1. A hospedagem entrega arquivos estáticos.
2. O navegador carrega a estrutura, os estilos e os scripts.
3. A constante `projects` em `index.html` alimenta os filtros, cartões e marcadores.
4. Leaflet solicita os blocos do mapa ao OpenStreetMap.
5. A aba Portfólio inicializa PageFlip e carrega imagens das páginas próximas.
6. O botão de download entrega o PDF original.

Não há API própria, banco de dados, autenticação ou sincronização automática com planilha/CMS.

## Raiz pública da versão atual

| Caminho | Responsabilidade |
| --- | --- |
| `index.html` | Estrutura, dados e lógica do mapa |
| `assets/portal.css` | Estilos do portal, carrossel e livro |
| `assets/portal.js` | Navegação entre abas, controles e flipbook |
| `assets/logo.svg` | Marca do cabeçalho |
| `assets/favicon-led.png` | Ícone do navegador |
| `assets/portfolio-led.pdf` | E-book original |
| `images/` | 104 fotos WebP |
| `book/` | 166 páginas WebP numeradas |
| `vendor/page-flip.js` | PageFlip local |

No projeto Sites, os caminhos ficam dentro de `dist/`. Para hospedagem estática externa, use o conteúdo dessa pasta como raiz pública. A estrutura antiga do GitHub usa a raiz do repositório. Um único HTML não contém o portal completo.

## Interface
- `#inicio`: texto à esquerda, acessos à direita e carrossel de embaixadores.
- `#mapa`: indicadores, busca, filtros, mapa, lista e detalhes. O primeiro indicador mostra “105 iniciativas”. Os botões de zoom foram removidos.
- `#portfolio`: livro interativo de 166 páginas e download. `#ebook` é um alias.
- Navegação compartilhada entre as abas; espaço da barra de rolagem reservado para reduzir deslocamentos.

O carrossel usa 104 fotos únicas em dois grupos iguais para produzir o ciclo contínuo. Inicia automaticamente e possui controle de pausa por ícone. As legendas são uma apresentação abreviada em duas linhas; não alteram os nomes completos da base. “Felipe Rodrigues e Fabrina da Silva Carvalho” aparece no carrossel como “Felipe Rodrigues”. As legendas e os grupos estão no HTML; não se regeneram automaticamente quando a base é editada.

## Estado e conteúdo
O estado dos filtros é local à página e não persiste no servidor. O PDF e suas páginas são arquivos independentes da base de perfis; alterações no mapa não alteram o e-book.

## Dependências

| Dependência | Versão | Origem |
| --- | --- | --- |
| Leaflet | 1.9.4 | unpkg.com |
| Leaflet.markercluster | 1.5.3 | unpkg.com |
| PageFlip | 2.0.7 | `vendor/page-flip.js`, local |
| Poppins | pesos definidos no HTML | Google Fonts |
| OpenStreetMap | serviço externo | blocos de mapa |

## Manutenção
Consulte [E-book e flipbook](EBOOK-E-FLIPBOOK.md) para substituição, geração de páginas, controle de cache e validação. Os scripts antigos do repositório não devem ser considerados uma validação completa do portal ou do e-book.

## Limitações
- Atualizar conteúdo exige editar arquivos e publicar novamente.
- Não há painel administrativo.
- O mapa-base, as fontes e as bibliotecas do mapa dependem de serviços externos.
- O leitor usa imagens e não oferece pesquisa ou seleção do texto.
- Não existe suíte automatizada de interface registrada neste repositório.
- Nenhum segredo é necessário para executar o site; o conteúdo entregue ao navegador é público.
