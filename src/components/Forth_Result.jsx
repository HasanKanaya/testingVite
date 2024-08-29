import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { motion } from "framer-motion";

function Forth_Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, gender, age } = location.state;
  const [elements, setElements] = useState([]);
  const [num, setNum] = useState(0);
  const [randomXNum, setRandomXNum] = useState(0);
  const [randomYNum, setRandomYNum] = useState(0);
  Math.floor(Math.random() * 101);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setElements((prevElements) => [
        ...prevElements,
        <motion.p
          animate={{ x: randomXNum, y: randomYNum }}
          drag
          className="hasan"
          key={num}
        >
          🚗
        </motion.p>,
      ]);
      setNum(num + 1);
      setRandomXNum(Math.floor(Math.random() * 80));
      setRandomYNum(Math.floor(Math.random() * 80));
      console.log("X: ", randomXNum);
      console.log("Y: ", randomYNum);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [num]);
  return (
    <>
      <h2>Hello {name}</h2>
      <h3>Because you are {age} years old</h3>
      <div>
        {gender === "male" && <h3>Take these Cars</h3>}
        {gender === "female" && <h3>Take these Flowers</h3>}
      </div>
      <h5>You can play with them</h5>
      <div>{elements}</div>
      <br />
      <br />
      {/* <button onClick={() => navigate("/testingVite/")}>
        Go Back To Home Page
      </button> */}
    </>
  );
}

export default Forth_Result;
