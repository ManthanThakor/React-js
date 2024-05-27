import React from 'react';

function SwitchCaseComponent({ status }) {
  switch (status) {
    case 'loading':
      return <h1>Loading...</h1>;
    case 'success':
      return <h1>Data loaded successfully!</h1>;
    case 'error':
      return <h1>Error loading data.</h1>;
    default:
      return <h1>Unknown status.</h1>;
  }
}

export default SwitchCaseComponent;
