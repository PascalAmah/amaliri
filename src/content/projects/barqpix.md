---
title: "BarqPix"
description: "Real-time event media platform with QR-based access. Guests scan a code to join an isolated event gallery, upload photos, and browse the live feed — no app download required."
pubDate: "2025-01-15"
tags: ["Next.js", "Express.js", "Firebase", "AI"]
githubUrl: "https://github.com/PascalAmah/BarqPix"
liveUrl: "https://barq-pix.vercel.app"
status: "completed"
homeOrder: 3
problem: "At events, photos end up scattered across personal camera rolls and random group chats — there's no shared, real-time feed that everyone at the event can contribute to and browse. Existing solutions either require app downloads, create privacy risks by mixing events, or can't handle the burst upload traffic that comes with a room full of guests shooting at the same time."
whatWasBuilt: "Led the backend architecture on Express.js, designing the event isolation model so every event gets its own scoped content environment — no cross-event data leakage. Built the media upload pipeline on Firebase Storage with asynchronous processing to handle concurrent uploads without blocking the user experience. Integrated an AI layer for automatic image tagging and content moderation. QR codes are generated per event and act as the access token; scanning one puts guests directly into the right gallery. The Next.js frontend delivers the live feed in real time using Firebase Realtime listeners."
highlights:
  - "QR-based event access — scan to join, no account or app install required"
  - "Per-event content isolation — galleries are fully scoped, no cross-contamination between events"
  - "Asynchronous Firebase Storage pipeline handles burst uploads without degrading the live feed"
  - "AI-powered image tagging and automatic content moderation"
  - "Real-time gallery feed updates via Firebase Realtime Database listeners"
  - "Express.js backend handles custom business logic, access control, and event lifecycle management"
challenges: "The hardest problem was handling simultaneous burst uploads from many guests without stalling the live feed. Processing images synchronously would have made the gallery feel sluggish right when the energy at an event peaks. The fix was fully decoupling upload ingestion from processing — uploads land in Firebase Storage immediately and trigger async functions for AI tagging and thumbnail generation, keeping the gallery feed responsive regardless of upload queue depth."
heroImage: "./images/barqpix/barqpix-hero.png"
uiImages:
   - "./images/barqpix/barqpix-home.png"
   - "./images/barqpix/barqpix-gallery.png"
   - "./images/barqpix/barqpix-upload.png"
   - "./images/barqpix/barqpix-qr.png"
---
