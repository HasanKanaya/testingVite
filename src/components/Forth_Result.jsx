import { useNavigate } from "react-router-dom";

function Forth_Result() {
  const navigate = useNavigate();
  return (
    <>
      <h2>Result</h2>
      <br />
      <br />
      <button onClick={() => navigate("/testingVite/")}>
        Go Back To Home Page
      </button>
    </>
  );
}

export default Forth_Result;
