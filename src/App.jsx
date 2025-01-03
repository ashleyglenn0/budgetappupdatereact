import './App.css'
import LandingPage from "./pages/landingpage";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import BudgetList from "./pages/budgetlist";
import BudgetDetail from "./pages/budgetdetail";
import AddBudget from "./pages/addbudget";

import budgets from "./data/budgets";
import challenges  from "./data/challenges";
import globalChallenges from "./data/global_challenges";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const handleBudgetSubmit = (newBudget) => {
    console.log("New Budget Submitted:", newBudget);
    // Logic to save the budget via an API call or state management
  };


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              firstName="Ashley"
              globalChallengeName="Save More Month"
              upcomingPayments={["$200 Rent", "$50 Electricity"]}
              upcomingIncome="$500 Salary"
              firstLetterStatus="Sent"
              topSavingsChallenge="Emergency Fund - 80% Progress"
              challenges={[
                { name: "Savings Streak", isGlobal: false },
                { name: "Debt-Free Challenge", isGlobal: true },
              ]}
            />
          }
        />
        <Route path="/budgets" element={<BudgetList budgets={budgets}/>} />
        <Route path="/budget/:id" element={<BudgetDetail budgets={budgets}/>} />
        <Route path="/addbudget" element={<AddBudget challenges={challenges} globalChallenges={globalChallenges} onSubmit={handleBudgetSubmit} />} />
      </Routes>
    </Router>
  );
}

export default App
