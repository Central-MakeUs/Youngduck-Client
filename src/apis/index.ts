import axios from 'axios';
import Config from 'react-native-config';

const baseURL = Config.BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  timeout: 10 * 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
