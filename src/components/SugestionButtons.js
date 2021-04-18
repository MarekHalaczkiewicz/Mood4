import "./SuggestionButtons.css";

const SuggestionButtons = (props) => {
  const { interests, toggleActive } = props;

  return (
    <div className="suggestion-buttons">
      {interests.map((interest, index) => {
        return (
          <input
            type="button"
            className={interest.toggled ? "button active" : "button"}
            key={index}
            value={interest.value}
            onClick={() => toggleActive(interest.value)}
          />
        );
      })}
    </div>
  );
};
export default SuggestionButtons;
