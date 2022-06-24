import React, { useState } from "react";
import { GiHornedHelm } from "react-icons/gi";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // add tasks
  const handleSubmit = (e) => {
    e.preventDefault();
    const addTask = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      completed: false,
    };
    setTasks([addTask, ...tasks]);
    setInput("");
  };

  // delete tasks
  const deleteTask = (id) => {
    let filteredTasks = [...tasks].filter((tasks) => tasks.id !== id);
    setTasks(filteredTasks);
    console.log("task deleted");
  };

  // toggle completed task
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="w-full h-screen flex items-center flex-col ">
      <div className="w-2/3 h-full flex flex-col items-center">
        <h1 className="text-4xl tracking-[-4px] py-4 font-bold">
          <span className="text-red-600">A</span>li
          <span className="text-red-600">P</span>ourhassan
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="flex items-center w-full">
            <AiOutlinePlus className="text-sm" size={16} />
            <input
              className="shadow-slate-300 max-w-[600px] px-2 py-1 focus:outline-none sm:w-[400px] w-40 rounded-lg shadow-lg "
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter a task"
              type="text"
            />
          </div>
        </form>

        <div className="w-full flex items-center flex-col justify-center">
          {tasks.map((task) => (
            <div
              className={`rounded-lg shadow-lg shadow-slate-300 flex py-1 px-2 my-2 justify-between items-center max-w-[600px] sm:w-[400px] w-40${" "} ${
                task.completed && "line-through"
              }`}
              key={task.id}
              onDoubleClick={() => toggleComplete(task.id)}
            >
              <p>{task.text} </p>
              <AiOutlineClose
                onClick={() => deleteTask(task.id)}
                className="text-red-500"
              />
            </div>
          ))}
        </div>

        <p className="pt-2">
          {tasks < 1 ? "You have no tasks" : `Tasks: ${tasks.length}`}
        </p>
      </div>
    </div>
  );
}

export default App;
