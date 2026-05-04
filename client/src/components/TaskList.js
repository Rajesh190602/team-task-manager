import React, { useEffect, useState } from "react";
import axios from "axios";

function TaskList() {
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

  const updateStatus = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${id}`, {
        status: "Completed"
      });

      alert("Task Updated Successfully");
      fetchTasks();
    } catch (error) {
      alert("Update Failed");
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`);

      alert("Task Deleted Successfully");
      fetchTasks();
    } catch (error) {
      alert("Delete Failed");
    }
  };

  return (
    <div
      style={{
        width: "600px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px"
      }}
    >
      <h2 style={{ textAlign: "center" }}>Task List</h2>

      {tasks.length === 0 ? (
        <p style={{ textAlign: "center" }}>No Tasks Found</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "8px"
            }}
          >
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>
              <strong>Status:</strong> {task.status}
            </p>

            <button
              onClick={() => updateStatus(task._id)}
              style={{
                marginRight: "10px",
                padding: "8px 15px",
                cursor: "pointer"
              }}
            >
              Mark Completed
            </button>

            <button
              onClick={() => deleteTask(task._id)}
              style={{
                padding: "8px 15px",
                cursor: "pointer"
              }}
            >
              Delete Task
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;