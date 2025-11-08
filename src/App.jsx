import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "./api";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      setError("Failed to load tasks. Make sure the backend is running on port 8081.");
      console.error("Error loading tasks:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (task) => {
    try {
      await createTask(task);
      loadTasks();
    } catch (err) {
      setError("Failed to create task.");
      console.error("Error creating task:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      loadTasks();
    } catch (err) {
      setError("Failed to delete task.");
      console.error("Error deleting task:", err);
    }
  };

  const handleToggle = async (task) => {
    try {
      const updated = {
        ...task,
        status: task.status === "Completed" ? "Pending" : "Completed",
      };
      await updateTask(task.id, updated);
      loadTasks();
    } catch (err) {
      setError("Failed to update task.");
      console.error("Error updating task:", err);
    }
  };

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Loading tasks... 🔄</div>
      </div>
    );
  }

  return (
    <div className="container">
      <header className="app-header">
        <h1>📝 Task Manager <span style={{fontSize: '0.6em', opacity: 0.8}}>v2.2</span></h1>
        <p>Manage your DevOps tasks efficiently - GCP Native CI/CD Test 🚀</p>
      </header>
      
      {error && (
        <div className="error-message">
          ⚠️ {error}
        </div>
      )}
      
      <TaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} onDelete={handleDelete} onToggle={handleToggle} />
      
      <footer className="app-footer">
        <p>📊 Total tasks: {tasks.length} | ✅ Completed: {tasks.filter(t => t.status === "Completed").length}</p>
        <p style={{fontSize: '0.8em', marginTop: '5px', color: '#28a745'}}>
          🚀 GCP Native Deployment - Build #{new Date().toISOString().slice(0,10)}
        </p>
      </footer>
    </div>
  );
}

export default App;
