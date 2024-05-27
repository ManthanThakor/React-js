// Read State
// We can now include our state anywhere in our component.

import { useState } from "react";

function FavoriteColorr() {
  const [color, setColor] = useState("red");

  return (
    <>
    <h1>
        read state
    </h1>
      <h1>My favoriteee colorrr is {color}!</h1>
    </>
  );
}

export default FavoriteColorr;
