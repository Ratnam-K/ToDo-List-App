import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

   const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
  };

  return (
    <div className="app-container">
      <Header />
      <ToDoList tasks={tasks} onToggle={toggleComplete} onDelete={deleteTask} onEdit={editTask} />
      <div className="form-container">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a task" />
        <button onClick={addTask}>Add</button>
      </div>
    </div>
  );
};

export default App;