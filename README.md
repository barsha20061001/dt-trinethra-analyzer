# DT Trinethra Analyzer

A local AI-powered transcript analysis tool built for the DT CultureTech Software Developer Recruitment Assignment.

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

### AI

* Ollama
* llama3.2

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

## Design Decisions

### 1. Local AI Usage

The project uses Ollama and llama3.2 locally to ensure:

* privacy
* offline functionality
* low-cost inference

### 2. Structured Prompt Engineering

The AI prompt was designed to enforce structured JSON responses for easier frontend rendering and evaluation consistency.

### 3. Safe JSON Formatting

Fallback handling was added to prevent frontend crashes when AI output formatting is inconsistent.

---

## Future Improvements

* Better UI design with Tailwind CSS
* Export analysis as PDF
* Authentication system
* Transcript history storage
* Real-time streaming responses

---

## Author

Barsha Mondal

