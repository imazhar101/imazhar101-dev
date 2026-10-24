---
title: 'When one agent stopped being enough'
desc: 'Every domain wanted a different voice, different rules, and a different memory. Cramming them into one agent meant every task carried the baggage of every other. Splitting fixed that and introduced a worse problem.'
date: 2026-10-26
tags: ['agents', 'fleet']
draft: true
---

The single agent worked until I noticed I was fighting its context.

Here is the pattern. I would spend an hour with it on infrastructure, deep in logs and config. Then I would ask it to help write something, and the answer would come back stiff and technical, because the whole session was still colored by the infra work. Or the reverse: a long creative session would leak into a later question about a bill and give me something vague and over-friendly.

Each domain wanted a different voice, different rules, different memory, and a different set of tools. Keeping them in one agent meant every task carried the baggage of every other task. The context was never clean.

So I split it. Instead of one assistant holding everything, I gave each domain its own agent, and each got a workspace: its own instruction file, its own memory folder, its own identity. The infra agent does not know or care about the writing. The writing agent has never seen a log file. When I want to work on money, I talk to the agent that only thinks about money.

The immediate win was focus. A narrow agent with only its own domain loaded gives sharper answers, because it is not hedging against nine other contexts. It was also cheaper in a way I did not expect, since I was no longer dragging a giant shared context into every single request.

Splitting solved the context problem and quietly created a new one.

Now I had many agents all writing to memory the same way, in parallel, across days. The single agent's habit of leaving stale facts lying around had been a small mess. Spread across a dozen agents all adding notes constantly, it turned into something worse. They started, in effect, disagreeing with each other and with their own past selves, and nothing in the system was built to notice.

That bug is the next post, and it is my favorite one, because it stays invisible until you go looking for it.
