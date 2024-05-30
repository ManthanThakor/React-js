import React, { useState } from 'react';
import IfStatementComponent from '../components/IfStatementComponent';
import TernaryOperatorComponent from '../components/TernaryOperatorComponent';
import LogicalAndComponent from '../components/LogicalAndComponent';
import IIFEComponent from '../components/IIFEComponent';
import SwitchCaseComponent from '../components/SwitchCaseComponent';
import RenderPropsComponent from '../components/RenderPropsComponent';
import InlineConditionalComponent from '../components/InlineConditionalComponent';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [status, setStatus] = useState('loading');

  return (
    <div>
      <h2 >If Statement Component</h2>
      <IfStatementComponent isLoggedIn={isLoggedIn} />

      <h2>Ternary Operator Component</h2>
      <TernaryOperatorComponent isLoggedIn={isLoggedIn} />

      <h2>Logical AND Component</h2>
      <LogicalAndComponent isLoggedIn={isLoggedIn} />

      <h2>IIFE Component</h2>
      <IIFEComponent isLoggedIn={isLoggedIn} />

      <h2>Switch Case Component</h2>
      <SwitchCaseComponent status={status} />

      <h2>Render Props Component</h2>
      <RenderPropsComponent isLoggedIn={isLoggedIn} />

      <h2>Inline Conditional Component</h2>
      <InlineConditionalComponent isLoggedIn={isLoggedIn} />

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      <button onClick={() => setStatus('loading')}>Set Loading</button>
      <button onClick={() => setStatus('success')}>Set Success</button>
      <button onClick={() => setStatus('error')}>Set Error</button><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
}

export default App;