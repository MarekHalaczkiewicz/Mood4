import { useContext } from "react";
import UserContext from "../context/ContextProvider";
import "./Questions.css";

import { Link } from "react-router-dom";

const Question1 = () => {
  const context = useContext(UserContext);
  const questionOne = (dispatch, answer) => {
    dispatch({
      type: "QUESTIONONE_ANSWERED",
      payload: answer,
    });
  };
  return (
    <>
      <button className="question-button">Tell us about yourself. I'm..</button>
      <div className="option-container">
        <button className="answer-button">
          <Link to="/Question2">By myself</Link>
        </button>
        <button
          onClick={() => {
            questionOne(context.questionDispatch, "10749");
          }}
          className="answer-button"
        >
          <Link to="/Question2">With my partner</Link>
        </button>
        <button className="answer-button">
          <Link to="/Question2">With my kids</Link>
        </button>
        <button className="answer-button">
          <Link to="/Question2">With friends</Link>
        </button>
        <button className="answer-button">
          <Link to="/Question2">Other</Link>
        </button>
      </div>
    </>
  );
};

export default Question1;
