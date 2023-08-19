import axios from "axios";

const client = axios.create({
  baseURL: 'http://64.226.92.178:8000',
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
