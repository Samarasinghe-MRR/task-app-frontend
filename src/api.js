import axios from 'axios';

// Use relative path for API URL - Ingress will route to backend
const API_BASE_URL = "/api/tasks";

console.log("API Base URL:", API_BASE_URL);

export const getTasks = () => {
  console.log("Making GET request to:", API_BASE_URL);
  return axios.get(API_BASE_URL);
};

export const createTask = (task) => {
  console.log("Making POST request to:", API_BASE_URL);
  return axios.post(API_BASE_URL, task);
};

export const updateTask = (id, task) => {
  console.log("Making PUT request to:", `${API_BASE_URL}/${id}`);
  return axios.put(`${API_BASE_URL}/${id}`, task);
};

export const deleteTask = (id) => {
  console.log("Making DELETE request to:", `${API_BASE_URL}/${id}`);
  return axios.delete(`${API_BASE_URL}/${id}`);
};