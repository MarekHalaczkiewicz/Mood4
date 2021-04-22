import "./Questions.css";
import "./Fonts.css";
import { Link } from "react-router-dom";

const Question2 = () => {
  return (
    <div>
      <button className="question-button centering">
        Tell us about your environment
      </button>
      <div className="option-container">
        <button>
          <Link to="/Question3">I'm at home</Link>
        </button>
        <button>
          <Link to="/Question3">I'm outside</Link>
        </button>
        <button>
          <Link to="/Question3">Friend's place</Link>
        </button>
        <button>
          <Link to="/Question3">At my workspace</Link>
        </button>
        <button>
          <Link to="/Question3">Other</Link>
        </button>
      </div>
    </div>
  );
};

export default Question2;
