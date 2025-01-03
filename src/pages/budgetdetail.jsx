import React from "react";
import { useParams } from "react-router-dom";
import "../styles/budgetdetail.css";

const BudgetDetail = ({ budgets }) => {
  const { id } = useParams(); // Extract the ID from the URL
  const budget = budgets.find((b) => b.id === parseInt(id)); // Find the budget by ID

  if (!budget) {
    return <p>Budget not found!</p>; // Handle case where budget is not found
  }

  return (
    <div className="budget-detail-container">
      {/* Navbar */}
      <nav className="navbar">
        <button className="nav-button">Home</button>
        <button className="nav-button">Logout</button>
      </nav>

      {/* Header */}
      <div className="budget-header">
        <h1>{budget.name}</h1>
        <p>{budget.description}</p>
        <p>Date Created: {new Date(budget.dateCreated).toLocaleDateString()}</p>
      </div>

      {/* Overview Section */}
      <div className="budget-overview">
        <div className="overview-card">
          <p>Total Income</p>
          <h3>${budget.totalIncome.toFixed(2)}</h3>
        </div>
        <div className="overview-card">
          <p>Total Expenses</p>
          <h3>${budget.totalExpenses.toFixed(2)}</h3>
        </div>
        <div className="overview-card">
          <p>Remaining Balance</p>
          <h3>${budget.remainingBalance.toFixed(2)}</h3>
        </div>
        <div
          className={`overview-card status ${budget.status
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          <p>Status</p>
          <h3>{budget.status}</h3>
        </div>
      </div>

      {/* Income and Expense Section */}
      <div className="income-expense-section">
        <div className="income-list">
          <h2>Income</h2>
          <ul>
            {budget.budgetItems
              .filter((item) => item.type === "income")
              .map((item, index) => (
                <li key={index}>
                  <p>
                    {item.name}: ${item.amount.toFixed(2)}
                  </p>
                  <p>Category: {item.category}</p>
                </li>
              ))}
          </ul>
        </div>
        <div className="expense-list">
          <h2>Expenses</h2>
          <ul>
            {budget.budgetItems
              .filter((item) => item.type === "expense")
              .map((item, index) => (
                <li key={index}>
                  <p>
                    {item.name}: ${item.amount.toFixed(2)}
                  </p>
                  <p>Category: {item.category}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* Actions Section */}
      <div className="actions">
        <button className="action-button">Add Income</button>
        <button className="action-button">Add Expense</button>
        <button className="action-button">Edit Budget</button>
        <button className="action-button">Back</button>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 BudgetApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BudgetDetail;
