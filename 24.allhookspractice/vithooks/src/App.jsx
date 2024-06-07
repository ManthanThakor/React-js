import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState from './components/usestate/UseState'
import UseStateObject from './components/usestate/UseStateObject'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseState/>
      <UseStateObject/>
    </>
  )
}

export default App
