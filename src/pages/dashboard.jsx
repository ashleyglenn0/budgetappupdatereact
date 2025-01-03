import React from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

const Dashboard = ({  firstName,
    globalChallengeName,
    upcomingPayments,
    upcomingIncome,
    firstLetterStatus,
    topSavingsChallenge,
    challenges, }) => {
  return (
    <>
      <div className="navbar">
        <button className="logout-button">Logout</button>
      </div>

      <div className="dashboard-container">
        {/* Sticky Welcome Section */}
        <div className="welcome-section">
          <h1>Welcome, {firstName}!</h1>
          <p>
            Announcement: <strong>{globalChallengeName}</strong> is happening now!{" "}
            <button className="join-button">Join</button>
          </p>
        </div>

        {/* At A Glance Section */}
        <div className="card">
          <h2>At A Glance</h2>
          <ul>
            <li>Upcoming Payments: {upcomingPayments.join(", ")}</li>
            <li>Upcoming Income: {upcomingIncome}</li>
            <li>Letter Status: {firstLetterStatus}</li>
            <li>
              Top Savings Challenge: {topSavingsChallenge.name} -{" "}
              {topSavingsChallenge.progress}% Progress
            </li>
          </ul>
        </div>

        {/* Challenges Section */}
        <div className="card">
          <h2>Challenges</h2>
          <ul>
            {challenges.map((challenges) => (
              <li key={challenges.id}>
                {challenges.name}
                {challenges.isGlobal && <strong> **</strong>}
                <button className="view-button">View</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions Section */}
        <div className="card">
          <h2>Actions</h2>
          <div className="actions-grid">
            <button className="action-button">Create/Add Budget</button>
            <button className="action-button">Create/Add Letters</button>
            <button className="action-button">Join More Challenges</button>
            <Link to="/budgets"><button className="action-button">View All Budgets</button></Link>
            <button className="action-button">View All Letters</button>
            <button className="action-button">View Challenge Progress</button>
          </div>
        </div>
      </div>

      <footer>© 2025 Budget App. All Rights Reserved.</footer>
    </>
  );
};

export default Dashboard;
