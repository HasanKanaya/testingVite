import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import First_Name from "./components/First_Name";
import Second_Gender from "./components/Second_Gender";
import Third_Age from "./components/Third_Age";
import Forth_Result from "./components/Forth_Result";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="testingVite/" element={<First_Name />}>
          {" "}
        </Route>
        <Route path="testingVite/two" element={<Second_Gender />}>
          {" "}
        </Route>
        <Route path="testingVite/three" element={<Third_Age />}>
          {" "}
        </Route>
        <Route path="testingVite/four" element={<Forth_Result />}>
          {" "}
        </Route>
      </Routes>
    </>
  );
}

export default App;
