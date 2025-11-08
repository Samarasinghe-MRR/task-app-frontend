import axios from 'axios';

// Use relative path for API URL - Nginx will proxy to backend
const API_BASE_URL = "/api/tasks";

export const getTasks = () => axios.get(API_BASE_URL);
export const createTask = (task) => axios.post(API_BASE_URL, task);
export const updateTask = (id, task) => axios.put(`${API_BASE_URL}/${id}`, task);
export const deleteTask = (id) => axios.delete(`${API_BASE_URL}/${id}`);