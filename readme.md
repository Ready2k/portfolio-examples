# 🧠 James Labs — Portfolio Examples

Welcome to **Experimental AI code**, a curated collection of experimental and production-grade projects that explore modern software architecture, AI integration, and system design.

Each project demonstrates a distinct architectural pattern, modern development stack, and real-world use case — from AI-assisted workflow builders to enterprise-grade conversational systems.

🔗 **Live Site:** [ready2k.github.io/portfolio-examples](https://ready2k.github.io/portfolio-examples/)  
📘 **Repo:** [github.com/Ready2k/portfolio-examples](https://github.com/Ready2k/portfolio-examples)

---

## 🧭 Overview

This site was built using [**MkDocs Material**](https://squidfunk.github.io/mkdocs-material/) — a lightweight, developer-friendly documentation engine enhanced with animations, Mermaid diagrams, and interactive content.

Projects currently showcased (23):

| # | Project | Description |
|---|----------|--------------|
| 1 | **Flow Builder** | AI-powered visual workflow engine |
| 2 | **Voice AI Banking Assistant** | Enterprise-grade conversational AI for financial services |
| 3 | **Automated AI Assessment (AAA)** | Intelligent agentic feasibility and risk evaluation platform |
| 4 | **ContactInsight** | Conversation intelligence for enterprises |
| 5 | **AI Prompt Library & Enhancement Platform** | Multi-provider prompt creation, improvement, and analytics |
| 6 | **A2UI Mortgage Assistant** | Voice-first AI that generates its own UI in real time |
| 7 | **Voice S2S Platform** | Production speech-to-speech AI with dual brain modes and AWS Connect integration |
| 8 | **AI Governance Unit (AIGU)** | 9-agent LangGraph system for continuous AI project governance |
| 9 | **MyStaycation** | UK holiday price watcher with history-anchored deal alerts |
| 10 | **Ambient Banking Assistant** | AI-native financial copilot demo — natural language replaces app navigation |
| 11 | **Beat Your Mates** | Always-on prediction agent with a frozen Dixon-Coles model and enforced validation rules |
| 12 | **No One Saw Everything** | Fair-play murder mystery where LLMs add flavour but never change the truth |
| 13 | **Voice Harness** | Voice AI evaluation and assurance with a signed, hash-chained evidence ledger |
| 14 | **Connect SRE Agent** | 10-agent SRE platform for Amazon Connect with human-approved remediation |
| 15 | **Connect AI Agent Demo Builder** | Configure, deploy and live-test Amazon Q in Connect agent demos |
| 16 | **AI Darts** | Three-camera computer-vision darts scoring with a full game engine |
| 17 | **Local LLM Gateway** | OpenAI-compatible gateway with privacy-tiered routing across a home LLM cluster |
| 18 | **WhatsForTea** | Self-hosted recipe scanner and meal planner with a LangGraph assistant |
| 19 | **Physio Asset Lab** | SDXL exercise-illustration pipeline with vision QA and human approval |
| 20 | **Planning Replay** | UK planning application explorer that never invents data |
| 21 | **In-App Experience** | Vision 2028 in-app banking support, Today vs Future side by side |
| 22 | **IVR Evolution** | Interactive journey from DTMF menus to AI voice agents |
| 23 | **demomcp** | MCP servers that record and publish demos |

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
│   ├── projects/               # One page per project + _index.md card grid
│   │   ├── pr1_FlowBuilder.md
│   │   ├── ...
│   │   └── pr23_DemoMCP.md
│   ├── assets/                 # GIFs, MP4s and images
│   ├── css/extra.css           # Custom styles
│   └── js/mermaid-init.js      # Mermaid diagram setup
├── mkdocs.yml                  # MkDocs configuration
├── requirements.txt            # Python dependencies
├── templates/project_template.md # Boilerplate for new project pages
└── .github/workflows/deploy.yml # Auto-deploy workflow
```

---

## ➕ Adding a Project

1. Copy `templates/project_template.md` → `docs/projects/prN_Name.md`
2. Add assets to `docs/assets/prN/`
3. Add the page to `nav.Projects` in `mkdocs.yml` and a card to `docs/projects/_index.md`
4. Run `mkdocs build --clean` — `strict: true` fails the build on broken links

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
