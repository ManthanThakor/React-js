import { useState } from 'react'

import './App.css'
import FavoriteColor from '../components/hooks'
import FavoriteColorr from '../components/readstate'
import FavoriteColo from '../components/updatestate'
import Car from '../components/holdstate'
import Carr from '../components/singlehookobject'
import C from '../components/updatearrayandobject'

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
<br></br>
<hr></hr>
<FavoriteColorr/>
<br></br>
<hr></hr>
<FavoriteColo/>
<br></br>
<hr></hr>
<Car/>
<br></br>
<hr></hr>
<Carr/>
<br></br>
<hr></hr>
<C/>
<br></br>
<hr></hr>

    </>
  )
}

export default App
