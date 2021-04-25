import "./Questions.css";

import { Link } from "react-router-dom";

const Question1 = () => {
  return (
    <div className="option-container">
      <button className="question-button">Tell us about yourself. I'm..</button>
      <button className="answer-button">
        <Link to="/Question2">By myself</Link>
      </button>
      <button className="answer-button">
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
  );
};

export default Question1;
