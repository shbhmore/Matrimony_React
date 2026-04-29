import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// This interceptor runs BEFORE every request goes out
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('vmks_token');
    
    // If we have a token, put it in the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;