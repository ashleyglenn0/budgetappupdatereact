import React, { useState } from "react";
import "../styles/addbudget.css";

const AddBudget = ({ challenges, globalChallenges, onSubmit }) => {
  const [budgetName, setBudgetName] = useState("");
  const [budgetDescription, setBudgetDescription] = useState("");
  const [budgetItems, setBudgetItems] = useState([
    { name: "", amount: "", type: "income", category: "" },
    { name: "", amount: "", type: "income", category: "" },
    { name: "", amount: "", type: "income", category: "" },
    { name: "", amount: "", type: "income", category: "" },
    { name: "", amount: "", type: "income", category: "" },
  ]);
  const [selectedChallenge, setSelectedChallenge] = useState("");
  const [selectedGlobalChallenge, setSelectedGlobalChallenge] = useState("");
  const [enrollInChallenge, setEnrollInChallenge] = useState(false);
  const [enrollInGlobalChallenge, setEnrollInGlobalChallenge] = useState(false);

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...budgetItems];
    updatedItems[index][field] = value;
    setBudgetItems(updatedItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBudget = {
      name: budgetName,
      description: budgetDescription,
      dateCreated: new Date().toISOString(),
      budgetItems,
      selectedChallenge: enrollInChallenge ? selectedChallenge : null,
      selectedGlobalChallenge: enrollInGlobalChallenge
        ? selectedGlobalChallenge
        : null,
    };
    onSubmit(newBudget);
  };

  return (
    <div className="content-container">
      <nav className="navbar">
        <button className="nav-button">Home</button>
        <button className="nav-button">Logout</button>
      </nav>

      <h1 className="page-header">Add Budget</h1>
      <form onSubmit={handleSubmit} className="form-container">
        {/* Budget Information */}
        <div className="form-section">
          <label>
            Budget Name:
            <input
              type="text"
              value={budgetName}
              onChange={(e) => setBudgetName(e.target.value)}
              required
            />
          </label>
          <label>
            Budget Description:
            <textarea
              value={budgetDescription}
              onChange={(e) => setBudgetDescription(e.target.value)}
              required
            ></textarea>
          </label>
        </div>

        {/* Budget Items */}
        <div className="form-section">
          <h2>Budget Items</h2>
          {budgetItems.map((item, index) => (
            <div key={index} className="budget-item-row">
              <input
                type="text"
                placeholder="Name"
                value={item.name}
                onChange={(e) =>
                  handleItemChange(index, "name", e.target.value)
                }
                required
              />
              <input
                type="number"
                placeholder="Amount"
                value={item.amount}
                onChange={(e) =>
                  handleItemChange(index, "amount", e.target.value)
                }
                required
              />
              <select
                value={item.type}
                onChange={(e) =>
                  handleItemChange(index, "type", e.target.value)
                }
                required
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
              <select
                value={item.category}
                onChange={(e) =>
                  handleItemChange(index, "category", e.target.value)
                }
                required
              >
                <option value="">Select Category</option>
                <option value="Work">Work</option>
                <option value="Housing">Housing</option>
                <option value="Food">Food</option>
                <option value="Recreation">Recreation</option>
              </select>
            </div>
          ))}
        </div>

        {/* Challenge Enrollment */}
        <div className="form-section">
          <h2>Challenge Enrollment</h2>

          {/* Personal Challenges */}
          <label>
            Select a Challenge:
            <select
              value={selectedChallenge}
              onChange={(e) => setSelectedChallenge(e.target.value)}
            >
              <option value="">None</option>
              {challenges.map((challenge) => (
                <option key={challenge.id} value={challenge.id}>
                  {challenge.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            <input
              type="checkbox"
              checked={enrollInChallenge}
              onChange={(e) => setEnrollInChallenge(e.target.checked)}
            />
            Enroll in Challenge
          </label>

          {/* Global Challenges */}
          <label>
            Select a Global Challenge:
            <select
              value={selectedGlobalChallenge}
              onChange={(e) => setSelectedGlobalChallenge(e.target.value)}
            >
              <option value="">None</option>
              {globalChallenges.map((challenge) => (
                <option key={challenge.id} value={challenge.id}>
                  {challenge.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            <input
              type="checkbox"
              checked={enrollInGlobalChallenge}
              onChange={(e) => setEnrollInGlobalChallenge(e.target.checked)}
            />
            Enroll in Global Challenge
          </label>
        </div>

        {/* Submit Buttons */}
        <div className="form-buttons">
          <button type="submit" className="cta-button">
            Save Budget
          </button>
          <button type="button" className="cancel-button">
            Cancel
          </button>
        </div>
      </form>

      <footer>
        <p>© 2025 BudgetApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AddBudget;
