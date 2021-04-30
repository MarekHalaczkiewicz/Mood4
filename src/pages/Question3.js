import "./Questions.css";
import { Link } from "react-router-dom";

const Question3 = () => {
  return (
    <>
      <button className="question-button">How would you like to feel?</button>
      <div className="option-container">
        <button className="answer-button">
          <Link to="/ResultPage">Relaxed 🎧</Link>
        </button>
        <button className="answer-button">
          <Link to="/ResultPage">Party-mood for me 💃🏻🕺🏻</Link>
        </button>
        <button className="answer-button">
          <Link to="/ResultPage">Romantic vibes only 💖</Link>
        </button>
        <button className="answer-button">
          <Link to="/ResultPage">Cheered up 🤗</Link>
        </button>
        <button className="answer-button">
          <Link to="/ResultPage">Other</Link>
        </button>
      </div>
    </>
  );
};

export default Question3;
