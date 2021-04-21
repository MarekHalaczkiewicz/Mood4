import React from "react";
import "./Carousel.css";

function addingSelection() {
  alert("Selection added");
}

const AddThisButton = () => {
  return (
    <div>
      <button className="add-button" onClick={addingSelection}>
        Add This to my final selection
      </button>
    </div>
  );
};

export default AddThisButton;
