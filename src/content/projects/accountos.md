---
title: 'AccountOS'
description: 'Programmable virtual account infrastructure built on Nomba, enabling rule-driven automation, immutable ledgers, treasury management, and auditability for fintech products.'
pubDate: '2026-06-15'
tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'BullMQ', 'Nomba APIs', 'FinTech']
githubUrl: 'https://github.com/PascalAmah/accountos'
status: 'in-progress'
# homeFeatured: true
homeOrder: 7
problem: 'Traditional virtual accounts are passive collection endpoints—they can receive payments but cannot react to events, enforce business rules, or maintain an auditable financial state. Fintechs building products such as savings groups, escrow services, rent collection, or treasury management often have to implement these capabilities themselves, resulting in duplicated effort, inconsistent business logic, and limited financial traceability.'
whatWasBuilt: 'Built AccountOS as a programmable financial infrastructure platform during the Nomba × DevCareer Hackathon (Infrastructure Track). Developed with NestJS, PostgreSQL, Prisma, Redis, and BullMQ, the platform extends Nomba Dedicated Virtual Accounts with four core capabilities: an Identity Layer for customer lifecycle management, a declarative Rules Engine for event-driven automation, an immutable Ledger and Audit Layer for financial traceability, and a Treasury Layer that allocates incoming funds into logical buckets without moving money between bank accounts. The system also supports webhook verification, idempotent request processing, asynchronous rule execution, settlement workflows, and a complete mock mode that allows developers to build and test integrations without live Nomba credentials.'
highlights:
  - 'Programmable virtual accounts powered by declarative JSON rules'
  - 'Identity Layer with KYC tiers, customer hierarchies, and append-only name history'
  - 'Immutable ledger and insert-only audit trail for complete financial traceability'
  - 'Treasury Layer with logical buckets, internal fund allocation, and settlement workflows'
  - 'Webhook-driven event processing with BullMQ queues and automatic retry handling'
  - 'Idempotent APIs for safe financial operations and webhook processing'
  - 'Mock mode enables full development and testing without live Nomba credentials'
  - 'Built as a Nomba × DevCareer Hackathon Infrastructure Track project'
challenges: 'One of the most challenging aspects was designing a financial system that remains deterministic under failures and retries. Rule execution, webhook delivery, treasury allocation, and settlements all needed to be idempotent while preserving an immutable financial history. This required separating logical fund allocation from actual bank movement, implementing append-only ledger records, asynchronous processing with BullMQ, and strict validation of rule definitions before execution to prevent invalid financial states.'
metrics:
  - value: '4 Layers'
    label: 'Identity, Rules, Ledger & Treasury'
  - value: 'Immutable'
    label: 'Ledger & audit history'
  - value: 'BullMQ'
    label: 'Asynchronous rule execution'
  - value: 'Mock Mode'
    label: 'Offline Nomba development'
architecture:
  - label: 'NestJS Platform'
    detail: 'Rules engine & financial orchestration'

  - label: 'PostgreSQL'
    detail: 'Ledger, audit & business data'

  - label: 'BullMQ + Redis'
    detail: 'Webhook processing & retries'

  - label: 'Nomba APIs'
    detail: 'Virtual accounts & settlements'

heroImage: './images/accountos/accountos-dashboard.png'

uiImages:
  # - './images/accountos/accountos-dashboard.png'
  - './images/accountos/accountos-customers.png'
  - './images/accountos/accountos-account.png'
  - './images/accountos/accountos-rules.png'
  - './images/accountos/accountos-ledger.png'
  # - './images/accountos/accountos-audit.png'
---
