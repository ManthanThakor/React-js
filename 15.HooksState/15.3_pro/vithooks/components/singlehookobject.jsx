// Or, we can just use one state and include an object instead!

// Example:
// Create a single Hook that holds an object:

import { useState } from "react";

function Carr() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  return (
    <>
    
      <h1>single Hook that holds an object</h1>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}

export default Carr;