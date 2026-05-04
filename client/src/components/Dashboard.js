import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tasks");
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  return (
    <div
      style={{
        width: "500px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        textAlign: "center"
      }}
    >
      <h2>Dashboard</h2>

      <h3>Total Tasks: {totalTasks}</h3>
      <h3>Completed Tasks: {completedTasks}</h3>
      <h3>Pending Tasks: {pendingTasks}</h3>
      <h3>In Progress Tasks: {inProgressTasks}</h3>
    </div>
  );
}

export default Dashboard;