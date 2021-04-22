import "./Questions.css";
import "./Fonts.css";

const Question4 = () => {
  return (
    <div>
      <button className="question-button centering">
        How do you want to feel?
      </button>
      <div className="option-container">
        <button>Relaxed</button>
        <button>Romantic</button>
        <button>Energetic</button>
        <button>Party Mood</button>
        <button>Other</button>
      </div>
    </div>
  );
};

export default Question4;
