---
title: 'Why one engineer ends up building a fleet of agents'
desc: 'I started with one assistant for everything. It worked until the context from every task started bleeding into every other one. This is the first post in a series on what I built instead, mistakes included.'
date: 2026-10-24
tags: ['agents', 'fleet']
draft: true
---

For a long time I had one assistant. One chat window, one pile of context, and every kind of task went into it. Debug a deploy, draft a post, check a bill, plan a trip. It worked until it didn't.

The failure was not that the model was weak. It was that everything shared one context. Ask it about infrastructure right after a long thread about writing, and the writing voice bled into the answer. It forgot things between sessions because there was nowhere durable to put them. And the more I loaded in to make it useful, the more generic its answers got, because it was always holding ten unrelated things at once.

So I tried the opposite. Instead of one assistant that knew a little about everything, I gave myself many narrow ones, each owning a single domain and nothing else. One for code and infrastructure. One for writing. One for money. A handful more. Each gets its own instructions, its own memory, and no view into the others unless I wire it up on purpose.

That is the fleet. Today it is about a dozen agents. Calling it a fleet makes it sound more planned than it was. It grew one agent at a time, usually because the current setup broke in some specific way and splitting it was the obvious fix.

This is the first post in a series about how it actually got built. Not the clean architecture-diagram version. The version with the wrong turns in it, because most of what I learned came from the parts that did not work the first time.

A rough map of what I want to cover, in the order it happened:

- what the very first agent was, and why it was almost embarrassingly simple
- the point where one agent stopped being enough
- the memory bug that only shows up once you have more than one
- giving them tools without drowning them in tool definitions
- letting them hand work to each other instead of routing everything through me
- the interface, the voice, and the schedules that let them run while I sleep

None of this needed a framework or a big platform. Most of it is markdown files, a few scripts, and a gateway. The interesting part was never the tech. It was figuring out what breaks when you stop having one assistant and start having many.

Next: the first agent, which was a text file and a prompt.
