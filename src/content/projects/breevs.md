---
title: "Breevs"
description: "A decentralized web application built on Stacks Blockchain where users participate in a high-stakes elimination game. Smart contracts written in Clarity handle game logic, entry fees, and prize distribution."
pubDate: "2025-02-20"
tags: ["Next.js", "Node.js", "Stacks Blockchain", "Clarity", "Web3"]
githubUrl: "https://github.com/PascalAmah/Breevs"
liveUrl: "https://breevs.pxxl.click"
status: "completed"
homeOrder: 5
problem: "Online games with real money stakes require trust — but trust in a centralized server is fragile. The house can change the rules, manipulate outcomes, or withhold winnings without any recourse for players. There was no elimination game where the rules, entry fees, and prize payouts were fully transparent, immutable, and enforced by code rather than a company."
whatWasBuilt: "Built Breevs as a fully on-chain elimination game on the Stacks Blockchain. All core game mechanics — player entry, round progression, elimination logic, and prize pool distribution — are encoded in Clarity smart contracts, making every rule publicly verifiable and tamper-proof. The Next.js frontend connects directly to the Stacks network via the Stacks.js SDK, so players interact with contracts from their browser wallet without any intermediary. A Node.js backend handles off-chain coordination tasks — game lobby management, notification triggers, and state caching — while keeping financial settlement entirely on-chain."
highlights:
  - "Core game logic fully encoded in Clarity smart contracts — entry, rounds, eliminations, and payouts all on-chain"
  - "Transparent and tamper-proof rules — any player can read the contract and verify the mechanics"
  - "Browser wallet integration via Stacks.js SDK — no custodial accounts, players hold their own keys"
  - "Prize pool accumulates from entry fees and distributes automatically to the winner on contract execution"
  - "Node.js backend manages off-chain coordination (lobby state, notifications) without touching financial logic"
  - "Next.js frontend with real-time round and elimination status updates"
challenges: "The toughest part was designing the contract so that prize distribution is safe even in edge cases — partial round completion, a player disconnecting mid-game, or a transaction failing at the wrong moment. Clarity's decidability constraint (no recursion, bounded execution) forced a disciplined approach to game state transitions. I had to model every state explicitly and ensure the contract could always reach a terminal state without getting stuck or locking funds."
heroImage: "./images/breevs/breevs-hero.png"
uiImages:
   - "./images/breevs/breevs-home.png"
   - "./images/breevs/breevs-game.png"
   - "./images/breevs/breevs-rankings.png"
   - "./images/breevs/breevs-wallet.png"
---
