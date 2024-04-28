import { useState } from "react";
import TaskForm from "./TaskForm";

function TaskItem({ task, onDelete, onUpdate }) {
  const [editStatus, setEditStatus] = useState(false);

  const handleDeleteClick = (id) => {
    if (confirm("Are you sure?") === true) {
      onDelete(task.id);
    }
  };

  const handleEditClick = () => {
    setEditStatus(!editStatus);
  };

  const handleUpdateSubmit = (id, updatedTitle, updatedDetail) => {
    setEditStatus(false);
    onUpdate(id, updatedTitle, updatedDetail);
  };

  return (
    <div>
      {editStatus ? (
        <TaskForm
          task={task}
          taskFormUpdate={true}
          onUpdate={handleUpdateSubmit}
        />
      ) : (
        <div className="card m-2">
          <span className="tag is-hoverable ml-2 mt-2">ID: {task.id}</span>
          <div className="card-content">
            <p className="title is-5">{task.title}</p>
            <p className="subtitle is-6">{task.detail}</p>
          </div>
          <footer className="card-footer">
            <p className="card-footer-item">
              <button className="button is-warning" onClick={handleEditClick}>
                Edit
              </button>
            </p>
            <p className="card-footer-item">
              <button className="button is-danger" onClick={handleDeleteClick}>
                Delete
              </button>
            </p>
          </footer>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
