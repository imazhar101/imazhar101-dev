---
title: 'Watching the watchers'
desc: 'Once agents run on their own and hand work to each other, you lose the thing you had running every step by hand: you knew what happened. The last pieces are about visibility, and a lesson about delegation I did not expect.'
date: 2026-11-02
tags: ['agents', 'observability']
draft: true
---

Once agents run on their own and hand work to each other, you lose the thing you had when you ran every step by hand: you knew exactly what happened. A fleet that works while you sleep can also make a mess while you sleep, quietly.

So the last pieces are about visibility, not capability.

Every tool call the fleet makes is logged where I can see it. If an agent queried a database, sent a message, or changed something, there is a record, and an unusual pattern is easy to spot because the normal pattern is sitting right next to it. The point is not to read every line. It is that I can, when something looks off.

The second piece is tickets. Any real piece of work, a build, a config change, a multi-step job, gets a ticket in a tracker the agents write to themselves. One agent owns it and leaves a short note at each milestone with the commit or link attached. I open the board and see who did what and how far it got, without reconstructing it from chat logs. It is the same reason you ask people to leave a paper trail, applied to agents.

There is a lesson in here I did not expect when I started. Running a fleet of agents turns out to be mostly a management problem, not an engineering one. The things that make it work are the same things that make a team of people work: clear ownership, narrow scope, writing down what you decided, not speaking for the group unless asked, and staying quiet unless something matters. I think I understand delegation better now than I did before I had a dozen agents to delegate to.

That is where the series ends, roughly where the system sits today. It is still a pile of markdown, a gateway, and some scripts. The next layer, letting the agents propose changes to their own setup so I can review them the way I would review a junior engineer's pull request, is the part I am still working out. When it holds together, I will write it up.
