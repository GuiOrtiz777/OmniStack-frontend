import axios from 'axios';

const api = axios.create({
  baseURL: "https://omnistack-backend0.herokuapp.com",
});

export default api;