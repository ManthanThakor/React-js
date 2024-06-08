import { useState } from 'react'

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
