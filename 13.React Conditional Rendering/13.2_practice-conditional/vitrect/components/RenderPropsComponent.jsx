import React from 'react';

function ConditionalRenderer({ condition, renderTrue, renderFalse }) {
  return condition ? renderTrue() : renderFalse();
}

function RenderPropsComponent({ isLoggedIn }) {
  return (
    <ConditionalRenderer
      condition={isLoggedIn}
      renderTrue={() => <h1>Welcome back!</h1>}
      renderFalse={() => <h1>Please sign up.</h1>}
    />
  );
}

export default RenderPropsComponent;
