---
title: 'Your agents'' memory is quietly lying to them'
desc: 'Give one agent a memory file and it just works. Run a fleet and the same memory slowly fills with two versions of the truth, both reading as current. Here is how that crept in, and the few rules that stopped it.'
date: 2026-10-27
tags: ['agents', 'memory']
draft: true
---

Start simple. You give an agent a folder of markdown and tell it to write down what it learns. Next session it reads the folder back before it starts. That is the whole feature, and for one agent, on day one, it works.

So you add more agents. Each owns a domain, each writes to memory the same way. For a while it keeps working. Then, somewhere past the third or fourth, a failure shows up that you never saw with one, and it never once throws an error.

## The bug is that nothing breaks

An agent learns a fact today and writes it down. A week later the fact changes. The agent writes the new version in a new session, in a new file, and moves on. Both files are now on disk. Both are indexed. Both read as true.

Next time anything searches memory, it can pull back either one. The dead note and the live note look identical: same confident tone, no mark saying one is stale. Whatever is reading has no way to tell which is current, so some of the time it acts on the old one. It might use a file path that moved, a credential that was rotated, or a deadline that already shifted.

I went looking for how deep it ran. One sweep turned up around 2,200 pairs of notes that contradicted each other where both still read as live, spread across paths, config, credentials, and dates. The memory had been quietly keeping two versions of the truth for months, and nothing in the system was designed to catch it.

## Why you only feel this at scale

One agent does this too. You just do not notice, because one agent writes slowly and tends to read what it wrote last. A fleet writes constantly and in parallel, and the agents read each other. Volume turns a slow leak into a flood you cannot ignore. The bug was always in the design. More agents is what made it loud.

## Fix 1: supersede, do not accumulate

The rule that fixes the most: when you write a fact that contradicts one already on disk, you do not add the new one next to the old. You amend the old, in the same change. The live note holds only what is true right now. No crossed-out lines, no update tacked onto the original. If a search hits it, it is current by construction.

## Fix 2: keep the history, out of the reading path

The naive version of Fix 1 is to overwrite the old value and move on. That throws away the part that is often the most useful: when it changed, and what it used to be. So the old value does not get deleted. It moves to a sibling history file, with its date. The live file stays clean for everyday reads, and the record of the change survives where a normal lookup will not trip over it.

## Fix 3: make the overlap findable

A plain keyword search is the reason stale facts survive. The new note usually words things differently from the old one, so a grep for today's phrasing never surfaces yesterday's contradiction sitting two files away. Semantic search over the whole set closes that gap. Every hit comes back dated, and flagged when a newer note on the same subject exists, so the moment two versions do coexist they show up together instead of hiding from each other.

## What actually fixed it

Not the cleanup. The cleanup found the 2,200 pairs that already existed. What keeps the number from climbing back is the rule every write runs through: supersede in place, archive the old value with its date, keep it searchable by meaning. A one-time sweep fixes today. The rule is what fixes tomorrow.

The lesson generalizes past agents. Any long-lived memory that only ever appends is collecting contradictions you cannot see. The fix is not more storage. It is deciding, on every write, what is still true.
