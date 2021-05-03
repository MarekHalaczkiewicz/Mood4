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
      <button className="question-button">
        What are your plans for today?
      </button>
      <div className="option-container">
        <Link to="/Question2">
          <button
            onClick={() => {
              questionOne(context.questionDispatch, "28");
            }}
            className="answer-button"
          >
            Finally, some me-time 🤓
          </button>
        </Link>

        <Link to="/Question2">
          <button
            onClick={() => {
              questionOne(context.questionDispatch, "35");
            }}
            className="answer-button"
          >
            Hang out with my friends 😍
          </button>
        </Link>

        <Link to="/Question2">
          <button
            onClick={() => {
              questionOne(context.questionDispatch, "10749");
            }}
            className="answer-button"
          >
            Spend time with my partner 💞
          </button>
        </Link>

        <Link to="/Question2">
          <button
            onClick={() => {
              questionOne(context.questionDispatch, "10751");
            }}
            className="answer-button"
          >
            Family time 👨‍👩‍👧‍👦
          </button>
        </Link>

        <Link to="/Question2">
          <button className="answer-button">Other</button>
        </Link>
      </div>
    </>
  );
};

export default Question1;
