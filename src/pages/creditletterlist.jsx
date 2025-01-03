import React, { useState } from "react";
import "../styles/creditletterlist.css";

const CreditLetterList = ({ creditLetters }) => {
  const [letters, setLetters] = useState(creditLetters);

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this letter?"
    );
    if (confirmed) {
      setLetters(letters.filter((letter) => letter.id !== id));
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "status-pending";
      case "Responded":
        return "status-responded";
      case "Awaiting Next Steps":
        return "status-awaiting";
      case "Resolved":
        return "status-resolved";
      default:
        return "";
    }
  };

  return (
    <div className="credit-letter-list">
      {/* Navbar */}
      <nav className="navbar">
        <button className="nav-button">Home</button>
        <button className="nav-button">Logout</button>
      </nav>

      <h1>Your Credit Letters</h1>

      {/* Letter List */}
      <div className="letter-grid">
        {letters.map((letter) => (
          <div className="letter-card" key={letter.id}>
            <h2>{letter.type}</h2>
            <p>Recipient: {letter.recipient}</p>
            <p>Date Sent: {letter.dateSent}</p>
            <p>Expected Response: {letter.expectedResponseDate}</p>
            <p className={`status ${getStatusClass(letter.status)}`}>
              Status: {letter.status}
            </p>
            <div className="actions">
              <button className="view-button">View Details</button>
              <button className="update-button">Update Status</button>
              <button
                className="delete-button"
                onClick={() => handleDelete(letter.id)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 BudgetApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CreditLetterList;
