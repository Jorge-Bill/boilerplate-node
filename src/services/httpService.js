import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const { API } = process.env;

const httpService = axios.create({
  baseURL: API,
});

const interceptRequest = async (config) => {
  config.headers.Authorization = "";

  return config;
};

httpService.interceptors.request.use(interceptRequest);

export default httpService;
