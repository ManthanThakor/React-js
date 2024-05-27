import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FavoriteColor from '../components/hooks'

function App() {
  const [count, setCount] = useState(10)
  const [counttwo, setCountt] = useState(10)

  return (
    <>
           <div>The count is {count}</div>
           <div>The count is {counttwo}</div>
      <button onClick={()=>{setCount(count + 1)}}>Update count</button>
      <button onClick={()=>{setCountt(counttwo ** 2)}}>Update count two</button>

<FavoriteColor/>
    </>
  )
}

export default App
