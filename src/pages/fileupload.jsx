import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/fileupload.css";

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (e) => {
    const newFiles = Array.from(e.target.files).filter(
      (file) => file.size <= 15 * 1024 * 1024 && file.type === "application/pdf"
    );

    setFiles([...files, ...newFiles]);
  };

  const handleDelete = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <nav className="navbar">
          <Link to="/dashboard">
            <button className="nav-button">Home</button>
          </Link>
          <button className="nav-button">Logout</button>
        </nav>

      <div className="file-upload-container">
        <h1>Upload Documents</h1>
        <input
          type="file"
          accept="application/pdf"
          multiple
          onChange={handleFileUpload}
        />
        <ul className="file-list">
          {files.map((file, index) => (
            <li key={index}>
              {file.name}
              <button
                className="delete-button"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      <footer>
        <p>© 2025 BudgetApp. All rights reserved.</p>
      </footer>
    </>
  );
};

export default FileUpload;
