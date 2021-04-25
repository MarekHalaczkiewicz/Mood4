import "./Questions.css";

import { Link } from "react-router-dom";

const Question2 = () => {
  return (
    <>
      <button className="question-button">
        Tell us about your environment
      </button>
      <div className="option-container">
        <button className="answer-button">
          <Link to="/Question3">I'm at home</Link>
        </button>
        <button className="answer-button">
          <Link to="/Question3">I'm outside</Link>
        </button>
        <button className="answer-button">
          <Link to="/Question3">Friend's place</Link>
        </button>
        <button className="answer-button">
          <Link to="/Question3">At my workspace</Link>
        </button>
        <button className="answer-button">
          <Link to="/Question3">Other</Link>
        </button>
      </div>
    </>
  );
};

export default Question2;
