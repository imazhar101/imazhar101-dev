---
title: 'Giving the fleet one set of hands'
desc: 'Agents that can only talk are half useful. They needed to do things. The obvious way to give them tools falls apart at real numbers, so the tools live behind one gateway and load only when a task asks.'
date: 2026-10-28
tags: ['agents', 'mcp']
draft: true
---

Agents that can only talk are half useful. They needed to do things: query a database, open a ticket, send a message, read a calendar. The tools.

The obvious way is to hand each agent the tools it needs, with their full definitions, up front. That falls apart quickly once you have real numbers. My gateway now fronts 66 providers and 1,111 tools between them. Loading all of those definitions into a session costs almost 290,000 tokens before the agent reads a single instruction. It does not fit, and even when a subset fits, you are paying to describe capabilities the task will never touch.

So the tools do not live in the agents. They live behind one gateway, and the agent discovers what it needs when a task calls for it. At rest, nothing tool-related is in context. The agent lists what exists, reads the one definition it needs, then calls it. A task that touches three tools pays for three definitions, not eleven hundred.

I wrote two deep dives on this part, because the token math is the whole argument and it earned the detail:

- [Your MCP server ships too many tools](/2026/10/22/too-many-tools/)
- [Teaching a model to use tools it cannot see](/2026/10/23/tools-it-cant-see/)

The short version for this series: one gateway, every tool behind it, nothing loaded until it is needed. That is what gave the fleet hands without burying each agent in a phonebook of capabilities it would never open.

With tools in place, the next limit was me. I was still the one carrying messages from one agent to another. That is the next post.
