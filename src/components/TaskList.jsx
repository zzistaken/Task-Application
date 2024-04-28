import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onUpdate }) {
  return (
    <div className="section is-flex is-flex-direction-column">
      <div className="is-flex is-justify-content-center">
        <h1 className="title is-4">Tasks</h1>
      </div>
      <div className="container is-flex is-justify-content-center is-flex-wrap-wrap mt-4">
        {tasks.map((task, index) => {
          return (
            <TaskItem
              task={task}
              key={index}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TaskList;
