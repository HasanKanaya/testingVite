import { useNavigate } from "react-router-dom";

function First_Name() {
  const navigate = useNavigate();
  return (
    <>
      <h2>Enter you Name</h2>
      <input autoFocus type="text" />
      <br />
      <br />
      <button onClick={() => navigate("/testingVite/two")}>Next</button>
    </>
  );
}

export default First_Name;
