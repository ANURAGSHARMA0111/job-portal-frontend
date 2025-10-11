import React, { useState } from "react";
import axios from "../utils/axios"; // your axios instance

const ResumeAnalyzer = () => {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setAnalysis("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Please upload a resume file.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);
      const res = await axios.post("/api/ai/analyze-resume", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setAnalysis(res.data.analysis);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Resume Analyzer</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept=".pdf,.txt"
          onChange={handleFileChange}
          className="mb-4 block"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      {analysis && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h4 className="font-semibold">Analysis:</h4>
          <p className="whitespace-pre-wrap">{analysis}</p>
        </div>
      )}
    </div>
  );
};

export default ResumeAnalyzer;
