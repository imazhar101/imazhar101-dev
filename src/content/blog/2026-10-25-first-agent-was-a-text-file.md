---
title: 'My first agent was a text file and a prompt'
desc: 'No framework, no platform. One markdown file of instructions and a folder it could read and write. It got further than it had any right to, and the ways it fell over set up everything that came after.'
date: 2026-10-25
tags: ['agents', 'memory']
draft: true
---

The first agent had no framework behind it. It was a single markdown file of instructions and a folder it was allowed to read and write.

The instructions said who it was, what it cared about, and how I wanted it to talk. The folder was its memory. At the start of a session it read the folder. During the session, when it learned something worth keeping, it wrote a new file. Next time, it read everything back before doing anything. That was the whole design.

What surprised me is how far that got. The persistence alone changed the experience. An assistant that remembers the decision you made last week, the name of the thing you are building, and the way you like answers formatted is a different tool from one that starts cold every time. Most of the value was just write it down and read it back.

The naive parts showed up fast.

Everything went into one pile. New facts got appended to whatever file was handy, so the memory grew but never got organized. Reading everything back was fine at ten files and painful at a hundred. And there was no notion of a fact going out of date. If something changed, the agent wrote the new version and left the old one sitting there, just as confident.

I also hard-coded too much into the instructions. Every preference, every rule, every bit of context lived in the one prompt file, so it kept getting longer, and the agent spent more of its attention reading its own rulebook than doing the task.

But the shape was right, and I kept it. Even now, every agent in the fleet is still an instruction file plus a memory folder. Everything that came later is a fix for a specific way this simple version fell over.

The first of those fixes came when one agent stopped being enough. That is the next post.
