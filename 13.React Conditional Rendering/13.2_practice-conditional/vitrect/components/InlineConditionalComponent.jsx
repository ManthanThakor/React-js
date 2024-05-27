import React from 'react';

function InlineConditionalComponent({ isLoggedIn }) {
  return (
    <div>
      <h1>{isLoggedIn ? 'Welcome back!' : 'Please sign up.'}</h1>
    </div>
  );
}

export default InlineConditionalComponent;
