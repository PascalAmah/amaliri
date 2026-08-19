---
title: 'FoodNeural'
description: 'AI-powered sustainability platform that analyzes the environmental impact of food products and recommends eco-friendly alternatives using machine learning and natural language processing.'
pubDate: '2024-11-20'
category: 'AI/ML'
tags: ['Flask', 'React', 'pandas', 'scikit-learn', 'Transformers', 'Machine Learning', 'NLP']
githubUrl: 'https://github.com/PascalAmah/FoodNeural'
liveUrl: 'https://foodneuralapp.vercel.app'
status: 'completed'
homeOrder: 2
problem: 'Most consumers have little visibility into the environmental impact of the foods they eat. While sustainability data exists across environmental studies and agricultural research, it is often difficult for everyday users to interpret or apply when making purchasing decisions. FoodNeural bridges this gap by combining machine learning, natural language processing, and environmental impact data into an accessible platform that helps users make more sustainable food choices.'
whatWasBuilt: "Built FoodNeural as a full-stack AI application using Flask and React to help users evaluate the environmental impact of food products and discover more sustainable alternatives. The backend processes environmental datasets with Pandas, powers a scikit-learn recommendation engine, and integrates a Transformers-based NLP model that enables semantic search across the food database, allowing users to find relevant food products even when their search terms don't exactly match the stored product names. The platform analyzes products across greenhouse gas emissions, water consumption, and land use, exposing these insights through REST APIs consumed by a responsive React frontend with interactive visualizations and sustainability recommendations."
highlights:
  - "AI-powered sustainable food recommendation engine"
  - "Environmental impact analysis across greenhouse gas emissions, water usage, and land use"
  - "Transformers-based NLP enables natural language food search"
  - "scikit-learn recommendation engine for sustainable food alternatives"
  - "Pandas-powered data preprocessing and environmental dataset analysis"
  - "RESTful Flask API serving search, analysis, and recommendation endpoints"
  - "Responsive React frontend with interactive sustainability visualizations"
challenges: "One of the biggest challenges was accurately mapping natural language food queries to structured environmental datasets while maintaining fast response times. Integrating a Transformers-based NLP model with traditional machine learning required careful preprocessing and feature engineering to ensure users could search naturally while still receiving accurate environmental impact analyses and recommendations. Another challenge was presenting complex sustainability metrics in a way that remained intuitive and actionable for non-technical users."
metrics:
  - value: "3 Metrics"
    label: "Emissions, water & land impact"
  - value: "Transformer"
    label: "Natural language search"
  - value: "ML"
    label: "Recommendation engine"
  - value: "Full Stack"
    label: "Flask API + React"
architecture:
  - label: "React Frontend"
    detail: "Search, recommendations & impact visualization"
  - label: "Flask API"
    detail: "REST endpoints & business logic"
  - label: "Transformers NLP"
    detail: "Natural language query understanding"
  - label: "scikit-learn"
    detail: "Recommendation engine"
heroImage: './images/foodneural/foodneural-hero.png'
uiImages:
  - './images/foodneural/foodneural-home.png'
  - './images/foodneural/foodneural-results.png'
  - './images/foodneural/foodneural-compare.png'
#   - "./images/foodneural/foodneural-breakdown.png"
---
