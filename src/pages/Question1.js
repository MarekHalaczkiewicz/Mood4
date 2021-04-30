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
        <button className="answer-button">
          <Link to="/Question2">Finally, some me-time 🤓</Link>
        </button>
        <button
          onClick={() => {
            questionOne(context.questionDispatch, "10749");
          }}
          className="answer-button"
        >
          <Link to="/Question2">Hang out with my friends 😍</Link>
        </button>
        <button className="answer-button">
          <Link to="/Question2">Spend time with my partner 💞</Link>
        </button>
        <button className="answer-button">
          <Link to="/Question2">Family time 👨‍👩‍👧‍👦</Link>
        </button>
        <button className="answer-button">
          <Link to="/Question2">Other</Link>
        </button>
      </div>
    </>
  );
};

export default Question1;
