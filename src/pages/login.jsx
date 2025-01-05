import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/api";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post("http://localhost:8080/auth/login", formData);

        const { dashboardApiUrl, token, message } = response.data;

        if (!token) {
            toast.error("Login failed: Token not provided.");
            return;
        }

        // Save the JWT token to local storage
        localStorage.setItem("jwtToken", token);
        localStorage.setItem("dashboardApiUrl", dashboardApiUrl);

        // Display success message
        toast.success(message);

        // Redirect to dashboard
        navigate("/app/dashboard", { state: { apiUrl: dashboardApiUrl } });
    } catch (error) {
        toast.error("Login failed: " + (error.response?.data?.message || error.message));
        console.error("Login error:", error);
    }
};



  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
      </nav>

      {/* Login Form */}
      <div className="content-container">
        <div className="card-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
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

            <button type="submit" className="cta-button">
              Login
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

export default Login;
