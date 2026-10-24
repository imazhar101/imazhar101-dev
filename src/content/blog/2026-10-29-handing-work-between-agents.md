---
title: 'Teaching agents to hand work to each other'
desc: 'For a while I was the message bus, copying work from one agent to another by hand. Fine at two agents, a job at a dozen. Here is how they started passing tasks directly, and the one boundary I kept.'
date: 2026-10-29
tags: ['agents', 'orchestration']
draft: true
---

For a while I was the message bus. The writing agent would produce something that needed a fact checked, and I would copy it to the research agent. The infra agent would run into a question outside its domain, and I would carry it over. Every cross-domain task routed through me, by hand.

That is fine at two agents. At a dozen it is a job.

The fix was to let agents hand work to each other directly. One agent can pass a task to another by name, into a fresh thread or into the other agent's existing one, with the context it needs attached. A small script does the routing, and there is a record of who asked whom for what.

I also added an orchestrator: one agent whose domain is the other agents. When a request does not obviously belong to a single domain, or spans several, it goes there, and the orchestrator breaks it up and routes the pieces. It is the closest thing the fleet has to a manager.

Here is the honest part. Handoffs are where a fleet gets risky. An agent acting on another agent's output, with no human in between, can compound a mistake fast. So the rule is that anything leaving the house stops for me: a published post, a sent message, any change to the outside world. Agents can prepare and pass work among themselves freely. They do not get to speak to the outside world on their own.

That boundary is the difference between a fleet that saves me time and one that embarrasses me. Next: the interface, because a terminal turned out to be the wrong place to meet a dozen agents.
