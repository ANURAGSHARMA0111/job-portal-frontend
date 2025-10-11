import React, { useEffect } from "react";
import axios from "axios";

function TestAPI() {
  useEffect(() => {
    axios
      .get("/api/test")
      .then((res) => {
        console.log(res.data);
        alert(res.data);
      })
      .catch((err) => {
        console.error("Error connecting to backend:", err);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Testing Backend Connection...</h2>
      <p>Check your browser console or alert message.</p>
    </div>
  );
}

export default TestAPI;
