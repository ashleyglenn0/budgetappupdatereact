import React from "react";
import { Link } from "react-router-dom";
import "../styles/challengelist.css";

const ChallengesList = ({ challenges, globalChallenges, onEnroll }) => {
  const handleEnroll = (challengeId) => {
    onEnroll(challengeId);
  };

  return (
    <div className="challenges-list-container">
      {/* Navbar */}
      <nav className="navbar">
          <Link to="/dashboard">
            <button className="nav-button">Home</button>
          </Link>
          <button className="nav-button">Logout</button>
        </nav>

      <h1>Available Challenges</h1>

      {/* Personal Challenges */}
      <div className="challenge-section">
        <h2>Personal Challenges</h2>
        <ul className="challenge-list">
          {challenges.map((challenge) => (
            <li key={challenge.id} className="challenge-item">
              <div>
                <h3>{challenge.name}</h3>
                <p>{challenge.description}</p>
                <p>
                  <strong>Duration:</strong> {challenge.startDate} -{" "}
                  {challenge.endDate}
                </p>
                <p>
                  <strong>Points:</strong> {challenge.points}
                </p>
              </div>
              <button
                className="enroll-button"
                onClick={() => handleEnroll(challenge.id)}
                disabled={challenge.isEnrolled}
              >
                {challenge.isEnrolled ? "Enrolled" : "Enroll"}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Global Challenges */}
      <div className="challenge-section">
        <h2>Global Challenges</h2>
        <ul className="challenge-list">
          {globalChallenges.map((challenge) => (
            <li key={challenge.id} className="challenge-item">
              <div>
                <h3>{challenge.name} **</h3>
                <p>{challenge.description}</p>
                <p>
                  <strong>Duration:</strong> {challenge.startDate} -{" "}
                  {challenge.endDate}
                </p>
                <p>
                  <strong>Points:</strong> {challenge.points}
                </p>
              </div>
              <button
                className="enroll-button"
                onClick={() => handleEnroll(challenge.id)}
                disabled={challenge.isEnrolled}
              >
                {challenge.isEnrolled ? "Enrolled" : "Enroll"}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 BudgetApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ChallengesList;
