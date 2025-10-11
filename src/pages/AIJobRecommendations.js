import React, { useState } from "react";
import axios from "axios";

const AIRecommendations = () => {
  const [formData, setFormData] = useState({
    skills: "",
    experience: "",
    jobPreference: "",
  });

  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getRecommendations = async () => {
    setLoading(true);
    try {
      // ✅ Dummy backend call (or replace with your real API)
      const res = await axios.post("http://localhost:5000/api/ai/recommend", formData);
      setRecommendations(res.data.recommendations);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch recommendations");
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🤖 AI Job Recommendations</h2>
      <p style={styles.subtitle}>Get personalized job suggestions based on your skills.</p>

      <div style={styles.form}>
        <input
          type="text"
          name="skills"
          placeholder="Enter your skills (React, Node.js...)"
          value={formData.skills}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="experience"
          placeholder="Experience (e.g. 2 years)"
          value={formData.experience}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="text"
          name="jobPreference"
          placeholder="Preferred Job Role (Frontend, Backend...)"
          value={formData.jobPreference}
          onChange={handleChange}
          style={styles.input}
        />

        <button onClick={getRecommendations} disabled={loading} style={styles.button}>
          {loading ? "Getting Recommendations..." : "Get AI Recommendations"}
        </button>
      </div>

      {recommendations.length > 0 && (
        <div style={styles.results}>
          <h3 style={styles.resultsTitle}>✨ Suggested Jobs:</h3>
          <ul style={styles.list}>
            {recommendations.map((job, index) => (
              <li key={index} style={styles.listItem}>
                <h4 style={styles.jobTitle}>{job.title}</h4>
                <p style={styles.jobDesc}>{job.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// 🎨 Inline CSS Styles
const styles = {
  container: {
    maxWidth: "700px",
    margin: "40px auto",
    padding: "25px",
    background: "#f9fafc",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
  },
  title: {
    color: "#007bff",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#555",
    fontSize: "15px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "20px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
    outline: "none",
    transition: "0.3s",
  },
  button: {
    padding: "12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.3s",
  },
  results: {
    marginTop: "30px",
    textAlign: "left",
  },
  resultsTitle: {
    marginBottom: "10px",
    color: "#333",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    background: "#fff",
    marginBottom: "15px",
    padding: "15px",
    borderRadius: "10px",
    borderLeft: "5px solid #007bff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  jobTitle: {
    margin: "0 0 5px",
    color: "#333",
  },
  jobDesc: {
    color: "#555",
    fontSize: "14px",
  },
};

export default AIRecommendations;
