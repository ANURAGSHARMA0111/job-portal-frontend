import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  withCredentials: true,
});

// ✅ Register User
export const register = async (userData) => {
  return await API.post("/register", userData);
};

// ✅ Login User
export const login = async (userData) => {
  return await API.post("/login", userData);
};

// ✅ Get Profile
export const getProfile = async (token) => {
  return await API.get("/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
