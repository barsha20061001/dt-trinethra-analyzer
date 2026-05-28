
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
You are a psychology supervision analysis assistant.

Analyze this transcript and return:

1. Strengths
2. Concerns
3. Score out of 10
4. Suggested follow-up questions

Transcript:
${transcript}

Return clean JSON only.
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

