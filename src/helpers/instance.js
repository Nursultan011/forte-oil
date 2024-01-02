import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    'Accept-Language': 'ru',
    'Access-Control-Allow-Origin': "*"
  }
});

export default axiosInstance;
