import React, { createContext, useReducer, ReactNode } from "react";
import AppReducer from "./appreducer";
import { TransactionType } from "./type";

interface AppState {
  transactions: TransactionType[];
}

// Define action types
interface Action {
  type: string;
  payload?: any;
}

// Initial state
const initialState: AppState = {
  transactions: [],
};

// Create context
export const GlobalContext = createContext<{
  transactions: TransactionType[];
  deleteTransaction: (id: number) => void;
  addTransaction: (transaction: TransactionType) => void;
}>(initialState as any);

// Provider component props type
interface GlobalProviderProps {
  children: ReactNode;
}

// Provider component
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id: number) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction: TransactionType) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
