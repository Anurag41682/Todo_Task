import axios from "axios";

const URL = "http://localhost:3001/";

const API = axios.create({ baseURL: URL });

export const addTask = (data) => {
  return API.post("/add", data);
};
export const removeTask = (id) => {
  return API.delete(`/remove/${id}`);
};

export const fetchData = () => {
  return API.get("/get");
};

export const editTask = (id, dataToUpdate) => {
  return API.patch(`/update/${id}`, { content: dataToUpdate });
};
