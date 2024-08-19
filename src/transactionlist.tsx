import React, { useContext } from "react";
import { GlobalContext } from "./Context/globalstate";
import Transaction from "./Transaction";

// TransactionList component
export const TransactionList: React.FC = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
