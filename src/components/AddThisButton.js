import React from "react";
import "./AddThisButton.css";

function addingSelection() {
  alert("Selection added");
}

const AddThisButton = () => {
  return (
    <button className="add-button" onClick={addingSelection}>
      Add This to my final selection
    </button>
  );
};

export default AddThisButton;
