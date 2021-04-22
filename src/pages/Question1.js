import "./Questions.css";
import "./Fonts.css";

const Question1 = () => {
  return (
    <div>
      <button className="question-button centering">
        Tell us about yourself. I'm..
      </button>
      <div className="option-container">
        <button>By myself</button>
        <button>With my partner</button>
        <button>With my kids</button>
        <button>With friends</button>
        <button>Other</button>
      </div>
    </div>
  );
};

export default Question1;
