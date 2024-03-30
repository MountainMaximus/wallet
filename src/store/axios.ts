import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.REACT_APP_SERVER_URL ||
    "http://devapp.bonusmoney.pro/mobileapp",
});

instance.interceptors.request.use((config) => {
  config.headers.TOKEN = 123;
  return config;
});

export default instance;
