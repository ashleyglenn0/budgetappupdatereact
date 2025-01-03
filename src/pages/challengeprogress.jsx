import React, { useState } from "react";
import "../styles/challengeprogress.css";

const ChallengeProgress = ({ enrolledChallenges, onUnenroll, onComplete }) => {
  const [userPoints, setUserPoints] = useState(0); // Example state for user's total points

  const handleUnenroll = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to unenroll from this challenge?"
    );
    if (confirmed) {
      onUnenroll(id);
    }
  };

  const handleComplete = (challenge) => {
    setUserPoints((prev) => prev + challenge.points);
    onComplete(challenge.id);
  };

  return (
    <div className="challenge-progress-container">
      <nav className="navbar">
        <button className="nav-button">Home</button>
        <button className="nav-button">Logout</button>
      </nav>

      <h1>Challenge Progress</h1>
      <p>
        Total Points: <span className="points">{userPoints}</span>
      </p>

      <div className="challenge-list">
        {enrolledChallenges.map((challenge) => (
          <div
            key={challenge.id}
            className={`challenge-card ${
              challenge.status === "Completed" ? "completed" : ""
            }`}
          >
            <h2>{challenge.name}</h2>
            <p>{challenge.description}</p>
            <p>Points: {challenge.points}</p>
            <p>Status: {challenge.status}</p>

            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${challenge.progress}%` }}
              ></div>
              <span>{challenge.progress}%</span>
            </div>

            {challenge.status === "Active" && (
              <>
                <button
                  className="unenroll-button"
                  onClick={() => handleUnenroll(challenge.id)}
                >
                  Unenroll
                </button>
                {challenge.progress === 100 && (
                  <button
                    className="complete-button"
                    onClick={() => handleComplete(challenge)}
                  >
                    Mark as Complete
                  </button>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      <footer>© 2025 BudgetApp. All rights reserved.</footer>
    </div>
  );
};

export default ChallengeProgress;
