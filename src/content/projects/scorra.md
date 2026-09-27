---
title: 'Scorra'
description: 'LLM evaluation platform that helps teams score, compare, and rank model responses against curated datasets — with multi-evaluator workflows, inter-rater agreement analytics, AI-assisted judging, and portable exports.'
pubDate: '2026-09-20'
updatedDate: '2026-09-27'
category: 'Full-stack'
tags:
  [
    'NestJS',
    'TypeScript',
    'Prisma',
    'PostgreSQL',
    'Redis',
    'Bull',
    'Next.js 15',
    'React 19',
    'TanStack Query',
    'Zustand',
    'Tailwind CSS 4',
    'OpenAI',
    'Anthropic',
    'Zod',
    'pnpm Monorepo',
    'Turborepo',
    'Docker',
  ]
githubUrl: 'https://github.com/PascalAmah/scorra'
status: 'in-progress'
logo: './images/scorra/scorra-logo.png'
problem: 'Evaluating LLM outputs at scale is messy. Teams end up with prompts in spreadsheets, scores spread across Notion docs, and no way to know how much two evaluators actually agree. Without a structured system, it is impossible to tell whether a model is genuinely better or whether the evaluators just happened to be in a good mood. Inter-rater agreement, weighted scoring criteria, and reproducible export formats all get lost in the noise.'
whatWasBuilt: 'Scorra is a pnpm-workspaces monorepo built on Turborepo. The NestJS API handles three evaluation workflows — single-response scoring, pairwise A/B comparison, and multi-response ranking — backed by PostgreSQL via Prisma, Redis-based Bull job queues, and Passport/JWT auth with org-scoped roles. An org admin creates datasets (CSV, JSON, JSONL uploads), defines scoring criteria with per-dimension weights and ranges, spins up evaluation tasks, and invites evaluators. Each evaluator works through an independent queue so responses can be reviewed multiple times without overlap. The Next.js 15 frontend (App Router, TanStack Query, Zustand, React Hook Form, Zod, Tailwind CSS 4) is role-aware — admins see org-wide dashboards and analytics, evaluators see only their task queue. An AI judge powered by OpenAI, Anthropic, Groq, or Gemini can auto-evaluate responses or pre-fill scores for evaluator calibration, with full deterministic fallbacks when no API key is configured. Results export as JSONL, CSV, or JSON with optional filters.'
highlights:
  - 'Three evaluation workflows: SINGLE (weighted scoring 1–10), PAIRWISE (A/B winner), RANKING (ordered responses)'
  - 'Multi-evaluator queues with independent assignment so the same item can be reviewed by multiple evaluators without coordination overhead'
  - 'Inter-rater agreement analytics including overall agreement rate and Fleiss'' kappa across a task'
  - 'AI judge with provider-agnostic interface (OpenAI, Anthropic, Groq, Gemini) and confidence-scored fallbacks when no key is set'
  - 'Dataset versioning and cloning — CSV, JSON, JSONL upload with DatasetRow and ModelResponse tracking'
  - 'Role system (SUPER_ADMIN → ORG_ADMIN → EVALUATOR → VIEWER) enforced server-side via JWT claims and NestJS RolesGuard'
  - 'Bull job queue with exponential backoff, retry logic, and configurable cleanup for async export and AI evaluation jobs'
  - 'Export engine producing JSONL, CSV, and JSON with per-task filters'
challenges: 'The trickiest design problem was the multi-evaluator queue: each evaluator needs an independent, non-overlapping sequence of items so the same response gets reviewed by all assigned evaluators without any one person seeing the same item twice. This required tracking per-evaluator completion state separately from task-level progress rather than using a shared cursor. The AI judge layer was designed to be provider-agnostic — a single interface dispatches to OpenAI, Anthropic, Groq, or Gemini — while still returning a normalized confidence score so the frontend can signal to evaluators how much to trust a suggestion. When no key is configured, all AI paths degrade to deterministic heuristics with confidence set to zero, keeping the platform fully functional offline.'
metrics:
  - value: '3 Workflows'
    label: 'Single, Pairwise & Ranking'
  - value: '4 Providers'
    label: 'OpenAI, Anthropic, Groq & Gemini'
  - value: 'Fleiss κ'
    label: 'Inter-rater agreement'
  - value: '4 Roles'
    label: 'Org-scoped RBAC'
architecture:
  - label: 'Next.js 15 frontend'
    detail: 'App Router, TanStack Query & Zustand'
  - label: 'NestJS API'
    detail: 'Auth, datasets, evaluations & exports'
  - label: 'Bull + Redis'
    detail: 'AI judging & async export jobs'
  - label: 'PostgreSQL + Prisma'
    detail: 'Relational data & migrations'
heroImage: './images/scorra/scorra-dashboard.png'
uiImages:
  - './images/scorra/scorra-landing.png'
  - './images/scorra/scorra-evaluate.png'
  - './images/scorra/scorra-analytics.png'
  - './images/scorra/scorra-datasets.png'
---
