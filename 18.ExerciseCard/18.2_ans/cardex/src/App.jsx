import React from 'react';
import './App.css'; // Ensure you have some basic styles for the container and cards
import Posts from '../components/post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Posts</h1>
      </header>
      <Posts/>
    </div>
  );
}

export default App;
