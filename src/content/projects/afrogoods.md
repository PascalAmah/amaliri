---
title: "AfroGoods"
description: "B2C e-commerce platform for African food products with a built-in ad hub where registered buyers can post their own adverts."
pubDate: "2024-12-01"
tags: ["Node.js", "React", "NestJS", "MongoDB", "Stripe", "REST APIs"]
liveUrl: "https://afrogoods-web.onrender.com"
status: "completed"
homeOrder: 1
problem: "African food products in the diaspora had no dedicated online storefront — buyers were scattered across WhatsApp groups, Facebook marketplaces, and generic platforms that weren't built for this category. There was no central place to browse, buy, and discover African food products."
whatWasBuilt: "Built the full backend with NestJS and MongoDB — product catalogue management, cart and checkout, order processing with Stripe webhooks, and inventory tracking. Alongside the storefront, registered buyers can submit time-limited adverts through a built-in ad hub, which go live only after admin approval. Admin manages users, products, products categories, store inventory, orders, and the ad approval queue. Deployed on Render with MongoDB Atlas."
highlights:
  - "Product catalogue with category filtering and search"
  - "Stripe payments with webhook-driven order confirmation and inventory updates"
  - "Built-in ad hub — registered buyers submit adverts, admin approves before they go live"
  - "Admin panel for users, categories, inventory, order management, and ad approval queue"
  - "Role-based access for buyers and admins"
  - "Deployed on Render with NestJS API and MongoDB Atlas"
challenges: "Stripe webhook reliability was the trickiest part — handling duplicate events and ensuring idempotent order confirmation without double-processing required careful deduplication logic. The ad approval flow also needed to be lightweight enough that admin overhead stayed manageable, while still giving full control over what goes live on the platform."
heroImage: "./images/afrogoods/afrogoods-hero.png"
uiImages:
   - "./images/afrogoods/afrogoods-home.png"
   - "./images/afrogoods/afrogoods-product.png"
   - "./images/afrogoods/afrogoods-checkout.png"
   - "./images/afrogoods/afrogoods-admin.png"
---
