import { useContext } from "react";
import UserContext from "../context/ContextProvider";
import "./Questions.css";

import { Link } from "react-router-dom";

const Question2 = () => {
  const context = useContext(UserContext);
  const questionTwo = (dispatch, answer) => {
    dispatch({
      type: "QUESTIONTWO_ANSWERED",
      payload: answer,
    });
  };
  return (
    <>
      <button className="question-button">
        Tell us about your environment
      </button>
      <div className="option-container">
        <Link to="/Question3">
          <button
            onClick={() => {
              questionTwo(context.questionDispatch, "28");
            }}
            className="answer-button"
          >
            I am at home 🏡
          </button>
        </Link>

        <Link to="/Question3">
          <button className="answer-button">I’m outside 🏕</button>
        </Link>

        <Link to="/Question3">
          <button className="answer-button">Friend’s place 🏘</button>
        </Link>

        <Link to="/Question3">
          <button className="answer-button">I’m at my workplace 🏢</button>
        </Link>

        <Link to="/Question3">
          <button className="answer-button">Other</button>
        </Link>
      </div>
    </>
  );
};

export default Question2;
