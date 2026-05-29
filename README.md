# DT Trinethra Analyzer

DT Trinethra Analyzer is an AI-powered application that evaluates supervisor feedback transcripts and generates structured performance insights for fellows. The system extracts evidence, maps observations to KPIs, identifies performance gaps, and produces follow-up questions using a locally running LLM. It is designed to support consistent, transparent, and domain-aware evaluation of workplace performance reviews.

## Overview

DT Trinethra Analyzer helps psychology interns and reviewers analyze supervisor feedback transcripts using a local Large Language Model (LLM) running through Ollama.

The system processes transcripts and generates:

* Strengths
* Concerns
* KPI Mapping
* Gaps
* Follow-up Questions
* Overall Review Score

The project is fully local and does not use cloud AI APIs.

---

## Tech Stack

### Frontend

* React
* Vite
* Axios

### Backend

* Node.js
* Express
* Axios

## Model Selection

Model Used: llama3.2

Reason:
- Runs efficiently on local machines
- Produces structured JSON reliably
- Fast inference speed
- No external API dependency
- Suitable for transcript analysis tasks

---

## Features

* Local AI transcript analysis
* Structured JSON output
* React frontend interface
* Express backend API
* Sample transcript loader
* Clean formatted analysis display

---

## Project Structure

```txt
dt-trinethra-analyzer/
│
├── backend/
│   ├── server.js
│   ├── prompt.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## Setup Instructions

### 1. Clone Repository

```bash
git clone <repo-link>
```

---

### 2. Install Ollama

Download Ollama:

https://ollama.com/download

Pull model:

```bash
ollama pull llama3.2
```

---

### 3. Backend Setup

```bash
cd backend
npm install
node server.js
```

Backend runs on:

```txt
http://localhost:5000
```

---

### 4. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

## API Endpoint

### POST `/api/analyze`

Request:

```json
{
  "transcript": "Sample transcript"
}
```

---

## Architecture Overview

User Transcript
       ↓
React Frontend (Vite)
       ↓
POST /api/analyze
       ↓
Express Backend
       ↓
Prompt Construction
(Context + Rubric + Domain Rules)
       ↓
Ollama (llama3.2)
       ↓
Structured JSON Response
       ↓
Frontend Analysis Dashboard

---



## Challenges and Design Decisions

### Challenge 1: Single Prompt vs Multi-Step Analysis

A key challenge was deciding whether to break analysis into multiple AI calls or use a single prompt.

I chose a single prompt because it reduces latency, keeps all transcript context together, and produces more consistent scoring across KPI mapping, evidence extraction, gap analysis, and follow-up question generation.

### Challenge 2: Reliable Structured Output

LLMs sometimes return invalid JSON or inconsistent formatting.

To address this, the prompt strictly enforces a predefined JSON schema and the frontend includes safe parsing and fallback handling to prevent crashes.

### Challenge 3: Domain-Aware Scoring

The assignment requires understanding the distinction between Layer 1 (execution) and Layer 2 (systems building).

The prompt was enhanced using the provided context.md so the model evaluates ownership, systems thinking, supervisor bias, KPI relevance, and gap dimensions rather than assigning generic scores.

---

## Future Improvements

- Highlight extracted evidence directly inside transcripts
- Confidence score for each assessment
- Export analysis reports as PDF
- Comparison across multiple supervisor reviews
- Dashboard for tracking fellow progress over time
- Visual KPI performance charts

---

## Author

Barsha Mondal

