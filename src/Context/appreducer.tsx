import { TransactionType } from "./type";

interface AppState {
  transactions: TransactionType[];
}

interface Action {
  type: string;
  payload?: any; // The payload type will depend on the action type
}

// Define specific action types
const DELETE_TRANSACTION = "DELETE_TRANSACTION";
const ADD_TRANSACTION = "ADD_TRANSACTION";

// TypeScript reducer function
const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

export default reducer;
