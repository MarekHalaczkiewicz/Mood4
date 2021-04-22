import "./Questions.css";
import "./Fonts.css";
import { Link } from "react-router-dom";

const Question3 = () => {
  return (
    <div>
      <button className="question-button centering">
        Your plans for today?
      </button>
      <div className="option-container">
        <button>
          <Link to="/Question4">Chilling</Link>
        </button>
        <button>
          <Link to="/Question4">Party</Link>
        </button>
        <button>
          <Link to="/Question4">Dating</Link>
        </button>
        <button>
          <Link to="/Question4">Spend time with my family</Link>
        </button>
        <button>
          <Link to="/Question4">Other</Link>
        </button>
      </div>
    </div>
  );
};

export default Question3;
