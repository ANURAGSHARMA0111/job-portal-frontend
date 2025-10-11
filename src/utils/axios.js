import axios from 'axios';

// Create an axios instance with the base URL
const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// You can intercept requests or responses to handle errors globally (optional)
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API call error:', error);
    return Promise.reject(error);
  }
);

export default instance;
