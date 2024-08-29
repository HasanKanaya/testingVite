import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function Third_Age() {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, gender } = location.state;

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleNavigate = () => {
    const dataToPass = { name: name, gender: gender, age: inputValue };
    navigate("/testingVite/four", { state: dataToPass });
  };
  return (
    <>
      <h2>Enter you Age</h2>
      <input
        autoFocus
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <button onClick={handleNavigate}>Next</button>
    </>
  );
}

export default Third_Age;
