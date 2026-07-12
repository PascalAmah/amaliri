---
title: 'AfroGoods'
description: 'B2C marketplace built for a Canadian client, enabling customers across the diaspora to shop African food products online, with a built-in advert hub for community listings.'
pubDate: '2026-03-01'
tags: ['Node.js', 'React', 'NestJS', 'MongoDB', 'Stripe', 'REST APIs']
liveUrl: 'https://afrogoods-web.onrender.com'
status: 'completed'
homeOrder: 1
problem: "A Canadian business serving the African diaspora needed a dedicated online marketplace for African food products. Customers were scattered across WhatsApp groups, Facebook Marketplace, and other generic platforms that weren't designed for this niche. The business also wanted a community advert hub where registered buyers could post listings while maintaining administrative control over published content."
whatWasBuilt: 'Led backend development using NestJS and MongoDB, building the core platform services including product catalogue management, cart and checkout, Stripe-powered order processing with webhook handling, inventory management, authentication, and role-based access control. Developed the advert hub where registered buyers can submit time-limited adverts that require admin approval before publication. Also contributed to parts of the React frontend to support key customer and administrative workflows. The admin dashboard manages users, product categories, inventory, orders, and the advert approval queue. Deployed on Render with MongoDB Atlas.'
highlights:
  - 'Built for a Canadian business serving the African diaspora'
  - 'Product catalogue with category filtering and search'
  - 'Stripe payments with webhook-driven order confirmation and inventory updates'
  - 'Built-in advert hub where registered buyers submit adverts for admin approval'
  - 'Backend architecture built with NestJS and MongoDB'
  - 'Admin dashboard for users, categories, inventory, order management, and advert moderation'
  - 'Role-based access for buyers and administrators'
  - 'Contributed to key frontend features alongside backend development'
  - 'Deployed on Render with MongoDB Atlas'
challenges: 'Stripe webhook reliability was the most challenging aspect of the backend, requiring idempotent processing to prevent duplicate order confirmations and inventory updates. The advert approval workflow also needed to balance ease of administration with enough moderation control to ensure only approved listings were published.'
metrics:
  - value: 'Idempotent'
    label: 'Stripe webhook order settlement'
  - value: 'RBAC'
    label: 'Buyer & admin access control'
  - value: '2 apps'
    label: 'Storefront + admin panel'
  - value: 'Full stack'
    label: 'NestJS API + MongoDB Atlas'
architecture:
  - label: 'React client'
    detail: 'Storefront + admin dashboard'
  - label: 'NestJS API'
    detail: 'Catalogue, cart, orders, ad hub'
  - label: 'Stripe webhooks'
    detail: 'Idempotent payment settlement'
  - label: 'MongoDB Atlas'
    detail: 'Products, users, orders, inventory'
heroImage: './images/afrogoods/afrogoods-hero.png'
uiImages:
  - './images/afrogoods/afrogoods-home.png'
  - './images/afrogoods/afrogoods-product.png'
  - './images/afrogoods/afrogoods-checkout.png'
  - './images/afrogoods/afrogoods-admin.png'
---
