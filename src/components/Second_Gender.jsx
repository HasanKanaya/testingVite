import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function Second_Gender() {
  const navigate = useNavigate();
  const location = useLocation();
  const { name } = location.state;

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNavigate = () => {
    const dataToPass = { name: name, gender: selectedOption };
    navigate("/testingVite/three", { state: dataToPass });
  };

  return (
    <>
      <h2>Are You </h2>
      <label htmlFor="male">
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          checked={selectedOption === "male"}
          onChange={handleOptionChange}
        />
        Male 🙎‍♂️
      </label>
      <br />
      <label htmlFor="female">
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          checked={selectedOption === "female"}
          onChange={handleOptionChange}
        />
        Female 🙎‍♀️
      </label>

      <br />
      <br />
      <button onClick={handleNavigate}>Next</button>
    </>
  );
}

export default Second_Gender;
