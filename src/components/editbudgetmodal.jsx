import React, { useState } from "react";
import "../styles/editbudgetmodal.css";

const EditBudget = ({ budget, onSave, onCancel }) => {
  const [editedBudget, setEditedBudget] = useState({
    name: budget.name,
    description: budget.description,
    budgetItems: budget.budgetItems.map((item) => ({
      ...item,
      amount: item.amount, // Only editing amounts
    })),
  });

  const handleFieldChange = (field, value) => {
    setEditedBudget({ ...editedBudget, [field]: value });
  };

  const handleItemChange = (index, value) => {
    const updatedItems = [...editedBudget.budgetItems];
    updatedItems[index].amount = parseFloat(value); // Ensure it's a number
    setEditedBudget({ ...editedBudget, budgetItems: updatedItems });
  };

  const handleSave = () => {
    onSave(editedBudget); // Pass updated budget back to parent
  };

  return (
    <div className="edit-budget-container">
      <h1>Edit Budget</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* Edit Name */}
        <div className="form-section">
          <label>
            Budget Name:
            <input
              type="text"
              value={editedBudget.name}
              onChange={(e) => handleFieldChange("name", e.target.value)}
            />
          </label>
        </div>

        {/* Edit Description */}
        <div className="form-section">
          <label>
            Budget Description:
            <textarea
              value={editedBudget.description}
              onChange={(e) => handleFieldChange("description", e.target.value)}
            ></textarea>
          </label>
        </div>

        {/* Edit Amounts Only */}
        <div className="form-section">
          <h2>Edit Budget Items</h2>
          {editedBudget.budgetItems.map((item, index) => (
            <div key={index} className="budget-item-row">
              <span>{item.name}</span> {/* Name is static */}
              <input
                type="number"
                value={item.amount}
                onChange={(e) => handleItemChange(index, e.target.value)}
                required
              />
              <span>{item.category}</span> {/* Category is static */}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="form-buttons">
          <button type="button" className="cta-button" onClick={handleSave}>
            Save Changes
          </button>
          <button type="button" className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBudget;
