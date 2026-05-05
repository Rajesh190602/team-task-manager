import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post(
        "https://team-task-manager-back.onrender.com/api/auth/register",
        {
          name: registerData.name,
          email: registerData.email,
          password: registerData.password
        }
      );

      alert(res.data.message);
    } catch (error) {
  console.log(error.response?.data);
  alert(error.response?.data?.message || "Registration Failed");
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
      <h2>Register</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={registerData.name}
        onChange={handleChange}
        style={{
          width: "90%",
          padding: "10px",
          marginBottom: "15px"
        }}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={registerData.email}
        onChange={handleChange}
        style={{
          width: "90%",
          padding: "10px",
          marginBottom: "15px"
        }}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={registerData.password}
        onChange={handleChange}
        style={{
          width: "90%",
          padding: "10px",
          marginBottom: "15px"
        }}
      />

      <button
        onClick={handleRegister}
        style={{
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Register
      </button>
    </div>
  );
}

export default Register;