// rafce + enter (shortcut key)

import React from "react";
// import "./navbar.css"

const Click = () => {
  const shoot = () => {
    alert("Great Shot!");
  };

  // Passing Arguments
  // To pass an argument to an event handler, use an arrow function.

  const shoot2 = (a) => {
    alert(a);
  };

  //   React Event Object
  //   Event handlers have access to the React event that triggered the function.
  //   In our example the event is the "click" event.
  //   Example:
  //   Arrow Function: Sending the event object manually:

  const shoot3 = (a, b) => {
    alert(b.type);
    alert(a);

    /*
        'b' represents the React event that triggered the function,
        in this case the 'click' event
        */
  };

  return (
    <>
      <button onClick={shoot}>Take the Shot!</button>
      <br></br>
      <br></br>
      <button onClick={() => shoot2("Goal!")}>Take the shot two!</button>
      <br></br>
      <br></br>
      <button onClick={(event) => shoot3("Goal!", event)}>
        Take the shot three!
      </button>
    </>
  );
};

export default Click;
