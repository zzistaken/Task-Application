import { useState } from "react";

function TaskForm({ onCreate, task, taskFormUpdate, onUpdate }) {
  const [titleValue, setTitleValue] = useState(task ? task.title : "");
  const [detailValue, setDetailValue] = useState(task ? task.detail : "");

  const handleTitleChange = (event) => {
    setTitleValue(event.target.value);
  };

  const handleDetailChange = (event) => {
    setDetailValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (taskFormUpdate === true) {
      onUpdate(task.id, titleValue, detailValue);
    } else {
      onCreate(titleValue, detailValue);
    }
    setTitleValue("");
    setDetailValue("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="box m-2">
          <form>
            <div className="field">
              <label className="label" htmlFor="taskTitle">
                Title
              </label>
              <input
                id="taskTitle"
                className="input"
                type="text"
                placeholder="Please enter the task title"
                onChange={handleTitleChange}
                value={titleValue}
              />
            </div>
            <div className="field">
              <label className="label" htmlFor="taskDetail">
                Details
              </label>
              <textarea
                id="taskDetail"
                className="textarea"
                placeholder="Please enter the task details"
                onChange={handleDetailChange}
                value={detailValue}
              ></textarea>
            </div>
            <input
              className="button is-primary"
              type="submit"
              value="Update"
              onClick={handleFormSubmit}
            />
          </form>
        </div>
      ) : (
        <div className="section container is-max-desktop">
          <div className="titleArea is-flex is-justify-content-center mb-4">
            <h1 className="title is-4">Create a Task</h1>
          </div>
          <form>
            <div className="field">
              <label className="label" htmlFor="taskTitle">
                Title
              </label>
              <input
                id="taskTitle"
                className="input"
                type="text"
                placeholder="Please enter the task title"
                onChange={handleTitleChange}
                value={titleValue}
              />
            </div>
            <div className="field">
              <label className="label" htmlFor="taskDetail">
                Details
              </label>
              <textarea
                id="taskDetail"
                className="textarea"
                placeholder="Please enter the task details"
                onChange={handleDetailChange}
                value={detailValue}
              ></textarea>
            </div>
            <input
              className="button is-primary"
              type="submit"
              value="Create"
              onClick={handleFormSubmit}
            />
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskForm;
