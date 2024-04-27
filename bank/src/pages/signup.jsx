import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import React, { useState, useEffect } from "react";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
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
        "https://bank-wallet-main.onrender.com/authUser/create-user-profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to sign up");
      }

      const responseData = await response.json();
      alert("Account successfully created...... Click okay to continue to Login")
      console.log("User registered successfully:", responseData);
      navigate('/login');
      
      // Optionally, you can redirect the user to another page or show a success message here
    } catch (error) {
      console.error("Error signing up:", error.message);
      // Optionally, you can display an error message to the user here
    }
  };

  return (
    <div>
      <div className="backgroundwhite"></div>
      <div className="signup-content">
        <Link to={"/"}>
          <h2>
            BISHOP<span>bank</span>
          </h2>
        </Link>
        <form className="signup-form" onSubmit={handleSubmit}>
          <h1>Get Started</h1>
          <div className="signup-form-details">
            <input
              id="first_name"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              required
            />
            <input
              id="last_name"
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              required
            />
            <input
              id="email"
              type="email"
              placeholder="Email"
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
          <button type="submit">Signup</button>
          <h4>Have an account? </h4>
          <Link to={"/login"}>Login</Link>
        </form>
      </div>
    </div>
  );
}
export default Signup;
