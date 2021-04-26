import "./Questions.css";

import { Link } from "react-router-dom";

const Question4 = () => {
  return (
    <>
      <button className="question-button">How do you want to feel?</button>
      <div className="option-container">
        <button className="answer-button">
          <Link to="/ResultPage">Relaxed</Link>
        </button>
        <button className="answer-button">
          <Link to="/ResultPage">Romantic</Link>
        </button>
        <button className="answer-button">
          <Link to="/ResultPage">Energetic</Link>
        </button>
        <button className="answer-button">
          <Link to="/ResultPage">Party Mood</Link>
        </button>
        <button className="answer-button">
          <Link to="/ResultPage">Other</Link>
        </button>
      </div>
    </>
  );
};

export default Question4;
