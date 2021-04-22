import "./Questions.css";
import "./Fonts.css";

const Question3 = () => {
  return (
    <div>
      <button className="question-button centering">
        Your plans for today?
      </button>
      <div className="option-container">
        <button>Chilling</button>
        <button>Party</button>
        <button>Dating</button>
        <button>Spend time with my family</button>
        <button>Other</button>
      </div>
    </div>
  );
};

export default Question3;
