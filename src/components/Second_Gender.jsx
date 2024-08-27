import { useNavigate } from "react-router-dom";

function Second_Gender() {
  const navigate = useNavigate();
  return (
    <>
      <h2>Are You</h2>
      <input autoFocus type="text" />
      <br />
      <br />
      <button onClick={() => navigate("/testingVite/three")}>Next</button>
    </>
  );
}

export default Second_Gender;
