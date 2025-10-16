# 🧠 James Labs — Portfolio Examples

Welcome to **James Labs**, a curated collection of experimental and production-grade projects that explore modern software architecture, AI integration, and system design.

Each project demonstrates a distinct architectural pattern, modern development stack, and real-world use case — from AI-assisted workflow builders to enterprise-grade conversational systems.

🔗 **Live Site:** [ready2k.github.io/portfolio-examples](https://ready2k.github.io/portfolio-examples/)  
📘 **Repo:** [github.com/Ready2k/portfolio-examples](https://github.com/Ready2k/portfolio-examples)

---

## 🧭 Overview

This site was built using [**MkDocs Material**](https://squidfunk.github.io/mkdocs-material/) — a lightweight, developer-friendly documentation engine enhanced with animations, Mermaid diagrams, and interactive content.

Projects currently showcased:

| # | Project | Description |
|---|----------|--------------|
| 1 | **Flow Builder** | AI-powered visual workflow engine |
| 2 | **Voice AI Banking Assistant** | Enterprise-grade conversational AI for financial services |
| 3 | **Automated AI Assessment (AAA)** | Intelligent agentic feasibility and risk evaluation platform |
| 4 | **ContactInsight** | Conversation intelligence for enterprises |
| 5 | **AI Prompt Library & Enhancement Platform** | Multi-provider prompt creation, improvement, and analytics |

Each project page includes:
- 🧩 **What it does** (and why it exists)  
- ⚙️ **Architecture overview** with Mermaid diagrams  
- ✨ **Feature highlights**  
- 📊 **Key metrics and technologies**  
- 🪄 **Live demos** and GIF previews

---

## 🛠️ Built With

| Layer | Tools & Frameworks |
|-------|--------------------|
| **Documentation Engine** | MkDocs + Material for MkDocs |
| **Enhancements** | Awesome Pages • Glightbox • Mermaid |
| **Languages** | Markdown • YAML • HTML/CSS • JavaScript |
| **CI/CD** | GitHub Actions → GitHub Pages |
| **Hosting** | [GitHub Pages](https://pages.github.com/) |

---

## 🚀 Local Development

To preview the site locally:

```bash
# Clone the repo
git clone https://github.com/Ready2k/portfolio-examples.git
cd portfolio-examples

# Create and activate a virtual environment
python3 -m venv .venv
source .venv/bin/activate  # (Windows: .venv\Scripts\activate)

# Install dependencies
pip install -r requirements.txt

# Run locally
mkdocs serve
```

Visit [http://127.0.0.1:8000](http://127.0.0.1:8000) to explore locally.

---

## 🔄 Deployment

Every push to `main` automatically:
- Builds the MkDocs site via GitHub Actions  
- Publishes to the `gh-pages` branch  
- Deploys live to: **[ready2k.github.io/portfolio-examples](https://ready2k.github.io/portfolio-examples/)**  

You can also manually trigger the deploy workflow under **Actions → “Deploy MkDocs to GitHub Pages”**.

---

## 🧰 Folder Structure

```
portfolio-examples/
├── docs/
│   ├── index.md                # Home page
│   ├── projects/               # Project pages
│   │   ├── project-1.md
│   │   ├── project-2.md
│   │   ├── project-3.md
│   │   ├── project-4.md
│   │   └── project-5.md
│   ├── assets/                 # GIFs and images
│   ├── css/extra.css           # Custom styles
│   └── js/mermaid-init.js      # Mermaid diagram setup
├── mkdocs.yml                  # MkDocs configuration
├── requirements.txt            # Python dependencies
└── .github/workflows/deploy.yml # Auto-deploy workflow
```

---

## 🌟 Vision

> “Great architecture isn’t just about code — it’s about *clarity*.”  

This repo exists to document that clarity — blending engineering, design, and explainability into living technical documentation.

---

## 📫 Connect

- 🧑‍💻 [GitHub](https://github.com/Ready2k)
- 🌍 [Live Portfolio](https://ready2k.github.io/portfolio-examples/)

---

### 🏁 License

Distributed under the **MIT License** — feel free to explore, fork, and learn.

---

### ✨ Bonus Badge Section

[![pages-build-deployment](https://github.com/Ready2k/portfolio-examples/actions/workflows/deploy.yml/badge.svg)](https://github.com/Ready2k/portfolio-examples/actions/workflows/deploy.yml)
[![View Site](https://img.shields.io/badge/Live_Site-Portfolio_Examples-blue?logo=githubpages)](https://ready2k.github.io/portfolio-examples/)
[![Built with MkDocs Material](https://img.shields.io/badge/Built%20With-MkDocs%20Material-3E4EB8?logo=markdown)](https://squidfunk.github.io/mkdocs-material/)
