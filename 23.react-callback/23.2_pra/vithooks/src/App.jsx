import React, { useState, useMemo, memo } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 29_000_000,
  };
});

const MyComponent = ({ name, age }) => {
  console.log('Rendering MyComponent');
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

const areEqual = (prevProps, nextProps) => {
  // Perform custom comparison logic if needed
  return prevProps.name === nextProps.name && prevProps.age === nextProps.age;
};

const MemoizedMyComponent = memo(MyComponent, areEqual);

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(nums);

  // Use useMemo to memoize the magical number computation
  const magical = useMemo(
    () => numbers.find((item) => item.isMagical === true),
    [numbers]
  );

  const [name, setName] = useState('Alice');
  const [age, setAge] = useState(25);

  return (
    <>
      <div>
        <MemoizedMyComponent name={name} age={age} />
        <button onClick={() => setAge(age + 1)}>Increment Age</button>
      </div>

      <div>
        <span>Magical number is {magical.index}</span>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((prevCount) => {
              const newCount = prevCount + 1;
              if (newCount === 10) {
                setNumbers(
                  new Array(10_000_000).fill(0).map((_, i) => {
                    return {
                      index: i,
                      isMagical: i === 9_000_000,
                    };
                  })
                );
              }
              return newCount;
            });
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
