import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode"; // Ensure this is imported correctly

import "../styles/challengelist.css";

const ChallengesList = () => {
  const navigate = useNavigate();
  const [globalChallenges, setGlobalChallenges] = useState([]);
  const [personalChallenges, setPersonalChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("jwtToken");

  let userId;
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      userId = decodedToken.sub; // Adjust if needed based on your JWT structure
    } catch (error) {
      console.error("Failed to decode token:", error);
    }
  }

  // Fetch challenges on component mount
  useEffect(() => {
    const fetchChallenges = async () => {
      if (!userId) {
        console.error("User ID not found. Cannot fetch challenges.");
        return;
      }
  
      try {
        const response = await axios.get(
          `http://localhost:8080/api/users/${userId}/challenges`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        // Destructure and log the data to confirm structure
        const { data: fetchedChallenges } = response;
  
        console.log("Fetched Challenges:", fetchedChallenges);
  
        // Correct filtering based on 'global' field
        setGlobalChallenges(
          fetchedChallenges.filter((challenge) => challenge.global)
        );
        setPersonalChallenges(
          fetchedChallenges.filter((challenge) => !challenge.global)
        );
      } catch (error) {
        console.error("Error fetching challenges:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchChallenges();
  }, [userId, token]);

  if (loading) return <p>Loading challenges...</p>;

  // Handle enrolling in a challenge
  const handleEnroll = async (challengeId) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/users/${userId}/challenges/${challengeId}/enroll`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      );
  
      // Show success message
      toast.success(
        response.data.message || "Enrolled in challenge successfully!"
      );
  
      // Redirect to the dashboard
      navigate("/app/dashboard");
    } catch (error) {
      toast.error("Failed to enroll in challenge.");
      console.error(error);
    }
  };

  return (
    <div className="challenges-list-container">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/dashboard">
          <button className="nav-button">Home</button>
        </Link>
        <button className="nav-button">Logout</button>
      </nav>

      <h1>Available Challenges</h1>

      {/* Personal Challenges */}
      <div className="challenge-section">
        <h2>Personal Challenges</h2>
        {personalChallenges.length > 0 ? (
          <ul className="challenge-list">
            {personalChallenges.map((challenge) => (
              <li key={challenge.id} className="challenge-item">
                <div>
                  <h3>{challenge.name}</h3>
                  <p>{challenge.description}</p>
                  <p>
                    <strong>Duration:</strong> {challenge.startDate} -{" "}
                    {challenge.endDate}
                  </p>
                  <p>
                    <strong>Points:</strong> {challenge.points}
                  </p>
                </div>
                <button
                  className="enroll-button"
                  onClick={() => handleEnroll(challenge.id)}
                  disabled={challenge.isEnrolled}
                >
                  {challenge.isEnrolled ? "Enrolled" : "Enroll"}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No personal challenges available.</p>
        )}
      </div>

      {/* Global Challenges */}
      <div className="challenge-section">
        <h2>Global Challenges</h2>
        {globalChallenges.length > 0 ? (
          <ul className="challenge-list">
            {globalChallenges.map((challenge) => (
              <li key={challenge.id} className="challenge-item">
                <div>
                  <h3>
                    {challenge.name}{" "}
                    <span className="badge global-badge">Global</span>
                  </h3>
                  <p>{challenge.description}</p>
                  <p>
                    <strong>Duration:</strong> {challenge.startDate} -{" "}
                    {challenge.endDate}
                  </p>
                  <p>
                    <strong>Points:</strong> {challenge.points}
                  </p>
                </div>
                <button
                  className="enroll-button"
                  onClick={() => handleEnroll(challenge.id)}
                  disabled={challenge.isEnrolled}
                >
                  {challenge.isEnrolled ? "Enrolled" : "Enroll"}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No global challenges available.</p>
        )}
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 BudgetApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ChallengesList;
