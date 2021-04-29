import React from "react";
import "./TakeAgainButton.css";

function takeAgain() {
  alert("Back to the start");
}

const TakeAgainButton = () => {
  return (
    <div>
      <button className="take-again" onClick={takeAgain}>
        Start Again
      </button>
    </div>
  );
};

export default TakeAgainButton;
