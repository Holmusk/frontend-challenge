import axios from 'axios';

import config from '../../config';

const axiosInstance = axios.create({
  baseUrl: config.baseUrl,
});

export default axiosInstance;
