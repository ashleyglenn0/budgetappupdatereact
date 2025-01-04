import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

const Dashboard = ({
  firstName,
  globalChallengeName,
  upcomingPayments,
  upcomingIncome,
  firstLetterStatus,
  topSavingsChallenge,
  challenges,
  points,
  status,
}) => {
  const statusStyles = {
    Bronze: {
      color: "brown",
      fontWeight: "bold",
      fontStyle: "italic",
      textTransform: "uppercase",
    },
    Silver: {
      color: "gray",
      fontWeight: "bold",
      fontStyle: "italic",
      textTransform: "uppercase",
    },
    Gold: {
      color: "gold",
      fontWeight: "bold",
      fontStyle: "italic",
      textTransform: "uppercase",
    },
    Platinum: {
      color: "darkblue",
      fontWeight: "bold",
      fontStyle: "italic",
      textTransform: "uppercase",
    },
  };

  const [expandedChallengeId, setExpandedChallengeId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedChallengeId((prev) => (prev === id ? null : id));
  };

  const handleUnenroll = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to unenroll from this challenge?"
    );
    if (confirmed) {
      // Call API or update state to unenroll
      console.log(`Unenrolled from challenge with ID: ${id}`);
    }
  };

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <nav className="navbar">
        <button className="logout-button">Logout</button>
      </nav>

      {/* Main Content with Scrollable Design */}
      <div className="dashboard-content">
        {/* Sticky Welcome Section */}
        <div className="welcome-section">
          <h1>Welcome, {firstName}!</h1>
          <p>
            Announcement: <strong>{globalChallengeName}</strong> is happening
            now! <button className="join-button">Join</button>
          </p>
        </div>

        {/* Points & Status Section */}
        <div className="card">
          <h2>Points & Status</h2>
          <p>
            Points: <span style={statusStyles[status]}>{points}</span>
          </p>
          <p>
            Status: <span style={statusStyles[status]}>{status}</span>
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
          <ul className="challenge-list">
            {challenges.map((challenge) => (
              <li key={challenge.id} className="challenge-item">
                <div className="challenge-header">
                  <span>
                    {challenge.name}
                    {challenge.isGlobal && <strong> **</strong>}
                  </span>
                  <button
                    className="expand-button"
                    onClick={() => toggleExpand(challenge.id)}
                  >
                    {expandedChallengeId === challenge.id
                      ? "Collapse"
                      : "Expand"}
                  </button>
                </div>
                {expandedChallengeId === challenge.id && (
                  <div className="challenge-details">
                    <p>Description: {challenge.description}</p>
                    <p>Points: {challenge.points}</p>
                    <p>Progress: {challenge.progress}%</p>
                    <div className="actions">
                      <button
                        className="unenroll-button"
                        onClick={() => handleUnenroll(challenge.id)}
                      >
                        Unenroll
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/*Link to free credit report */}
        <div className="card">
          <h1>Access Your Credit Report</h1>
          <p>
            You are entitled to one free credit report from each credit bureau
            every year.
          </p>
          <a
            href="https://www.annualcreditreport.com/index.action"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Get My Free Credit Report
          </a>
        </div>

        {/* Actions Section */}
        <div className="actions-container">
          <h2>Actions</h2>

          {/* Budgets Section */}
          <div className="action-group">
            <h3>Budgets</h3>
            <Link to="/addbudget"><button className="action-button">Create/Add Budget</button></Link>
            <Link to="/budgets"><button className="action-button">View All Budgets</button></Link>
          </div>

          {/* Letters Section */}
          <div className="action-group">
            <h3>Letters</h3>
            <Link to="/addletter"><button className="action-button">Create/Add Letters</button></Link>
            <Link to="/letters-list"><button className="action-button">View All Letters</button></Link>
          </div>

          {/* Challenges Section */}
          <div className="action-group">
            <h3>Challenges</h3>
            <Link to="/challenge-list"><button className="action-button">Join More Challenges</button></Link>
            <Link to="/challenge-progress"><button className="action-button">View Challenge Progress</button></Link>
          </div>

          {/* Extras Section */}
          <div className="action-group">
            <h3>Extras</h3>
            <Link to="/chatbox"><button className="action-button">
              Get Personalized Recommendations
            </button></Link>
            <Link to="/file-upload"><button className="action-button">Upload/View Documents</button></Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>© 2025 Budget App. All Rights Reserved.</footer>
    </div>
  );
};

export default Dashboard;
