import "./Questions.css";
import "./Fonts.css";
import { Link } from "react-router-dom";

const Question1 = () => {
  return (
    <div>
      <button className="question-button centering">
        Tell us about yourself. I'm..
      </button>
      <div className="option-container">
        <button>
          <Link to="/Question2">By myself</Link>
        </button>
        <button>
          <Link to="/Question2">With my partner</Link>
        </button>
        <button>
          <Link to="/Question2">With my kids</Link>
        </button>
        <button>
          <Link to="/Question2">With friends</Link>
        </button>
        <button>
          <Link to="/Question2">Other</Link>
        </button>
      </div>
    </div>
  );
};

export default Question1;
