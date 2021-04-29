import { createContext, useReducer } from "react";
const UserContext = createContext();
const initialState = {
  question1: "",
  question2: "",
  question3: "",
  question4: "",
};
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "QUESTIONONE_ANSWERED":
      return {
        ...state,
        question1: action.payload,
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
