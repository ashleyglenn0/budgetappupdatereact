import React from "react";
import "../styles/addbudgetitemmodal.css"; // Ensure this points to your CSS file

const AddBudgetItemModal = ({ isOpen, onClose, onSave }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Budget Item</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSave(); // Call save handler
            onClose(); // Close modal after saving
          }}
        >
          <label>
            Name:
            <input type="text" required />
          </label>
          <label>
            Amount:
            <input type="number" required />
          </label>
          <label>
            Type:
            <select required>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </label>
          <label>
            Category:
            <select required>
              <option value="Work">Work</option>
              <option value="Housing">Housing</option>
              <option value="Food">Food</option>
              <option value="Recreation">Recreation</option>
            </select>
          </label>
          <button type="submit" className="cta-button">
            Save
          </button>
        </form>
        <button onClick={onClose} className="close-button">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddBudgetItemModal;
