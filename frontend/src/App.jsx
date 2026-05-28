
import { useState } from "react";
import axios from "axios";

function App() {
  const [transcript, setTranscript] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeTranscript = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/analyze",
        {
          transcript,
        }
      );

      setResult(response.data.output);
    } catch (error) {
      console.log(error);
      alert("Error analyzing transcript");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      <h1>DT Trinethra Analyzer</h1>

      <textarea
        rows="10"
        placeholder="Paste transcript here..."
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "20px",
        }}
      />

      <button
        onClick={analyzeTranscript}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        {loading ? "Analyzing..." : "Analyze Transcript"}
      </button>

      <div
        style={{
          marginTop: "30px",
          whiteSpace: "pre-wrap",
          background: "#f4f4f4",
          padding: "20px",
          borderRadius: "10px",
        }}
      
        > {result}
      </div> 
    </div>
  );
}

export default App;

