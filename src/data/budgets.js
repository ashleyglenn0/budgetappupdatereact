const budgets = [
    {
      "id": 1,
      "name": "January 2025 Budget",
      "description": "Monthly household budget.",
      "dateCreated": "2025-01-01T00:00:00",
      "totalIncome": 5000,
      "totalExpenses": 3200,
      "remainingBalance": 1800,
      "status": "On Track",
      "budgetItems": [
        { "name": "Salary", "amount": 4000, "type": "income", "category": "Work" },
        { "name": "Freelance", "amount": 1000, "type": "income", "category": "Work" },
        { "name": "Rent", "amount": 1200, "type": "expense", "category": "Housing" },
        { "name": "Utilities", "amount": 200, "type": "expense", "category": "Housing" },
        { "name": "Groceries", "amount": 300, "type": "expense", "category": "Food" },
        { "name": "Entertainment", "amount": 500, "type": "expense", "category": "Recreation" }
      ]
    },
    {
      "id": 2,
      "name": "Vacation Fund",
      "description": "Budget for the upcoming family vacation.",
      "dateCreated": "2025-01-05T00:00:00",
      "totalIncome": 3000,
      "totalExpenses": 3500,
      "remainingBalance": -500,
      "status": "Overspent",
      "budgetItems": [
        { "name": "Savings Contribution", "amount": 3000, "type": "income", "category": "Savings" },
        { "name": "Plane Tickets", "amount": 1500, "type": "expense", "category": "Travel" },
        { "name": "Hotel Booking", "amount": 2000, "type": "expense", "category": "Travel" }
      ]
    }
  ]
  

export default budgets;
