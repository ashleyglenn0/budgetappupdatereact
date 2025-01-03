import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/budgetlist.css";

const BudgetList = ({ budgets: initialBudgets }) => {
  // Initialize state with the budgets prop
  const [budgets, setBudgets] = useState(initialBudgets);

  // Delete handler
  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this budget?"
    );
    if (confirmed) {
      const updatedBudgets = budgets.filter((budget) => budget.id !== id);
      setBudgets(updatedBudgets);
    }
  };

  return (
    <div className="budget-list-page">
      {/* Navbar */}
      <nav className="navbar">
          <Link to="/dashboard">
            <button className="nav-button">Home</button>
          </Link>
          <button className="nav-button">Logout</button>
        </nav>

      {/* Budget Cards Grid */}
      <div className="budget-list-container">
        <h1>Your Budgets</h1>
        <div className="budget-grid">
          {budgets.map((budget) => (
            <div
              className={`budget-card ${budget.status.toLowerCase()}`}
              key={budget.id}
            >
              <h2>{budget.name}</h2>
              <p>
                Total Income: ${parseFloat(budget.totalIncome || 0).toFixed(2)}
              </p>
              <p>
                Total Expenses: $
                {parseFloat(budget.totalExpenses || 0).toFixed(2)}
              </p>
              <p>
                Remaining: $
                {parseFloat(budget.remainingBalance || 0).toFixed(2)}
              </p>
              <p
                className={`status ${budget.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                Status: {budget.status}
              </p>
              <div className="button-container">
                <Link to={`/budget/${budget.id}`}>
                  <button className="view-button">View Details</button>
                </Link>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(budget.id)} // Fixed: Pass function, not call it directly
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 BudgetApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BudgetList;
