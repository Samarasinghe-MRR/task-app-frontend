import axios from 'axios';

// Use environment variable for API URL, fallback to localhost for development
const API_BASE_URL = import.meta.env.PROD 
  ? "http://localhost:8081/api/tasks"  // Docker production URL
  : "http://localhost:8081/api/tasks"; // Development URL

export const getTasks = () => axios.get(API_BASE_URL);
export const createTask = (task) => axios.post(API_BASE_URL, task);
export const updateTask = (id, task) => axios.put(`${API_BASE_URL}/${id}`, task);
export const deleteTask = (id) => axios.delete(`${API_BASE_URL}/${id}`);