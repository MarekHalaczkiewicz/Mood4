import "./SuggestionButtons.css";

const SuggestionButtons = ({ interests, toggleActive }) => {
  return (
    <div className="suggestion-buttons">
      {interests.map((interest) => {
        return (
          <input
            type="button"
            className={interest.toggled ? "button active" : "button"}
            key={interest.id}
            value={interest.value}
            onClick={() => toggleActive(interest.id)}
          />
        );
      })}
    </div>
  );
};
export default SuggestionButtons;
