import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/addletter.css";

const AddLetter = ({ templates, onSubmit }) => {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [recipient, setRecipient] = useState("");
  const [address, setAddress] = useState("");
  const [includeAddress, setIncludeAddress] = useState(false);
  const [letterContent, setLetterContent] = useState("");

  const handleTemplateChange = (templateId) => {
    const selected = templates.find((template) => template.id === parseInt(templateId));
    if (selected) {
      setLetterContent(selected.content);
    } else {
      setLetterContent("");
    }
    setSelectedTemplate(templateId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLetter = {
      type: templates.find((template) => template.id === parseInt(selectedTemplate))?.type || "",
      recipient,
      address: includeAddress ? address : null,
      dateSent: new Date().toISOString(),
      content: letterContent,
      status: "Sent",
      expectedResponseDate: new Date(new Date().getTime() + 45 * 24 * 60 * 60 * 1000).toISOString(),
    };
    console.log("Letter Created:", newLetter);
    onSubmit(newLetter);
  };

  return (
    <div className="content-container">
      {/* Navbar */}
      <nav className="navbar">
          <Link to="/dashboard">
            <button className="nav-button">Home</button>
          </Link>
          <button className="nav-button">Logout</button>
        </nav>

      {/* Form Header */}
      <h1 className="page-header">Add Letter</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="form-container">
        {/* Template Selection */}
        <div className="form-section">
          <label>
            Select a Template:
            <select
              value={selectedTemplate}
              onChange={(e) => handleTemplateChange(e.target.value)}
              required
            >
              <option value="">Choose a Template</option>
              {templates.map((template) => (
                <option key={template.id} value={template.id}>
                  {template.type}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Recipient Input */}
        <div className="form-section">
          <label>
            Recipient:
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              required
            />
          </label>
        </div>

        {/* Address Input */}
        <div className="form-section">
          <label>
            <input
              type="checkbox"
              checked={includeAddress}
              onChange={(e) => setIncludeAddress(e.target.checked)}
            />
            Include Address
          </label>
          {includeAddress && (
            <input
              type="text"
              placeholder="Recipient Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          )}
        </div>

        {/* Letter Content */}
        <div className="form-section">
          <label>
            Letter Content:
            <textarea
              value={letterContent}
              onChange={(e) => setLetterContent(e.target.value)}
              rows="10"
              required
            ></textarea>
          </label>
        </div>

        {/* Submit Buttons */}
        <div className="form-buttons">
          <button type="submit" className="cta-button">
            Save Letter
          </button>
          <button type="button" className="cancel-button">
            Cancel
          </button>
        </div>
      </form>

      {/* Footer */}
      <footer>
        <p>© 2025 BudgetApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AddLetter;
