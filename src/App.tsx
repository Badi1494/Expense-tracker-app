import React from "react";
import Header from "./Header";
import { Balance } from "./Balance";
import { IncomeExpenses } from "./incomeexpenses";
import { TransactionList } from "./transactionlist";
import { AddTransaction } from "./addtransaction";
import { GlobalProvider } from "./Context/globalstate";
import "./App.css";

// Function component without props
const App: React.FC = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App;
