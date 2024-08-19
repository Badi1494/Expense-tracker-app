import React, { useContext } from "react";
import { GlobalContext } from "./Context/globalstate";
// Define the type for a transaction
interface Transaction {
  amount: number;
}

// Define the type for the context value
interface GlobalContextType {
  transactions: Transaction[];
}

export const Balance: React.FC = () => {
  // Use the context
  const { transactions } = useContext(GlobalContext) as GlobalContextType;

  // Extract amounts from transactions
  const amounts = transactions.map((transaction) => transaction.amount);

  // Calculate total balance
  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};
