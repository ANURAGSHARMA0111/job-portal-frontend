import axios from "axios";

const API_URL = "https://earnest-pothos-8ea302.netlify.app/";

// ✅ Register User
export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};

// ✅ Login User (Agar missing hai to yeh add karein)
export const loginUser = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
};
