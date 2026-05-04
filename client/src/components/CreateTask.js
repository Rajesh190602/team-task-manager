import React, { useState } from "react";
import axios from "axios";

function CreateTask() {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    status: "Pending",
    projectId: ""
  });

  const handleChange = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value
    });
  };

  const handleCreateTask = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/tasks/create",
        {
          title: taskData.title,
          description: taskData.description,
          status: taskData.status,
          projectId: taskData.projectId
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Task Created Successfully");
    } catch (error) {
      console.log(error.response?.data);
      alert(error.response?.data?.message || "Task Creation Failed");
    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        textAlign: "center"
      }}
    >
      <h2>Create Task</h2>

      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={taskData.title}
        onChange={handleChange}
        style={{
          width: "90%",
          padding: "10px",
          marginBottom: "15px"
        }}
      />

      <input
        type="text"
        name="description"
        placeholder="Task Description"
        value={taskData.description}
        onChange={handleChange}
        style={{
          width: "90%",
          padding: "10px",
          marginBottom: "15px"
        }}
      />

      <input
        type="text"
        name="projectId"
        placeholder="Project ID"
        value={taskData.projectId}
        onChange={handleChange}
        style={{
          width: "90%",
          padding: "10px",
          marginBottom: "15px"
        }}
      />

      <select
        name="status"
        value={taskData.status}
        onChange={handleChange}
        style={{
          width: "95%",
          padding: "10px",
          marginBottom: "15px"
        }}
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <button
        onClick={handleCreateTask}
        style={{
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Create Task
      </button>
    </div>
  );
}

export default CreateTask;