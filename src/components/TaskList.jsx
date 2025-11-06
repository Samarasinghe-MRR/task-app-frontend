import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete, onToggle }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <div className="no-tasks">
          <p>No tasks yet. Add your first task above! 🚀</p>
        </div>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))
      )}
    </div>
  );
}