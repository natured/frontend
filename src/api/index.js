import axios from 'axios';

// sets default api url
let API_URL = 'https://api.natured.co';

// if not in production, just use the 3030 port of wherever we're at
if (process.env.NODE_ENV !== 'production') {
  API_URL = window.location.origin.replace(window.location.port, '3030');
}

const axiosInstance = axios.create({ baseURL: API_URL });

// before each request, attempts to add token from local storage
axiosInstance.interceptors.request.use(async (config) => {
  const token = window.localStorage.getItem('token');
  if (token !== null) { config.headers.Authorization = `Bearer ${token}`; }
  return config;
}, error => (Promise.reject(error)));

export default axiosInstance;
