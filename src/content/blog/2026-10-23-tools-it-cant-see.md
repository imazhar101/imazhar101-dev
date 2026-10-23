---
title: 'Teaching a model to use tools it cannot see'
desc: 'Hiding 1,111 tool schemas from the model was the easy part. Getting it to reliably call tools it can no longer see is the work worth writing down.'
date: 2026-10-23
tags: ['mcp', 'tooling']
draft: false
---

Last post I argued your MCP server ships too many tools, and that the fix is to stop loading their schemas. 1,111 tools, 289,874 tokens, gone from the session by default. The obvious follow-up came back fast: if the schemas are not in context, how does the model know how to call anything?

That is the real work. Hiding the tools is easy. Getting a model to reliably use tools it cannot see is the part worth writing down.

## The loop

The gateway is a CLI. The model does not get a tool list, it gets a way to ask for one. Three steps:

```bash
mcpx list | grep jira                 # what exists
mcpx jira__search_issues --help       # one schema, on demand
mcpx jira__search_issues '{"jql": "project = ENG AND status = Open"}'
```

Only the schema for the tool being called ever enters context. A task that touches three tools pays about 800 tokens instead of 289,874.

## What breaks

Take the schemas away and a model does what you would expect: it guesses. It invents a parameter that sounds right. It calls a tool that does not exist because a similar one does on some other server. It passes `issue_id` when the tool wants `issueKey`. With the full schema in context these errors mostly do not happen, because the answer is sitting right there. Progressive disclosure trades that away, and you have to buy it back.

So the rule in the system prompt is one line: before calling any tool, run its `--help` and read the schema. Never guess a parameter name.

That sounds trivial. It is the whole thing. The model is perfectly capable of reading a schema it asked for. It is also perfectly capable of skipping that step when it feels confident. The confidence is the bug. A cheap `--help` call beats a tool call that fails on a bad argument, or worse, one that succeeds on the wrong one.

## The gotcha that taught me this

`mcpx --help` on its own does not print general help. It errors with `Tool not found`, because help is per-tool. The first few times a model hit that, it read `Tool not found` as "mcpx is broken" and fell back to guessing. The fix was to say so out loud: help is per-tool, a bare `--help` is an error, not a dead end. Written down once, the failure stopped.

That is the pattern for the whole setup. Every place the model can go wrong without the schema in front of it, you write one sentence that closes the gap. The schemas leave context; a short list of rules takes their place, and the rules cost a few hundred tokens instead of a few hundred thousand.

## Is it worth it

Discovery adds a round trip before the first call. On a task of any real length that is noise. On a one-shot it is pure overhead, which is the honest cost. But the system is observable, so I can see every call the fleet makes, and the shape is clear: real tasks touch a handful of tools out of eleven hundred, and they find them fine. The 99.7% that never loads was never going to be used that session.

Hiding the tools saved the tokens. Teaching the model to go find them is what made it usable.
