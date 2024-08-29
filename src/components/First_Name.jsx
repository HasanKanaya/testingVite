import { useNavigate } from "react-router-dom";
import Data from "./Data";
import { useState } from "react";

function First_Name() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("Nothing");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleNavigate = () => {
    const dataToPass = { name: inputValue };
    navigate("/testingVite/two", { state: dataToPass });
  };

  return (
    <>
      <h2>Enter you Name</h2>
      <input
        autoFocus
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <button onClick={handleNavigate}>Next</button>
      {/* <button
        onClick={() => {
          console.log(inputValue);
        }}
      >
        show what is the input
      </button> */}
    </>
  );
}

export default First_Name;
