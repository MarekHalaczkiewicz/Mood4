import { createContext, useReducer } from "react";
const UserContext = createContext();
const initialState = {
  question1: "",
  question2: "",
  question3: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "QUESTIONONE_ANSWERED":
      console.log(action.payload);
      return {
        ...state,
        question1: action.payload,
      };
    case "QUESTIONTWO_ANSWERED":
      console.log(action.payload);
      return {
        ...state,
        question2: action.payload,
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
