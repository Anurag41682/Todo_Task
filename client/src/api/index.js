import axios from "axios";

const URL = "http://localhost:3001/";

const API = axios.create({ baseURL: URL });

export const addTask = (data) => {
  return API.post("/add", data);
};
