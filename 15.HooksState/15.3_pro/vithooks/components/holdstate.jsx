
// What Can State Hold
// The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

// We could create multiple state Hooks to track individual values.
import { useState } from "react";

function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <>
    
      <h1>State Hold</h1>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}

export default Car;