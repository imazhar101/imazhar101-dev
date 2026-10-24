---
title: 'The night the agents started working without me'
desc: 'Until a point, every agent did something only because I asked, which meant the fleet was asleep whenever I was. Scheduling changed that, and a 3am ping taught me the rule I now apply everywhere.'
date: 2026-11-01
tags: ['agents', 'automation']
draft: true
---

Up to a point, every agent did something only because I asked. Useful, but it meant the fleet was asleep whenever I was.

The change was scheduling. Agents can now wake up on their own, on a cron, do a piece of work, and message me only if there is something worth saying. A nightly pass that tidies and consolidates each agent's memory. A weekly pass that reads back the week's work and pitches things worth writing about. A nightly digest of how the blog is doing. None of it needs me in the loop to start.

The first version got one thing badly wrong, and it taught me the rule I now apply everywhere. One of the nightly jobs pinged me at 3:14 in the morning to tell me it had nothing to report. It had done its check, found nothing worth saying, and then said exactly that, at full volume, in the middle of the night.

A scheduled agent that talks when it has nothing to say trains you to ignore it. So now the default for every scheduled job is silence. It runs, and if there is nothing worth my attention, it says nothing at all. It reaches me only when the result clears a bar I set in advance: traffic spiked, a deploy looks broken, something actually needs a decision. The quiet is the feature, not a missing one.

That shifted the fleet from a set of tools I operate into something closer to staff who work a shift and leave a note only when it matters. Which raises the obvious next question. If they are doing work while I sleep, how do I know what they did? That is the last post.
