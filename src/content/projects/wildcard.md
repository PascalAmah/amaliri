---
title: 'Wildcard'
description: 'A real-time browser-based multiplayer card game for 2–10 players, built around color/number matching, action cards, and wild cards. Create or join a table with a room code — no installs, no accounts required.'
pubDate: '2026-07-25'
tags:
  [
    'React',
    'TypeScript',
    'Socket.IO',
    'Fastify',
    'Redis',
    'Tailwind CSS',
    'GSAP',
    'Game',
    'WebSocket',
    'pnpm Workspaces',
  ]
githubUrl: 'https://github.com/PascalAmah/wildcard'
liveUrl: 'https://wildcard-client-tau.vercel.app'
status: 'completed'
homeFeatured: true
homeOrder: 8
problem: 'Most multiplayer card games require account creation, app downloads, or complex setup before players can join a match. The friction of onboarding kills spontaneous play; by the time everyone installs the app and creates accounts, the moment has passed. Building a real-time multiplayer experience that works instantly in a browser, stays synchronized across devices, and handles edge cases like disconnections, reconnections, and bots requires careful architecture around state management, WebSocket communication, and game logic distribution.'
whatWasBuilt: "Built Wildcard as a full-stack multiplayer card game monorepo using pnpm workspaces. The shared package contains the pure game engine; card validation, effect application, turn ordering, and bot logic ensuring the same rules power both the client and server. The Fastify backend orchestrates game rooms, manages Socket.IO connections, schedules bot turns, and persists room state to Redis. The React frontend delivers smooth animations via GSAP Flip and timeline, responsive layouts with Tailwind CSS, and real-time updates through Socket.IO. Three play modes are supported: create a private table and share a room code, join an existing table by code, or play instantly against computer opponents."
highlights:
  - 'Real-time multiplayer with room codes — no accounts or installs needed'
  - 'Create Table, Join Table, and Play vs Computer modes'
  - 'Full action card system: Skip, Reverse, Draw Two, Wild, Wild Draw Four'
  - 'Scoring system tracking points per round and cumulative totals'
  - 'GSAP-powered card animations for draw, play, and shuffle effects'
  - 'Redis-backed room persistence enabling server restarts without data loss'
  - 'Play vs Computer mode with bot opponents'
  - 'Socket.IO real-time communication with automatic reconnection'
  - 'Monorepo architecture with shared game engine consumed by client and server'
challenges: "The core challenge was maintaining perfect game state synchronization across multiple connected clients under unreliable network conditions. Every card play, draw, and action effect must be validated server-side, broadcast to all players, and rendered identically on every screen; even when players connect mid-game or reconnect after a disconnect. The solution involved a single-source-of-truth game engine in the shared package, server-authoritative state management, optimistic UI updates on the client, and Redis persistence so rooms survive server restarts. Bot scheduling added another layer of complexity; computer opponents must respect real turn timing without blocking the event loop."
metrics:
  - value: '2–10 Players'
    label: 'Multiplayer room capacity'
  - value: 'Real-time'
    label: 'Socket.IO live synchronization'
  - value: '3 Modes'
    label: 'Create, Join & Play vs Computer'
  - value: 'Monorepo'
    label: 'Shared engine across client & server'
architecture:
  - label: 'React 18 + Vite'
    detail: 'Client UI with GSAP animations'
  - label: 'Socket.IO'
    detail: 'Real-time bidirectional communication'
  - label: 'Fastify Server'
    detail: 'Room orchestration & game validation'
  - label: 'Redis'
    detail: 'Room state persistence & recovery'
logo: './images/wildcard/wildcard-icon-tile.svg'
heroImage: './images/wildcard/wildcard-landing.png'
uiImages:
  - './images/wildcard/wildcard-lobby.png'
  - './images/wildcard/wildcard-waiting.png'
  - './images/wildcard/wildcard-table.png'
  - './images/wildcard/wildcard-scoreboard.png'
---
