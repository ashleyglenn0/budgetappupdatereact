const creditLetters = [
    {
        id: 1,
        type: "Dispute Letter",
        recipient: "Equifax",
        dateSent: "2025-01-01",
        content: "Requesting removal of inaccurate account information.",
        status: "Pending",
        expectedResponseDate: "2025-02-15",
      },
      {
        id: 2,
        type: "Goodwill Adjustment Letter",
        recipient: "Experian",
        dateSent: "2025-01-10",
        content: "Requesting adjustment for a late payment.",
        status: "Responded",
        expectedResponseDate: "2025-02-24",
      },
      {
        id: 3,
        type: "Debt Validation Letter",
        recipient: "TransUnion",
        dateSent: "2024-12-15",
        content: "Requesting validation of an account debt.",
        status: "Awaiting Next Steps",
        expectedResponseDate: "2025-01-29",
      },
      {
        id: 4,
        type: "Dispute Letter",
        recipient: "Experian",
        dateSent: "2025-01-05",
        content: "Requesting correction of personal information.",
        status: "Resolved",
        expectedResponseDate: "2025-02-19",
      }
  ];

  export default creditLetters;