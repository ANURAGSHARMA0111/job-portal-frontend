import React, { useState } from "react";
import axios from "axios";

const AICareerAdvisor = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/ai/career-advisor", {
        message: input,
      });

      const aiMessage = { sender: "ai", text: res.data.reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage = { sender: "ai", text: "⚠️ Failed to get AI response." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        background: "#f9f9ff",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#2c3e50",
          fontWeight: "700",
          marginBottom: "10px",
        }}
      >
        🤖 AI Career Advisor
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#555",
          fontSize: "15px",
          marginBottom: "25px",
        }}
      >
        Ask career-related questions and get personalized AI guidance.
      </p>

      {/* Chat Box */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: "10px",
          height: "400px",
          overflowY: "auto",
          padding: "15px",
          marginBottom: "15px",
          scrollBehavior: "smooth",
        }}
      >
        {messages.length === 0 && (
          <div
            style={{
              textAlign: "center",
              color: "#aaa",
              marginTop: "150px",
              fontStyle: "italic",
            }}
          >
            Start the conversation by asking your question 👇
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent:
                msg.sender === "user" ? "flex-end" : "flex-start",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                maxWidth: "70%",
                padding: "12px 15px",
                borderRadius: "15px",
                fontSize: "15px",
                lineHeight: "1.4",
                whiteSpace: "pre-wrap",
                backgroundColor:
                  msg.sender === "user" ? "#007bff" : "#e6e6ea",
                color: msg.sender === "user" ? "#fff" : "#000",
                borderBottomRightRadius:
                  msg.sender === "user" ? "0" : "15px",
                borderBottomLeftRadius:
                  msg.sender === "ai" ? "0" : "15px",
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div
            style={{
              textAlign: "center",
              color: "#666",
              fontStyle: "italic",
              margin: "10px 0",
            }}
          >
            💬 AI is typing...
          </div>
        )}
      </div>

      {/* Input Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <textarea
          rows="2"
          placeholder="Type your question here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            resize: "none",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px",
            fontSize: "15px",
            outline: "none",
          }}
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            padding: "10px 20px",
            cursor: "pointer",
            fontWeight: "600",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          {loading ? "Sending..." : "Ask AI"}
        </button>
      </form>
    </div>
  );
};

export default AICareerAdvisor;
