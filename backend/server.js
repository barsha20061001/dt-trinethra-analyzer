
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.post("/api/analyze", async (req, res) => {
  try {
    const { transcript } = req.body;

    const prompt = `
You are Trinethra, an AI assistant helping psychology interns review supervisor feedback.

Analyze the supervisor transcript and return ONLY valid JSON.

Required JSON format:

{
  "extractedEvidence": [
    {
      "quote": "specific quote from transcript",
      "tag": "positive/negative/neutral",
      "reason": "why this quote matters"
    }
  ],
  "rubricScore": {
    "score": 1,
    "justification": "one paragraph explaining the score using extracted evidence"
  },
  "kpiMapping": [
    {
      "kpi": "KPI name",
      "reason": "how the transcript connects to this KPI"
    }
  ],
  "gapAnalysis": [
    "important missing information from the transcript"
  ],
  "followUpQuestions": [
    "question 1",
    "question 2",
    "question 3"
  ]
}

Rules:
- Score must be between 1 and 10.
- Do not return score as 0.
- Use specific transcript evidence.
- If information is missing, mention it in gapAnalysis.
- Return JSON only. No extra explanation.

Transcript:
${transcript}
`;

    const response = await axios.post(
      "http://localhost:11434/api/generate",
      {
        model: "llama3.2",
        prompt,
        stream: false,
      }
    );

    res.json({
      success: true,
      output: response.data.response,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Error analyzing transcript",
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

