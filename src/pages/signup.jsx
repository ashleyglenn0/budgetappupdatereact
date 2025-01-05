import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../styles/signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isAdmin: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/signup",
        formData
      );
      toast.success("Sign-up successful! Redirecting to login...");
      console.log("Sign-up successful:", response.data);

      // Redirect to login or dashboard (adjust as needed)
      window.location.href = "/login";
    } catch (error) {
      toast.error("Sign-up failed: " + (error.response?.data || error.message));
      console.error("Sign-up failed:", error.response?.data || error.message);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
      </nav>

      {/* Signup Form */}
      <div className="content-container">
        <div className="card-container">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />

            <label htmlFor="isAdmin">
              <input
                type="checkbox"
                id="isAdmin"
                name="isAdmin"
                checked={formData.isAdmin}
                onChange={handleChange}
              />
              Admin
            </label>

            <button type="submit" className="cta-button">
              Sign Up
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 Budget App. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Signup;
