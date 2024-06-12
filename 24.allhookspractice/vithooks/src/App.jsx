import { useState, useEffect } from "react";

import "./App.css";
import UseState from "./components/usestate/UseState";
import UseStateObject from "./components/usestate/UseStateObject";
import ClearUp from "./components/useeffect/ClearnUp";
import UseEffect from "./components/useeffect/UseEffect";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <hr></hr>

      <h1>UseState</h1>
      <hr></hr>
      <UseState />
      <hr></hr>
      <h1>UseStateObject</h1>
      <hr></hr>
      <UseStateObject />
      <hr></hr>
      <h1>UseEffect ClearUp</h1>
      <hr></hr>
      <ClearUp />
      <hr></hr>
      <h1>UseEffect</h1>
      <hr></hr>
      <UseEffect />
    </>
  );
}

export default App;
