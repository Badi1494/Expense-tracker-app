import React, { useContext } from "react";
import { GlobalContext } from "./Context/globalstate";
import type { TransactionType } from "./Context/type";

// Define the type for a transaction

// Define the type for props
interface TransactionProps {
  transaction: TransactionType;
}

// Transaction component
const Transaction: React.FC<TransactionProps> = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  // Determine the sign based on the transaction amount
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
