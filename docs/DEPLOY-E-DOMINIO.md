# Deploy e domínio

## Situação atual

- Produção: https://mapaled.linkscc.com.br
- Plataforma: Vercel
- Projeto: site estático, sem comando de build
- Domínio: subdomínio de `linkscc.com.br`
- DNS: administrado fora do código; confirmar o registro atual no Registro.br antes da transferência

## Deploy manual

Na raiz do projeto:

```powershell
npx.cmd vercel
```

O comando acima cria uma versão Preview.

Depois da validação:

```powershell
npx.cmd vercel --prod
```

Se a pasta ainda não estiver associada ao projeto correto:

```powershell
npx.cmd vercel link
npx.cmd vercel --prod
```

Não execute esses comandos dentro de `C:\Windows\System32`. Entre primeiro na pasta do projeto.

## Fluxo recomendado com Git

1. Branch de trabalho para cada alteração.
2. Pull request com revisão técnica e de conteúdo.
3. Deploy Preview automático para o pull request.
4. Validação funcional e editorial.
5. Merge na branch `main`.
6. Deploy automático para produção.

## Transferência

Há duas possibilidades:

### Novo projeto institucional

A Globo importa este repositório em uma conta corporativa, configura o domínio e assume custos, acessos e operação. Esta opção reduz a dependência de contas pessoais.

### Transferência do projeto atual

O projeto pode ser transferido entre times da Vercel. Antes da transferência, devem ser revisados domínio, integrações, variáveis, histórico de deploys, plano e responsáveis.

## DNS

Antes de alterar o DNS:

- registrar o valor atual do CNAME;
- identificar quem controla `linkscc.com.br`;
- definir janela de mudança e plano de retorno;
- reduzir o TTL com antecedência, caso necessário;
- testar o novo deployment antes da troca;
- conferir certificado HTTPS após a propagação.

## Rollback

A Vercel mantém deployments anteriores. Em caso de falha, a equipe pode restaurar ou promover uma versão previamente validada pelo painel ou pela CLI.

## Credenciais

- Não compartilhar senha de conta pessoal.
- Não versionar `.env`, tokens ou a pasta `.vercel`.
- Usar membros de equipe, conta corporativa e permissões nominais.
- Rotacionar qualquer token usado durante a implantação manual.
