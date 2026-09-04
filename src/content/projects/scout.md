---
title: 'Scout'
description: 'AI-native startup job-search workspace. Save startups and jobs from anywhere on the web and Scout researches each company with AI, matches open roles against your CV with semantic search, and carries you from application through outreach in one place.'
pubDate: '2026-08-13'
updatedDate: '2026-09-02'
category: 'Full-stack'
tags:
  [
    'React 19',
    'TypeScript',
    'Vite',
    'TanStack Router',
    'FastAPI',
    'Python',
    'PostgreSQL + pgvector',
    'Redis',
    'Celery',
    'Plasmo',
    'Chrome Extension',
    'AI',
    'pnpm Monorepo',
  ]
githubUrl: 'https://github.com/PascalAmah/scout'
status: 'in-progress'
problem: 'Searching for a job at a startup means keeping tabs on companies you discover everywhere — LinkedIn posts, Y Combinator and Wellfound listings, Techstars batches, newsletters. Each one needs to be researched, its open roles compared against your CV, and every application chased from submission through outreach. That ends up scattered across browser tabs, spreadsheets, and half-remembered bookmarks, with no sense of which opportunities actually fit your profile.'
whatWasBuilt: 'Scout is being built as a pnpm-workspaces monorepo that turns discovered startups into an actionable pipeline. A React 19 web app (Vite, TanStack Router, React Query, Zustand, Tailwind) provides the workspace — dashboard, matches, application CRM, resume studio, and analytics — while a Plasmo MV3 browser extension detects job boards (LinkedIn, Y Combinator, Wellfound, Work at a Startup, and generic career pages) and quick-saves companies into the workspace. The FastAPI API under /v1 powers auth, startups, jobs, CV profiles, applications, outreach, analytics, and an AI assistant, backed by PostgreSQL 16 with pgvector embeddings, Redis, and Celery workers that enrich companies, score matches, and generate resumes and outreach in the background. LLM prompts live in versioned packages (v1/v2) with deterministic fallbacks when no AI key is configured, and shared TypeScript types are generated straight from the OpenAPI spec. So far the snapshot ships eleven Alembic migrations covering users, CV and job embeddings, source registries, application tags, email reminders, and preference tracking.'
highlights:
  - 'Save-to-Scout browser extension (Plasmo MV3) with per-board detectors for LinkedIn, YC, Wellfound, Work at a Startup and generic career sites'
  - 'AI startup enrichment — company summary, tech stack, and hiring signal pulled from job pages'
  - 'Semantic matching with pgvector embeddings, hybrid search, and reranking against your CV profiles'
  - 'Application pipeline with status tracking, tags, notes, saved startups, and per-application history'
  - 'Resume and outreach generation — tailored resumes, LinkedIn DMs, emails, and follow-ups'
  - 'Versioned LLM prompt packages (v1/v2) so behavior changes are reviewable and rollback-able'
  - 'OpenAPI-spec-driven shared TypeScript types consumed by both the web app and extension'
  - 'Idempotent, rate-limited, review-gated background jobs on Celery with deterministic AI fallbacks'
challenges: 'The hard part is keeping every source of truth honest across four moving parts. Startups and jobs arrive from several registries (LinkedIn, YC, Wellfound, Work at a Startup, manual adds), so a source registry tracks provenance and enrichment jobs stay idempotent and review-gated. Embedding strategy evolved as models changed — one migration re-dimensions stored embeddings to 3072 — which forced hybrid search to normalize scores across different embedding spaces and rerankers. Everything that touches an LLM (enrichment, matching, generation) must degrade cleanly to keyword-based fallbacks so the app stays usable without an API key, and the assistant needs tool-calling discipline so it never fabricates pipeline state.'
metrics:
  - value: '4 Apps'
    label: 'Web, extension, API & worker'
  - value: 'Hybrid'
    label: 'pgvector search + reranking'
  - value: 'MV3'
    label: 'Plasmo save-to-Scout extension'
  - value: '11 Migrations'
    label: 'Alembic-managed Postgres schema'
architecture:
  - label: 'Web app + Extension'
    detail: 'React 19, TanStack Router & Plasmo MV3'
  - label: 'FastAPI service'
    detail: 'Auth, startups, jobs, CVs & /v1 routes'
  - label: 'Celery workers'
    detail: 'AI enrichment, matching & generation'
  - label: 'PostgreSQL 16 + pgvector'
    detail: 'Relational data & embeddings'
logo: './images/scout/scout-logo.png'
heroImage: './images/scout/scout-dashboard.png'
uiImages:
  - './images/scout/scout-landing.png'
  - './images/scout/scout-matches.png'
  - './images/scout/scout-outreach.png'
  - './images/scout/scout-crm.png'
---
