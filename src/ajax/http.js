import axios from 'axios';

const prefix = '';

axios.interceptors.request.use(function (config) {
  if (config.method === 'post') {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  }
});

const instance = axios.create({
    baseURL: prefix,
    timeout: 10000
})

export default instance;