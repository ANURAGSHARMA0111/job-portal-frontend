import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // 👈 import AuthContext

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [userExists, setUserExists] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const { setUser } = useAuth(); // 👈 get setUser from context

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserExists(false);
    setErrorMessage("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);

      console.log("✅ Registration Success:", res.data);

      // Save token + user in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // Update context
      setUser(res.data.user);

      alert("Registration Successful!");
      navigate("/dashboard"); // 👈 directly go to dashboard after registration
    } catch (err) {
      const msg = err.response?.data?.message || "Registration failed";
      setErrorMessage(msg);

      if (msg.includes("User already exists")) {
        setUserExists(true); // show login link
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        {errorMessage && (
          <div className="mb-4 text-red-600 text-sm text-center">{errorMessage}</div>
        )}

        <input
          type="text"
          name="fullName"
          placeholder="Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 border rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 border rounded"
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="w-full mb-6 px-4 py-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>

        {userExists && (
          <div className="mt-4 text-center text-sm text-gray-700">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Login here
            </a>
          </div>
        )}
      </form>
    </div>
  );
};

export default Register;
