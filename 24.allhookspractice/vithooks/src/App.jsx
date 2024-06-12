import { useState } from "react";

import "./App.css";
import UseState from "./components/usestate/UseState";
import UseStateObject from "./components/usestate/UseStateObject";

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
    </>
  );
}

export default App;
