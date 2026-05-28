
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

Analyze the transcript carefully.

Return ONLY valid JSON in this exact format:

{
  "strengths": ["point 1", "point 2"],
  "concerns": ["point 1", "point 2"],
  "score": 0,
  "kpiMapping": ["point 1", "point 2"],
  "gaps": ["point 1", "point 2"],
  "followUpQuestions": ["question 1", "question 2"]
}

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

