import React from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css";

const Signup = () => {
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
          <form>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />

            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />

            <label htmlFor="isAdmin">
              <input type="checkbox" id="isAdmin" name="isAdmin" />
              Admin
            </label>

            <button type="submit" className="cta-button">
              Sign Up
            </button>
          </form>
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
