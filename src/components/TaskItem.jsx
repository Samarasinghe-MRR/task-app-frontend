export default function TaskItem({ task, onDelete, onToggle }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "#28a745";
      case "In Progress": return "#ffc107";
      case "Pending": return "#6c757d";
      default: return "#6c757d";
    }
  };

  return (
    <div className="task-item">
      <div className="task-info">
        <strong>{task.title}</strong>
        <p>{task.description}</p>
        <span 
          className="status-badge" 
          style={{ backgroundColor: getStatusColor(task.status) }}
        >
          {task.status}
        </span>
      </div>
      <div className="task-actions">
        <button 
          className="toggle-btn"
          onClick={() => onToggle(task)}
        >
          {task.status === "Completed" ? "Mark Pending" : "Complete"}
        </button>
        <button 
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}