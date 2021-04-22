import React from "react";
import "./AddThisButton.css";

function addingSelection() {
  alert("Selection added");
}

const AddThisButton = () => {
  return (
    <div>
      <button className="add-button centering" onClick={addingSelection}>
        Add This to my final selection
      </button>
    </div>
  );
};

export default AddThisButton;
