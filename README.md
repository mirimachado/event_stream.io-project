# EventStream – Plataforma de Webhooks e Processamento de Eventos

O **EventStream** é um microSaaS voltado para o recebimento, roteamento e monitoramento de eventos via webhooks. Permite que empresas ou aplicações registrem seus próprios webhooks, recebam notificações externas (ex: nova venda, novo usuário, envio de formulário) e reencaminhem esses eventos para múltiplos canais como Discord, Slack, e-mail ou endpoints personalizados.

Além disso, conta com persistência dos eventos em MongoDB, sistema de retries com Redis e painel de administração (React) para visualizar eventos recebidos, falhas e reprocessamentos.

### Tecnologias principais
- Node.js + Express
- MongoDB
- Redis (workers e retries)
- JWT Auth + Rate Limiting
- Docker + Docker Compose

### Funcionalidades
- Registro e gestão de webhooks
- Reencaminhamento para múltiplos destinos
- Histórico completo de eventos
- Retry automático em caso de falha

