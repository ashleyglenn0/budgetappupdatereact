import React from "react";
import { Link } from "react-router-dom";
import "../styles/budgetlist.css"; // Adjust the path to match your project structure

const BudgetList = ({ budgets }) => {
  return (
    <div className="budget-list-page">
      {/* Navbar */}
      <nav className="navbar">
        <button className="nav-button">Home</button>
        <button className="nav-button">Log Out</button>
      </nav>

      {/* Budget Cards Grid */}
      <div className="budget-list-container">
        <h1>Your Budgets</h1>
        <div className="budget-grid">
          {budgets.map((budget) => (
            <div className={`budget-card ${budget.status.toLowerCase()}`} key={budget.id}>
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
              <p className={`status ${budget.status.toLowerCase().replace(" ", "-")}`}>
                Status: {budget.status}
              </p>
              <Link to={`/budget/${budget.id}`}><button className="view-button">View Details</button></Link>
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
