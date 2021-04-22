import "./Questions.css";
import "./Fonts.css";
import { Link } from "react-router-dom";

const Question4 = () => {
  return (
    <div>
      <button className="question-button centering">
        How do you want to feel?
      </button>
      <div className="option-container">
        <button>
          <Link to="/ResultPage">Relaxed</Link>
        </button>
        <button>
          <Link to="/ResultPage">Romantic</Link>
        </button>
        <button>
          <Link to="/ResultPage">Energetic</Link>
        </button>
        <button>
          <Link to="/ResultPage">Party Mood</Link>
        </button>
        <button>
          <Link to="/ResultPage">Other</Link>
        </button>
      </div>
    </div>
  );
};

export default Question4;
