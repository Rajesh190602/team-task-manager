import React, { useState } from "react";
import axios from "axios";

function CreateProject() {
  const [projectData, setProjectData] = useState({
    title: "",
    description: ""
  });

  const handleChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value
    });
  };

  const handleCreateProject = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/projects/create",
        {
          title: projectData.title,
          description: projectData.description
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Project Created Successfully");
    } catch (error) {
      console.log(error.response?.data);
      alert("Project Creation Failed");
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
      <h2>Create Project</h2>

      <input
        type="text"
        name="title"
        placeholder="Project Title"
        value={projectData.title}
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
        placeholder="Project Description"
        value={projectData.description}
        onChange={handleChange}
        style={{
          width: "90%",
          padding: "10px",
          marginBottom: "15px"
        }}
      />

      <button
        onClick={handleCreateProject}
        style={{
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Create Project
      </button>
    </div>
  );
}

export default CreateProject;