---
title: "Observabilidade na borda: o que a Cloudflare mostra antes da sua aplicação"
description: "Por que olhar o tráfego na Cloudflare ajuda a separar problema de aplicação, de rede e de ataque."
pubDate: 2026-10-14
tags: ["Cloudflare", "Observabilidade"]
---

Quando um site ou uma API está atrás da Cloudflare, toda requisição passa primeiro pela borda. Isso faz da Cloudflare um ponto de observação privilegiado: ela vê o que chega **antes** da sua aplicação — inclusive o que nunca chega até ela.

## Três perguntas que a borda responde rápido

1. **O problema é na origem ou antes dela?** Erros 5xx gerados pela origem aparecem de forma diferente de erros de conexão entre a Cloudflare e o servidor. Separar os dois economiza muito tempo de investigação.
2. **É tráfego legítimo ou ataque?** Os eventos de segurança mostram o que foi bloqueado ou desafiado por regras de WAF, rate limiting e proteção contra bots.
3. **De onde vem o tráfego?** País, ASN, caminho e status por minuto ajudam a perceber rapidamente quando um pico é de uma única origem.

## De onde tirar os dados

- **Painéis de Analytics e Segurança** no dashboard, para a investigação do dia a dia.
- **API GraphQL de Analytics**, para levar os mesmos números para o Grafana e cruzar com métricas da aplicação.
- **Logpush**, para enviar logs detalhados a um destino de armazenamento ou SIEM (disponibilidade varia por plano e tipo de log).
- **Observability dos Workers**, com logs e traces de código que roda na própria borda.

## Um exemplo de painel útil

No meu laboratório de estudos, monto um dashboard no Grafana alimentado pela API da Cloudflare com:

- requisições por status HTTP (2xx, 4xx, 5xx) ao longo do tempo;
- percentual servido do cache;
- eventos de segurança por ação (bloqueio, desafio);
- top países e top caminhos com erro.

Colocado lado a lado com o painel da aplicação, fica fácil responder: *o pico de erro começou na borda ou dentro de casa?*

## Conclusão

A observabilidade costuma começar no servidor. Começar na borda dá contexto: mostra o que o usuário realmente experimentou e ajuda a mandar o incidente para o time certo logo na primeira análise.
