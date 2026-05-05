import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async () => {
  try {
    const res = await axios.post(
      "https://team-task-manager-back.onrender.com/api/auth/login",
      {
        email: loginData.email,
        password: loginData.password
      }
    );

    localStorage.setItem("token", res.data.token);

    alert("Login Successful");
  } catch (error) {
    console.log(error.response?.data);
    alert(error.response?.data?.message || "Login Failed");
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
      <h2>Login</h2>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={loginData.email}
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
        value={loginData.password}
        onChange={handleChange}
        style={{
          width: "90%",
          padding: "10px",
          marginBottom: "15px"
        }}
      />

      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;