import React, { useContext } from "react";
import { GlobalContext } from "./Context/globalstate";
// Define the type for a transaction
interface Transaction {
  id: number;
  text: string;
  amount: number;
}

// Define the type for the context value
interface GlobalContextType {
  transactions: Transaction[];
}

// IncomeExpenses component
export const IncomeExpenses: React.FC = () => {
  // Use the context
  const { transactions } = useContext(GlobalContext);

  // Extract amounts from transactions
  const amounts = transactions.map((transaction) => transaction.amount);

  // Calculate income
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  // Calculate expense
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => acc + item, 0) * -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${expense}</p>
      </div>
    </div>
  );
};
