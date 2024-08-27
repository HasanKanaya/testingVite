import { useNavigate } from "react-router-dom";

function Third_Age() {
  const navigate = useNavigate();
  return (
    <>
      <h2>Enter you Age</h2>
      <input autoFocus type="text" />
      <br />
      <br />
      <button onClick={() => navigate("/testingVite/four")}>Next</button>
    </>
  );
}

export default Third_Age;
