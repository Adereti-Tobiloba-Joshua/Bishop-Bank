import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import React, { useState } from "react";


function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://bank-wallet-main.onrender.com/authUser/log-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to log in");
      }

      const responseData = await response.json();
      // console.log("User logged in successfully:", responseData);
      navigate('/dashboard');
      // Redirect to dashboard page upon successful login
    } catch (error) {
      alert("Error logging in:", error.message);
      // Optionally, you can display an error message to the user here
    }
  };
  return (
    <div>
      <div className="backgroundwhite"></div>
      <div className="login-content">
        <Link to={"/"}>
          <h2>
            BISHOP<span>bank</span>
          </h2>
        </Link>
        <form className="form" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="form-details">
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="check">
            <input className="checkbox" type="checkbox" />
            <label htmlFor=""> Remember me</label>
          </div>
          <button type="submit">Login</button>
          <h4>Don't have an account? </h4>
          <Link to={"/signup"}>Signup</Link>
        </form>
      </div>
    </div>
  );
}
export default Login;
