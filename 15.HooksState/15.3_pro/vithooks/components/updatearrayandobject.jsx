// Updating Objects and Arrays in State
// When state is updated, the entire state gets overwritten.

// What if we only want to update the color of our car?

// If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.

// We can use the JavaScript spread operator to help us.

// Example:
// Use the JavaScript spread operator to update only the color of the car:

import { useState } from "react";

function C() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
          <h1>Updating Objects and Arrays in State</h1>

      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}

export default C;

