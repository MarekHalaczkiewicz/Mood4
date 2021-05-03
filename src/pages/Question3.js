import "./Questions.css";
import { Link } from "react-router-dom";

const Question3 = () => {
  return (
    <>
      <button className="question-button">How would you like to feel?</button>
      <div className="option-container">
        <Link to="/ResultPage">
          <button className="answer-button">Relaxed 🎧</button>
        </Link>

        <Link to="/ResultPage">
          <button className="answer-button">Party-mood for me 💃🏻🕺🏻</button>
        </Link>

        <Link to="/ResultPage">
          <button className="answer-button">Romantic vibes only 💖</button>
        </Link>

        <Link to="/ResultPage">
          <button className="answer-button">Cheered up 🤗</button>
        </Link>

        <Link to="/ResultPage">
          <button className="answer-button">Other</button>
        </Link>
      </div>
    </>
  );
};

export default Question3;
