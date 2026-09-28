# E-book e flipbook
Atualizado em 28/09/2026. Este documento descreve a versão publicada em https://mapaled.linkscc.com.br/#portfolio.

## Estado da integração
A publicação atual usa Sites. Na conferência desta atualização documental, o GitHub ainda continha a versão anterior do mapa, sem as pastas `assets/`, `book/` e `vendor/`. Publicar esta documentação não sincroniza os arquivos do site nem adiciona o e-book ao deploy deste repositório.

## Arquivos necessários
Caminhos relativos à raiz pública (no projeto Sites, dentro de `dist/`):

| Caminho | Função |
| --- | --- |
| `index.html` | Estrutura das três abas, controles, dados e mapa |
| `assets/portal.css` | Layout do portal, leitor e carrossel |
| `assets/portal.js` | Rotas por hash, navegação e carregamento do livro |
| `assets/portfolio-led.pdf` | PDF original para download |
| `book/1.webp` até `book/166.webp` | Uma imagem por página, na ordem do PDF |
| `vendor/page-flip.js` | PageFlip 2.0.7 hospedado localmente |
| `assets/logo.svg`, `assets/favicon-led.png` | Identidade visual |
| `images/` | Fotos dos participantes |

O PDF tem 166 páginas e 26.089.327 bytes (aproximadamente 24,9 MiB). As páginas WebP ocupam aproximadamente 22 MiB. O leitor mostra imagens; não renderiza o PDF em tempo real e não utiliza iframe do Heyzine ou PDF.js.

## Funcionamento
- `#portfolio` abre o leitor; `#ebook` é um alias.
- A instância de `St.PageFlip` é criada quando a aba é aberta.
- Capa individual, páginas duplas quando há espaço e modo retrato em largura reduzida.
- Setas laterais, botões inferiores, teclado, clique nas páginas e deslize usam a mesma função de virada.
- Duração configurada: 850 ms. O bloqueio de cliques sucessivos evita reiniciar uma transição.
- As imagens próximas são carregadas e decodificadas antes da virada. O HTML contém os elementos das 166 páginas, mas as imagens são atribuídas sob demanda.
- A interação própria usa eventos de ponteiro; os eventos nativos de mouse do PageFlip estão desativados. O deslize dispara a animação após soltar, sem acompanhar uma dobra manual durante o arraste.
- O campo numérico permite salto direto, sem animação obrigatória.
- Cantos arredondados e sombra no centro das páginas abertas são estilos locais.
- “Tela cheia” usa a Fullscreen API; o fallback abre o PDF em outra aba.
- “Baixar PDF” é um link local com atributo `download`, junto de “Tela cheia”.
- A orientação inferior não repete o contador; a contagem permanece no controle numérico.
- Não há botão de ampliação.

## Substituição do e-book
1. Preserve uma cópia do PDF anterior e substitua `assets/portfolio-led.pdf` pela nova versão aprovada.
2. Renderize todas as páginas na ordem original. A versão atual usa PyMuPDF com escala 1,7 e Pillow para WebP RGB, qualidade 83.
3. Grave cada imagem em arquivo temporário, valide a decodificação e renomeie somente após sucesso. Arquivo existente ou contagem correta não comprovam integridade.
4. Substitua o conjunto em `book/`; retire arquivos excedentes se o livro novo tiver menos páginas.
5. Atualize `total` em `assets/portal.js`, o atributo `max` de `#pageInput` e o texto de `#pageTotal` no HTML.
6. Incremente a versão dos URLs de imagem (`?v=2` na versão documentada) para evitar cache antigo.
7. Publique PDF, imagens, HTML e JavaScript juntos. Não envie apenas o PDF.
8. Confira download, primeira e última páginas, saltos, setas, clique, deslize, teclado, tela cheia e mudança de orientação.
9. Confira visualmente páginas com fotos, textos pequenos e transparências.

### Validação das imagens
Na pasta pública, com Python e Pillow disponíveis:

```python
from pathlib import Path
from PIL import Image

total = 166  # ajustar conforme o PDF aprovado
for numero in range(1, total + 1):
    caminho = Path("book") / f"{numero}.webp"
    assert caminho.is_file() and caminho.stat().st_size > 0, caminho
    with Image.open(caminho) as imagem:
        imagem.load()
        assert imagem.width > 0 and imagem.height > 0, caminho
print(f"{total} páginas válidas")
```

As páginas 32, 72, 113, 133 e 153 tinham arquivos vazios e foram regeneradas. As 166 imagens passaram por decodificação após a correção. A validação de arquivos não substitui teste visual do flipbook.

## Publicação em outra hospedagem
Copie o conteúdo completo da raiz pública, preservando caminhos relativos. No Sites, essa raiz é `dist/`; na estrutura antiga deste GitHub, `index.html` fica na raiz do repositório. Não crie um nível extra de pasta sem ajustar a raiz de publicação.

Não há compilação obrigatória, backend, banco de dados ou segredos para o leitor. O PDF e as imagens devem ser servidos pelo mesmo site. Confira os limites de tamanho por arquivo do destino: o PDF atual tem aproximadamente 24,9 MiB.

## Limites
O flipbook baseado em imagens não oferece seleção ou pesquisa do texto do PDF nem leitura estrutural de seu conteúdo por leitor de tela. O download fornece o documento original. O livro é independente de serviços de flipbook externos; mapa-base, bibliotecas do mapa e fontes ainda dependem de rede.
