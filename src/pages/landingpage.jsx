import React from "react";
import { Link } from "react-router-dom";
import "../styles/landingpage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
      <nav class="navbar">
      <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
    </nav>
      </header>
      <main>
        <div className="content-container">
          <div className="card-container">
            <h1 className="headline">Take Control of Your Finances</h1>
            <p className="subtitle">Your one-stop solution to budgeting, credit repair, and financial goals.</p>
            <div className="features">
              <div className="feature">
                <h3>Track Budgets</h3>
                <p>Stay on top of your spending.</p>
              </div>
              <div className="feature">
                <h3>Credit Repair Tools</h3>
                <p>Improve your financial health.</p>
              </div>
              <div className="feature">
                <h3>Join Challenges</h3>
                <p>Motivate yourself to save more.</p>
              </div>
            </div>
            <Link to="/signup" className="cta-button">Get Started Now</Link>
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; 2025 Budget App. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
