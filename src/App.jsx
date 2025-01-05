import React, { useState } from "react";
import "./App.css";

import PrivateRoute from "./components/PrivateRoute";

import LandingPage from "./pages/landingpage";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import BudgetList from "./pages/budgetlist";
import BudgetDetail from "./pages/budgetdetail";
import AddBudget from "./pages/addbudget";
import ChallengeProgress from "./pages/challengeprogress";
import ChallengeList from "./pages/challengelist";
import CreditLetterList from "./pages/creditletterlist";
import AddLetter from "./pages/addletter";
import Chatbox from "./pages/chatbox";
import FileUpload from "./pages/fileupload";

import budgets from "./data/budgets";
import challenges from "./data/challenges";
import globalChallenges from "./data/global_challenges";
import enrolledChallenges from "./data/enrolledchallenges";
import creditLetters from "./data/letters";
import creditRepairTemplates from "./data/templates";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [sampleBudgets, setSampleBudgets] = useState(budgets);

  const handleBudgetSubmit = (newBudget) => {
    console.log("New Budget Submitted:", newBudget);
    // Logic to save the budget via an API call or state management
  };

  const handleUpdateBudget = (updatedBudget) => {
    setBudgets((prevBudgets) =>
      prevBudgets.map((budget) =>
        budget.id === updatedBudget.id ? updatedBudget : budget
      )
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
         {/* Private Routes */}
         <Route path="/app" element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="challenge-list" element={<ChallengeList />} />
        </Route>
        <Route path="/budgets" element={<BudgetList budgets={budgets} />} />
        <Route
          path="/budget/:id"
          element={
            <BudgetDetail
              budgets={sampleBudgets}
              onUpdateBudget={handleUpdateBudget}
            />
          }
        />
        <Route
          path="/addbudget"
          element={
            <AddBudget
              challenges={challenges}
              globalChallenges={globalChallenges}
              onSubmit={handleBudgetSubmit}
            />
          }
        />
        <Route
          path="/challenge-progress"
          element={
            <ChallengeProgress enrolledChallenges={enrolledChallenges} />
          }
        />
        {/* <Route
          path="/challenge-list"
          element={
            <ChallengeList
              challenges={challenges}
              globalChallenges={globalChallenges}
            />
          }
        /> */}
        <Route
          path="/letters-list"
          element={<CreditLetterList creditLetters={creditLetters} />}
        />
        <Route
          path="/addletter"
          element={<AddLetter templates={creditRepairTemplates} />}
        />
        <Route path="/chatbox" element={<Chatbox />} />
        <Route path="/file-upload" element={<FileUpload />} />
      </Routes>
    </Router>
  );
}

export default App;
