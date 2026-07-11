---
title: "FoodNeural"
description: "AI-powered environmental impact analyzer for food products. Assesses greenhouse gas emissions, water usage, and land impact using machine learning."
pubDate: "2024-11-20"
tags: ["Flask", "React", "pandas", "scikit-learn", "Transformers"]
githubUrl: "https://github.com/PascalAmah/FoodNeural"
liveUrl: "https://foodneuralapp.vercel.app"
status: "completed"
homeOrder: 2
problem: "Most people have no intuition for the environmental cost of what they eat. The data exists — lifecycle analyses, emissions databases, water footprint studies — but it's buried in research papers and agricultural reports that aren't built for consumers. There was no accessible tool where someone could look up a food product and get an immediate, comparable picture of its environmental impact across multiple dimensions."
whatWasBuilt: "Built FoodNeural as a full-stack ML application that takes a food product as input and returns a breakdown of its environmental footprint across three metrics: greenhouse gas emissions (kg CO₂ equivalent), water usage (litres), and land use (m²). The Flask backend serves a scikit-learn model trained on a large food product dataset processed with pandas, covering thousands of products across all major food categories. A Transformers-based NLP component handles natural language product queries — users can type a product name in plain text rather than needing exact database matches. The React frontend presents results visually with comparative context so users can see how a product ranks against category averages."
highlights:
  - "ML model assesses three impact dimensions per product: greenhouse gas emissions, water usage, and land use"
  - "Transformers-based NLP handles free-text product queries — no exact name matching required"
  - "scikit-learn model trained on a large multi-category food dataset processed with pandas"
  - "Comparative output — results shown against category averages, not just in absolute values"
  - "Flask API backend with clean separation between data processing pipeline and serving layer"
  - "Responsive React frontend with visual impact breakdowns and sustainability score"
challenges: "Training data coverage was uneven — processed and packaged food products had rich lifecycle data while regional and artisanal products were sparsely represented. Sparse coverage would have made the model confidently wrong for less common inputs. The solution was a confidence scoring layer that flags low-coverage predictions and falls back to category-level estimates with explicit uncertainty communication in the UI, so users aren't misled by extrapolated outputs."
metrics:
  - value: "3 metrics"
    label: "GHG, water & land impact per product"
  - value: "NLP"
    label: "Free-text queries via Transformers"
  - value: "Confidence-scored"
    label: "Flags low-coverage predictions"
  - value: "Full stack"
    label: "Flask ML API + React frontend"
architecture:
  - label: "React frontend"
    detail: "Free-text product query"
  - label: "Flask API"
    detail: "Serving layer"
  - label: "Transformers NLP"
    detail: "Query → product match"
  - label: "scikit-learn model"
    detail: "3-metric impact + confidence"
heroImage: "./images/foodneural/foodneural-hero.png"
uiImages:
   - "./images/foodneural/foodneural-home.png"
   - "./images/foodneural/foodneural-results.png"
   - "./images/foodneural/foodneural-compare.png"
#   - "./images/foodneural/foodneural-breakdown.png"
---
