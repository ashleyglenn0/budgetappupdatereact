import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
    
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
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
            
            <button type="submit" className="cta-button">Login</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 Budget App. All Rights Reserved.</p>
      </footer>
    </>
      );
}

export default Login;