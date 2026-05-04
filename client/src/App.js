import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import CreateProject from "./components/CreateProject";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <Register />
      <Login />
      <Dashboard />
      <CreateProject />
      <CreateTask />
      <TaskList />
    </div>
  );
}

export default App;