import React, { useState } from "react";
import "./important.css";

const Important = (props) => {
  const [isImportant, setIsImportant] = useState(false);

  const toggleImportant = () => {
    let newVal = !isImportant;
    setIsImportant(newVal);
    props.onChange(newVal);
  };

  return (
    <div className="imp-container">
      <i
        id="iImportant"
        onClick={toggleImportant}
        className={isImportant ? "fa-star fas" : "fa-star far"}
      ></i>
    </div>
  );
};

export default Important;
