import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // Your Spring backend base URL
});

export default api;