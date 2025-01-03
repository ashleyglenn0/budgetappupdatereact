import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import AddBudgetItemModal from "../components/addbudgetitemmodal";
import EditBudget from "../components/editbudgetmodal";

import "../styles/budgetdetail.css";

const BudgetDetail = ({ budgets, onUpdateBudget }) => {
  const { id } = useParams(); // Extract the ID from the URL
  const budget = budgets.find((b) => b.id === parseInt(id)); // Find the budget by ID
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // "income" or "expense"
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  if (!budget) {
    return <p>Budget not found!</p>; // Handle case where budget is not found
  }

  // Open the modal for adding income/expense
  const handleOpenModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  // Close the add item modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  function handleOpenEditModal() {
    console.log("Edit Budget button clicked");
    setIsEditModalOpen(true);
    console.log("Is Edit Modal Open: ", isEditModalOpen)
  }

  // Close the edit budget modal
  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  // Handle adding a new item
  const handleAddItem = (newItem) => {
    const updatedBudget = {
      ...budget,
      budgetItems: [...budget.budgetItems, newItem],
    };
    onUpdateBudget(updatedBudget); // Pass updated budget to parent
    handleCloseModal();
  };

  // Handle saving changes to the budget
  const handleEditSave = (updatedBudget) => {
    onUpdateBudget(updatedBudget); // Pass updated budget to parent
    handleCloseEditModal();
  };

  return (
    <>
      {/* Add Budget Item Modal */}
      {isModalOpen && (
        <AddBudgetItemModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleAddItem}
          type={modalType}
        />
      )}

      {/* Edit Budget Modal */}
      {isEditModalOpen && (
        <EditBudget
          budget={budget}
          onSave={handleEditSave}
          onCancel={handleCloseEditModal}
        />
      )}

      <div className="budget-detail-container">
        {/* Navbar */}
        <nav className="navbar">
          <Link to="/dashboard">
            <button className="nav-button">Home</button>
          </Link>
          <button className="nav-button">Logout</button>
        </nav>

        {/* Header */}
        <div className="budget-header">
          <h1>{budget.name}</h1>
          <p>{budget.description}</p>
          <p>
            Date Created: {new Date(budget.dateCreated).toLocaleDateString()}
          </p>
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
          <button
            className="action-button"
            onClick={() => handleOpenModal("income")}
          >
            Add Income
          </button>
          <button
            className="action-button"
            onClick={() => handleOpenModal("expense")}
          >
            Add Expense
          </button>
          <button
            onClick={handleOpenEditModal}
            className="action-button"
          >
            Edit Budget
          </button>
          <Link to="/budgets">
            <button className="action-button">Back</button>
          </Link>
        </div>

        {/* Footer */}
        <footer>
          <p>© 2025 BudgetApp. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default BudgetDetail;
