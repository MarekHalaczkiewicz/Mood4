import "./Questions.css";

import { Link } from "react-router-dom";

const Question3 = () => {
  return (
    <div className="option-container">
      <button className="question-button">Your plans for today?</button>

      <button className="answer-button">
        <Link to="/Question4">Chilling</Link>
      </button>
      <button className="answer-button">
        <Link to="/Question4">Party</Link>
      </button>
      <button className="answer-button">
        <Link to="/Question4">Dating</Link>
      </button>
      <button className="answer-button">
        <Link to="/Question4">Spend time with my family</Link>
      </button>
      <button className="answer-button">
        <Link to="/Question4">Other</Link>
      </button>
    </div>
  );
};

export default Question3;
