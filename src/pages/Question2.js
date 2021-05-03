import { Link } from "react-router-dom";
import "./Questions.css";

const Question2 = () => {
  return (
    <>
      <button className="question-button">
        Tell us about your environment
      </button>
      <div className="option-container">
        <Link to="/Question3">
          <button className="answer-button">I am at home 🏡</button>
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
