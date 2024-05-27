
// Update State
// To update our state, we use our state updater function.

// We should never directly update state. Ex: color = "red" is not allowed.

import { useState } from "react";

function FavoriteColo() {
  const [color, setColor] = useState("red");

  return (
    <>
    <h1>
       UPDATE state
    </h1>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}

export default FavoriteColo;