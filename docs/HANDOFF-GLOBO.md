# Handoff para o time de TI da Globo

## Resumo executivo

O Mapa Interativo da Comunidade LED é uma aplicação web estática. A base de participantes está incorporada ao JavaScript, as imagens são locais e o mapa-base vem do OpenStreetMap. A solução não utiliza backend, banco, login, analytics ou variáveis de ambiente na versão atual.

## Informações para a reunião

| Tema | Resposta atual |
| --- | --- |
| Código | HTML, CSS e JavaScript em arquivo único |
| Backend | Não existe |
| Banco de dados | Não existe |
| Autenticação | Não existe |
| Build | Não existe etapa de build |
| Hospedagem | Vercel |
| Produção | `mapaled.linkscc.com.br` |
| Dados | Constante `projects` em `index.html` |
| Imagens | Diretório `images/` |
| Atualização | Edição do código, validação e novo deploy |
| Vencedores | Dois conjuntos separados: Prêmio e Desafio |
| Segredos | Nenhum necessário na versão atual |
| Mapa-base | OpenStreetMap |
| Biblioteca | Leaflet e MarkerCluster |

## Decisões que precisam ser tomadas

- A Globo assumirá a hospedagem na Vercel ou em outra infraestrutura?
- O projeto atual será transferido ou será criado um projeto institucional novo?
- Qual equipe será proprietária do repositório?
- O domínio continuará em `linkscc.com.br` ou será substituído por um domínio da Globo?
- Quem aprova alterações de conteúdo e classificação de vencedores?
- Os dados continuarão incorporados ao código ou serão migrados para CMS, planilha ou API?
- Qual nível de disponibilidade, monitoramento e suporte será exigido?
- Será necessário analytics, aviso de privacidade ou consentimento de cookies?

## Segurança e privacidade

Os nomes, projetos, localidades, minibiografias, perfis sociais e imagens são públicos no código entregue ao navegador. O time jurídico ou de privacidade deve confirmar:

- base de autorização para publicação;
- nível adequado de precisão geográfica;
- procedimento para correção ou remoção;
- responsável pelo conteúdo;
- prazo de manutenção e retenção;
- requisitos de LGPD e política de privacidade.

## Critérios de aceite

- Os 105 perfis são carregados.
- Todas as imagens referenciadas existem.
- A busca funciona por participante, projeto, cidade e estado.
- O filtro por edição funciona.
- “Vencedores Prêmio LED” retorna 34 perfis.
- “Vencedores Desafio LED” retorna 10 perfis.
- Vencedores do Desafio não aparecem no filtro do Prêmio.
- O troféu aparece somente nos perfis classificados como vencedores.
- O botão de limpar restaura busca, edição, vencedores e posição do mapa.
- O mapa funciona em desktop e celular.
- Links do Instagram abrem em nova aba.
- Não existem erros relevantes no console do navegador.

## Entregáveis

- código-fonte e imagens;
- histórico no Git;
- documentação técnica;
- relação de dependências externas;
- regras dos vencedores;
- instruções de deploy e rollback;
- pendências conhecidas;
- responsáveis técnicos e de conteúdo, a definir.
