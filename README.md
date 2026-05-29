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

## Screenshots 

### 1. Input Interface

<img width="1387" height="901" alt="input-interface" src="https://github.com/user-attachments/assets/26de1635-7e59-4874-a7f8-a07b6afc7834" />

### 2. Analysis Output

<img width="1412" height="936" alt="analysis-output" src="https://github.com/user-attachments/assets/03323270-a1ce-4193-8198-51ca8803951c" />

<img width="1382" height="912" alt="analysis-output1" src="https://github.com/user-attachments/assets/62bc13a0-753a-45c2-a0d5-2a1f40bc7e86" />

<img width="1381" height="917" alt="analysis-output2" src="https://github.com/user-attachments/assets/271628ef-11b5-4158-b589-028520a7aedf" />


## Project Structure

```text
dt-trinethra-analyzer/
│
├── backend/
│   │
│   ├── data/
│   │   ├── context.md
│   │   ├── rubric.json
│   │   └── sample-transcripts.json
│   │
│   ├── server.js
│   ├── prompt.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```


---

## Setup Instructions

### 1. Clone Repository

```bash
git clone  https://github.com/barsha20061001/dt-trinethra-analyzer
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

The application follows a simple client-server architecture.

1. User enters a supervisor feedback transcript in the React frontend.
2. The frontend sends the transcript to the Express backend through the `/api/analyze` endpoint.
3. The backend combines domain context, rubric guidelines, and transcript data into a structured prompt.
4. Ollama (llama3.2) processes the prompt locally and generates analysis results.
5. The backend validates and returns structured JSON.
6. The frontend renders the analysis as evidence, KPI mapping, gap analysis, follow-up questions, and a final rubric score.

Flow:

User →  React Frontend →  Express API →  Prompt Engine →  Ollama (llama3.2) →  JSON Output →  Analysis Dashboard

---

## AI Hallucination Guardrails

To reduce AI hallucinations and improve consistency, several guardrails were implemented:

- Analysis is grounded using the provided context.md domain knowledge.
- Scoring follows the rubric definitions from rubric.json.
- The model is instructed to extract evidence directly from transcript content.
- Responses must follow a predefined JSON schema.
- Missing information is reported through gap analysis instead of making assumptions.
- Sample transcripts were used to validate scoring behavior against expected ranges.
- Frontend validation ensures malformed responses do not crash the application.

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

