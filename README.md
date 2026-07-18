# AI Agentic Engineer Intern | IDX Exchange (Summer 2026)

## Overview

This repository documents my work as an AI Agentic Engineer Intern at IDX Exchange during Summer 2026.

During the internship, I am building AI-powered real estate applications by combining natural language understanding, MLS database search, and conversational AI. The project progresses from system architecture and database integration to multi-turn conversations and intelligent property search.

---

## Tech Stack

- OpenClaw
- TypeScript
- Node.js
- MySQL
- OpenAI API
- Git & GitHub

---

## Repository Structure

```text
IDXExchange-summer2026/
├── README.md
├── data/                             # Local MLS SQL datasets (not tracked)
├── docs/
│   └── architecture.md
├── handbook/
├── notes/
│   ├── week0.md
│   ├── week1.md
│   ├── week2.md
│   ├── week3.md
│   └── week4.md
├── openclaw/
└── src/
    ├── week2-property-search/
    │   ├── parser.ts
    │   └── parser.test.ts
    │
    ├── week3-mls-database/
    │   ├── db.ts
    │   ├── search-active.ts
    │   ├── search-sold.ts
    │   ├── types.ts
    │   └── run-tests.ts
    │
    └── week4-conversation/
        ├── conversation.ts
        ├── session.ts
        ├── formatter.ts
        └── test-conversation.ts
```

---

## Progress

### ✅ Week 0 – Environment Setup

- Configured development environment
- Installed OpenClaw
- Prepared MLS datasets
- Set up project structure

---

### ✅ Week 1 – OpenClaw Architecture

- Explored OpenClaw architecture
- Learned the AI agent workflow
- Imported MLS datasets
- Created architecture documentation

---

### ✅ Week 2 – Natural Language Property Search

- Built a TypeScript property parser
- Extracted search filters using regular expressions
- Supported parsing for:
  - City
  - Price
  - Bedrooms
  - Bathrooms
  - Property type
  - HOA fees
  - Pool
  - View
- Tested parser with multiple natural language queries

---

### ✅ Week 3 – MLS Database Integration

- Connected TypeScript application to MySQL
- Built parameterized SQL queries
- Implemented active listing search
- Implemented sold comparable search
- Added pagination support
- Formatted property search results

---

### ✅ Week 4 – Multi-turn Conversational Search

- Built conversation manager for property search
- Implemented session management to preserve user preferences
- Connected the Week 2 parser with the Week 3 MLS database search
- Added follow-up questions for missing search criteria
- Built a formatter for conversational property results
- Created an end-to-end conversation test script
- Successfully demonstrated:
  - Multi-turn conversations
  - Session memory
  - SQL query generation
  - MLS database search
  - Property result formatting
## Demo

Week 4 supports a complete conversational property search workflow:

```text
User
   │
   ▼
Natural Language Query
   │
   ▼
Property Parser
   │
   ▼
Conversation Session
   │
   ▼
MLS Database Search
   │
   ▼
Formatted Property Results
```

---

## Upcoming Work

- Week 5 – Market Analytics
- Week 6 – Embeddings & Semantic Search
- Week 7 – Retrieval-Augmented Generation (RAG)
- Week 8 – Multi-Agent Workflows
- Production AI Agent Integration

---

## Notes

This repository documents my internship progress throughout the IDX Exchange AI Agentic Engineering Internship.

Sensitive resources—including MLS datasets, API keys, and internal company materials—are stored locally and are excluded from version control.