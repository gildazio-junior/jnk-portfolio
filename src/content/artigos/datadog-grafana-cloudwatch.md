---
title: "Datadog, Grafana e CloudWatch: o que aprendi usando os três em produção"
description: "Diferenças práticas entre as três ferramentas, do ponto de vista de quem passa a noite olhando para elas."
pubDate: 2026-10-15
tags: ["Datadog", "Grafana", "CloudWatch"]
---

Nos últimos anos eu acompanhei serviços críticos — pagamentos, verificação de identidade e transações — usando **Datadog**, **Grafana** e **Amazon CloudWatch**, e participei de uma migração de dashboards do Datadog para o Grafana. Não é uma comparação de vendedor: é o que faz diferença às três da manhã, durante um incidente.

## Datadog: tudo no mesmo lugar

O ponto forte do Datadog é a integração. Métricas, logs, traces e alertas convivem na mesma interface, e ir de um gráfico com pico de erros para os logs daquele minuto é questão de um clique.

O que observei na prática:

- **Curva de aprendizado curta** para quem está no N1/N2: a busca de logs é intuitiva.
- **Custo** cresce rápido com volume de logs e quantidade de hosts — é preciso governança sobre o que entra.
- **Dependência**: dashboards e consultas usam a sintaxe própria da ferramenta, e isso pesa na hora de sair.

## Grafana: a camada de visualização

O Grafana não é "um Datadog mais barato" — ele é, antes de tudo, uma camada de visualização que conversa com muitas fontes de dados (CloudWatch, Prometheus, Loki, bancos SQL e outras). Isso traz liberdade e também responsabilidade: a qualidade do dashboard depende da qualidade da fonte.

Na migração que acompanhei, os dashboards foram importados a partir dos JSON do Datadog. A lição principal: **importar não é migrar**. Consultas, nomes de campos de log e variáveis precisam ser revisados um a um, porque carregam resquícios da ferramenta anterior.

## CloudWatch: a fonte que já está lá

Para quem roda na AWS, o CloudWatch está presente desde o primeiro dia. Ele brilha como **fonte** de logs e métricas da própria AWS; como interface de investigação, combiná-lo com o Grafana costuma deixar o dia a dia mais confortável.

## Como eu escolheria hoje

| Situação | Caminho que eu consideraria |
| --- | --- |
| Time pequeno, precisa de tudo pronto e tem orçamento | Datadog |
| Já está na AWS e quer controlar custo | CloudWatch + Grafana gerenciado |
| Quer stack aberta e portável | Grafana + Prometheus/Loki/Tempo + OpenTelemetry |

Mais importante que a ferramenta é a pergunta que o dashboard responde. Um bom painel de incidente diz, em segundos, **o que está afetando o cliente** — não quantos núcleos de CPU cada servidor está usando.
