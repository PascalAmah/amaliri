---
title: 'BarqPix'
description: 'Real-time event photo sharing platform with QR-based access. Guests scan a QR code to instantly join a private event gallery, upload photos, and view live updates no app installation required.'
pubDate: '2025-01-15'
tags: ['Next.js', 'Express.js', 'Firebase', 'AI']
githubUrl: 'https://github.com/PascalAmah/BarqPix'
liveUrl: 'https://barq-pix.vercel.app'
status: 'completed'
homeOrder: 3
problem: "Event photos are often scattered across personal camera rolls, messaging apps, and social media, making it difficult for attendees to access and share memories in one place. Existing solutions typically require app downloads, mix content across different events, or aren't designed to handle the burst of simultaneous uploads that occur during live events."
whatWasBuilt: 'Built a QR-powered event media platform where each event has its own isolated gallery. Led the backend architecture using Express.js, designing secure event isolation, access control, and media upload workflows. Implemented a scalable upload pipeline using Firebase Storage to support concurrent uploads while keeping the gallery responsive. Integrated the foundation for AI-powered image tagging and content moderation, allowing the platform to support automated media organization in future iterations. Also built real-time gallery updates using Firebase Realtime Database and collaborated on the Next.js frontend experience.'
highlights:
  - 'QR-based event access—scan to join instantly with no account or app installation'
  - 'Per-event gallery isolation ensuring complete separation between events'
  - 'Asynchronous Firebase Storage upload pipeline for high-concurrency uploads'
  - 'Foundation for AI-powered image tagging and content moderation'
  - 'Real-time gallery updates using Firebase Realtime Database'
  - 'Express.js backend powering event lifecycle, access control, and business logic'
  - 'Responsive Next.js frontend for seamless event participation'
challenges: 'The biggest challenge was supporting dozens of guests uploading photos simultaneously without affecting the live gallery experience. To solve this, uploads were decoupled from processing using an asynchronous pipeline, allowing images to be stored immediately while additional processing could occur independently. The platform was also designed with AI integration points for future automated tagging and moderation without disrupting the existing architecture.'
metrics:
  - value: 'Async'
    label: 'Non-blocking upload pipeline'
  - value: 'Per-event'
    label: 'Fully isolated galleries'
  - value: 'QR Access'
    label: 'No app installation'
  - value: 'AI'
    label: 'Auto tagging & content moderation'
architecture:
  - label: 'QR Access'
    detail: 'Per-event secure gallery entry'
  - label: 'Next.js frontend'
    detail: 'Realtime event gallery'
  - label: 'Express.js API'
    detail: 'Authentication, event lifecycle & business logic'
  - label: 'Firebase Storage'
    detail: 'Media uploads & asynchronous processing'
heroImage: './images/barqpix/barqpix-hero.png'
uiImages:
  - './images/barqpix/barqpix-home.png'
  - './images/barqpix/barqpix-gallery.png'
  - './images/barqpix/barqpix-upload.png'
  - './images/barqpix/barqpix-qr.png'
---
