// src/utils/axiosInstance.ts
import axios from 'axios';
import { API_URL } from '@/config'; // Make sure API_URL is defined appropriately

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

// Add a request interceptor to include token from localStorage
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
