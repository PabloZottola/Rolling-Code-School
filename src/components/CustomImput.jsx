import React, { useState } from "react";
import "../style/custominput.css";

function CustomInput(props) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        className={inputValue ? "custom-input active" : "custom-input"}
        value={inputValue}
        onChange={handleChange}
      />
      <label>{props.name}</label>
    </>
  );
}

export default CustomInput;
