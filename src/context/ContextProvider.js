import { createContext, useReducer } from "react";
const UserContext = createContext();
const initialState = {
  question1: "",
  question3: { energy: "", dance: "", genre: "" },
};
const reducer = (state, action) => {
  switch (action.type) {
    case "QUESTIONONE_ANSWERED":
      console.log(action.payload);
      return {
        ...state,
        question1: action.payload,
      };
    case "QUESTIONTHREE_ANSWERED":
      console.log(action.payload);
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
