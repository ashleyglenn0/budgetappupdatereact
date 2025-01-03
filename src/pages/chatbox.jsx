import React, { useState } from "react";
import "../styles/chatbox.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [
      ...messages,
      { sender: "user", text: input },
    ];

    setMessages(newMessages);
    setInput("");

    // Simulate a response
    setTimeout(() => {
      const botResponse = {
        sender: "bot",
        text: "This is a simulated response. Please connect to an API.",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <button className="nav-button">Home</button>
        <button className="nav-button">Logout</button>
      </nav>

      <div className="chatbot-container">
        <h1>Ask Your Credit/Budget Questions</h1>
        <div className="chat-history">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-bubble ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleSend} className="send-button">Send</button>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 BudgetApp. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Chatbot;
