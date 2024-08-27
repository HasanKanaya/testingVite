import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import First_Name from "./components/First_Name";
import Second_Gender from "./components/Second_Gender";
import Third_Age from "./components/Third_Age";
import Forth_Result from "./components/Forth_Result";

function App() {
  return (
    <>
      <h1>Installing packages</h1>
      <First_Name />
      <Second_Gender />
      <Third_Age />
      <Forth_Result />
    </>
  );
}

export default App;
