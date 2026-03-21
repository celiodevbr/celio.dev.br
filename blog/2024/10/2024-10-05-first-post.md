---
title: "Como escrever posts neste blog"
description: "Um guia rápido com exemplos de formatação, componentes e recursos disponíveis nos posts."
date: 2024-10-05T21:00:00-03:00
tags:
  - documentação
  - guia
  - markdown
  - eleventy
---

Este post serve como uma referência rápida de escrita e formatação para este blog.

A ideia aqui é mostrar, em um só lugar, alguns dos principais recursos disponíveis nos posts: parágrafos normais, imagens, listas, notas de rodapé e componentes customizados.

## Texto comum

Posts podem ser escritos normalmente em Markdown, com títulos, subtítulos, listas, links, ênfase e blocos diversos.

Você pode, por exemplo, destacar palavras em **negrito**, usar *itálico* ou incluir trechos de `código inline`.

Também é possível organizar o conteúdo em seções para facilitar a leitura.

## Tags de exemplo

Este post usa algumas tags apenas como demonstração:

- `documentação`
- `guia`
- `markdown`
- `eleventy`

Essas tags podem ser usadas para categorizar conteúdos e facilitar navegação futura.

## Blocos informativos

O blog também aceita caixas informativas customizadas.

{% infobox "info", "Lembre-se de sempre salvar seu trabalho antes de desligar." %}

Esse tipo de bloco é útil para observações gerais, contexto extra ou explicações complementares.

{% infobox "warning", "Salve o conteúdo antes de desligar!" %}

Esse formato pode ser usado para alertas, limitações, observações importantes ou detalhes que merecem mais atenção.

{% infobox "danger", "Você perdeu todo seu trabalho!" %}

Já essa variação pode ser reservada para erros, avisos críticos ou qualquer informação que realmente precise de destaque forte.

## Imagens

Também é possível inserir imagens normalmente no meio do conteúdo:

![Image](/assets/posts/o-que-e-post.png)

Isso pode ser útil para ilustrar exemplos, mostrar interfaces, anexar capturas de tela ou complementar explicações visuais.

## Listas

Listas não ordenadas:

- Primeiro item
- Segundo item
- Terceiro item

Listas ordenadas:

1. Primeiro passo
2. Segundo passo
3. Terceiro passo

## Citações

Blocos de citação também funcionam bem para notas, trechos destacados ou observações editoriais.

> Este é um exemplo de citação em bloco dentro de um post.

## Notas de rodapé

O blog também suporta notas de rodapé, como esta aqui.[^1]

Esse recurso é útil quando você quer adicionar contexto sem interromper demais o fluxo principal do texto.[^2]

## Encerramento

No geral, este post funciona como uma pequena documentação prática do formato aceito pelo blog.

Conforme o projeto evoluir, esta página pode ser expandida com mais exemplos e componentes.

[^1]: Este é um exemplo simples de footnote.

[^2]: Notas de rodapé são úteis para observações paralelas, referências ou explicações complementares.