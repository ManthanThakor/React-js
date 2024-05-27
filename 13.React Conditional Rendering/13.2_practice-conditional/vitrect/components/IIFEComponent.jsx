import React from 'react';

function IIFEComponent({ isLoggedIn }) {
  return (
    <div>
      {(() => {
        if (isLoggedIn) {
          return <h1>Welcome back!</h1>;
        } else {
          return <h1>Please sign up.</h1>;
        }
      })()}
    </div>
  );
}

export default IIFEComponent;
