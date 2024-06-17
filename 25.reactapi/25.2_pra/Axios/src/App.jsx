// App.js

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Axiostutorial from './components/axiostutorial';
import Axiospost from './components/axiospost';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Axios Tutorial</h1>
      <div className="axios-tutorial">
        <Axiostutorial />
      </div>
      <div className="axios-post">
        <Axiospost />
      </div>
    </div>
  );
}

export default App;
