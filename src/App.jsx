import "bulma/css/bulma.css";
import "./App.css";
import Hero from "./components/Hero";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const response = await axios.get("http://localhost:3005/tasks");
    setTasks(response.data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const createTask = async (title, detail) => {
    const response = await axios.post("http://localhost:3005/tasks", {
      title,
      detail,
    });
    const currentTasks = [...tasks, response.data];
    setTasks(currentTasks);
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:3005/tasks/${id}`);
    const remainingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(remainingTasks);
  };

  const updateTask = async (id, updatedTitle, updatedDetail) => {
    await axios.put(`http://localhost:3005/tasks/${id}`, {
      title: updatedTitle,
      detail: updatedDetail,
    });
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
