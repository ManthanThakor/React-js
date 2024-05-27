import React from 'react';

function LogicalAndComponent({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn && <h1>Welcome back!</h1>}
    </div>
  );
}

export default LogicalAndComponent;
