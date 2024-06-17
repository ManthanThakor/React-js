import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Axiostutorial from './components/axiostutorial'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <div><h1>Axios Tutorial</h1></div>
      <Axiostutorial />
      </div>
    </>
  )
}

export default App
