---
title: 'Your MCP server ships too many tools'
desc: 'My gateway fronts 1,111 tools. Loading their schemas up front costs 289,874 tokens before the model reads a single instruction. The fix is to stop loading them.'
date: 2026-10-22
tags: ['mcp', 'tooling']
draft: false
---

Most MCP servers hand the model every tool they have, with full JSON schemas, before it does anything.

I run a gateway in front of 66 MCP providers. Together they expose 1,111 tools. Loading all of those schemas at session start costs 289,874 tokens, about 261 per tool. That does not fit in a 200k context window. The model would be out of room before it read a single instruction.

That number is the whole argument.

## Front-loading is a default, not a requirement

The protocol says a client can ask a server what tools it has. It does not say the client must put all of them in the model's context and keep them there for the rest of the session. That part is a client-side default, and almost every client does it, because it is the simplest thing that works when a server has nine tools.

Run the arithmetic on a server with forty. At 261 tokens per tool you are spending ten thousand tokens per turn describing capabilities the current task will never touch, and you pay it again on every request.

## What I do instead

At rest, nothing is in context. The gateway is a CLI, so the model discovers what it needs when a task asks for it:

```bash
mcpx list | grep jira            # find candidates
mcpx jira__search_issues --help  # read one schema
mcpx jira__search_issues '{"jql": "project = ENG AND status = Open"}'
```

The only schema that enters context belongs to the tool being called. A task that touches three tools pays roughly 800 tokens instead of 289,874, so about 99.7% of the schema surface never shows up.

The term for this is progressive disclosure. It is lazy loading applied to capability instead of data: advertise that something exists, fetch the detail on demand.

## What it costs

This is not free, and the trade is worth stating plainly.

Discovery adds a round trip before the first call. On a task of any real length that is noise, but on a one-shot call it is pure overhead, which is why a handful of frequently used tools are worth keeping resident.

Descriptions become the index. When the model cannot see every tool, it finds tools by searching names and descriptions, so a tool called `process_v2` with no description is invisible. Naming stops being cosmetic.

The model also has to be told to look. Left alone it will confidently assert a tool does not exist, because it cannot see one. The rule that fixed this for me is blunt: never claim a tool is missing, and never diagnose an error, from memory. Verify, then answer. The same applies to memory of past sessions, where a remembered tool name is a renamed tool waiting to fail.

Every one of those is a smaller problem than running out of context before you start.

## Measure your own

Add up the tokens in your tool schemas. Mine prints per provider:

```
PROVIDER        TOOLS     TOKENS    AVG/TOOL
canvas            227     70,367         310
metabase           95     11,964         126
google             89     20,615         232
...
TOTAL           1,111    289,874
```

Then ask what fraction of your context window that is, and how many of those tools the task in front of you will actually call.

If the total is small, front-load it and forget this post. If it is a tenth of your window, you have a budget problem that gets worse with every server you add, and no amount of prompt tuning gives those tokens back.

Front-loading does not scale. Discovery does.
