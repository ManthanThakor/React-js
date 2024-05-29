// import { useState , useEffect , useRef} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   const [count2, setCount2] = useState(0)

//   const a = useRef(0);
// useEffect(() =>{
//   a.current = a.current + 1;
//   console.log(` hi how are you ${a.current} people`);
// },[count2, setCoun2(10)])
//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       <button onClick={() => setCount2((count2) => count2 + 1)}>count is {count2}ssss</button>
//     </>
//   )
// }

// export default App





import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accsess from '../components/accsesingdom'
import Tracking from '../components/trackingstatechange'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const a = useRef(0)

  useEffect(() => {
    a.current = a.current + 1

    if (count2 >= 10) {
      console.log(`Hi, how are you? ${a.current} people`)
    }
  }, [count2])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={() => setCount2((count2) => count2 + 1)}>
        count is {count2}
      </button>
      
      <hr></hr>
      <hr></hr>
     <Accsess/>
     <hr></hr>
     <hr></hr>

     <Tracking/>
    </>
  )
}

export default App
