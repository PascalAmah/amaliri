---
title: "EduPulse"
description: "Smart microlearning platform with personalized bite-sized lessons and quizzes based on user behavior, mood, and goals. Revolutionizing education through adaptive learning."
pubDate: "2025-02-10"
tags: ["React", "Node.js", "AI/ML", "MongoDB"]
githubUrl: "https://github.com/PascalAmah/edupulse"
status: "in-progress"
homeOrder: 6
problem: "Traditional e-learning platforms dump full courses on learners and expect them to self-direct — but most people don't have 45 minutes of focused attention on demand. Short bursts work better, but generic microlearning apps serve the same content to everyone regardless of how they're engaging, what they already know, or when they're most receptive. The result is churn, low completion rates, and content that doesn't stick."
whatWasBuilt: "Building EduPulse as an adaptive microlearning platform that tailors content at the session level, not just at onboarding. The backend is Node.js with MongoDB, storing detailed behavioral signals — session duration, answer patterns, time-of-day engagement, and quiz performance trends. An AI/ML layer processes these signals to select the right lesson format, difficulty, and topic for each session. The React frontend is designed to feel more like a focused daily habit than an LMS — short sessions, immediate feedback, and a progress model that rewards consistency over volume."
highlights:
  - "Adaptive content selection driven by real-time behavioral signals — not just a static learning path"
  - "Session-level personalization accounts for mood indicators, time of day, and recent performance trends"
  - "Bite-sized lesson and quiz format designed for 5–10 minute focused sessions"
  - "Node.js backend with MongoDB stores granular engagement data to feed the recommendation model"
  - "AI/ML model continuously refines difficulty and topic selection based on cumulative user history"
  - "React frontend optimized for low-friction daily habit formation"
challenges: "The core ML challenge is cold-start — new users have no behavioral history, so the model has nothing to personalize on. The approach is a structured onboarding phase that collects goals, prior knowledge signals, and preferred session length, then uses collaborative filtering to bootstrap recommendations from similar user profiles until enough individual data accumulates to switch to personalized predictions."
# heroImage: "./images/edupulse/edupulse-hero.png"
# uiImages:
#   - "./images/edupulse/edupulse-home.png"
#   - "./images/edupulse/edupulse-lesson.png"
#   - "./images/edupulse/edupulse-quiz.png"
#   - "./images/edupulse/edupulse-dashboard.png"
---
