import "./Questions.css";
import "./Fonts.css";

const Question2 = () => {
  return (
    <div>
      <button className="question-button centering">
        Tell us about your environment
      </button>
      <div className="option-container">
        <button>I'm at home</button>
        <button>I'm outside</button>
        <button>Friend's place</button>
        <button>At my workspace</button>
        <button>Other</button>
      </div>
    </div>
  );
};

export default Question2;
