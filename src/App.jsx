import "bulma/css/bulma.css";
import "./App.css";
import Hero from "./components/Hero";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, detail) => {
    const currentTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title,
        detail,
      },
    ];
    setTasks(currentTasks);
  };

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(remainingTasks);
  };

  const updateTask = (id, updatedTitle, updatedDetail) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          id,
          title: updatedTitle,
          detail: updatedDetail,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <Hero />
      <TaskForm onCreate={createTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
    </div>
  );
}

export default App;
