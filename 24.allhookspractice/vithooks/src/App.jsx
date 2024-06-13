import { useState, useEffect } from "react";

import "./App.css";
import UseState from "./components/usestate/UseState";
import UseStateObject from "./components/usestate/UseStateObject";
import ClearUp from "./components/useeffect/ClearnUp";
import UseEffect from "./components/useeffect/UseEffect";
import Parent from "./Parent";
import ReducerHook from "./components/usereducer/ReducerHook";
import RefHook1 from "./components/useref/RefHook1";
import RefHook from "./components/useref/RefHook";

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
      <hr></hr>
      <h1> useContext</h1>
      <hr></hr>
      <Parent />
      <hr></hr>
      <h1> ReducerHook</h1>
      <hr></hr>
      <ReducerHook />
      <hr></hr>
      <h1> RefHook1</h1>
      <hr></hr>
      <RefHook1 />
      <RefHook />
    </>
  );
}

export default App;
