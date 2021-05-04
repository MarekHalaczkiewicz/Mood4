import { createContext, useReducer } from "react";
const UserContext = createContext();
const initialState = {
  question1: "",
  question3: { energy: 0.2, dance: 0.2, genre: "pop" },
};
const reducer = (state, action) => {
  switch (action.type) {
    case "QUESTIONONE_ANSWERED":
      return {
        ...state,
        question1: action.payload,
      };
    case "QUESTIONTHREE_ANSWERED":
      return {
        ...state,
        question3: action.payload,
      };
    default:
      return {
        state,
      };
  }
};
export const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider
      value={{ questionState: state, questionDispatch: dispatch }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContext;
