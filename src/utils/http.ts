import axios from "axios";

export const BASE_API_URL = 'http://localhost:8000/api'

const client = axios.create({
  baseURL: BASE_API_URL,
  timeout: 6000,
});


client.interceptors.request.use(
    config => {
      config.headers["Authorization"] = `Bearer ${localStorage.getItem('authToken')}`

      return config;
    },
    error => {
      Promise.reject(error);
    }
  );

export const http = client;
