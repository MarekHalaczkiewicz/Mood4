import React from "react";
import "./FooterSuggestions.css";

function giveMeMore() {
  alert("Adding more options");
}
function goToFinal() {
  alert("Going to Final Page");
}

const FooterSuggestions = () => {
  return (
    <div className="suggestion-footer">
      <button className="give-me-more-button" onClick={giveMeMore}>
        Give me more
      </button>
      <button className="to-final-button" onClick={goToFinal}>
        I'm done here
      </button>
    </div>
  );
};

export default FooterSuggestions;
