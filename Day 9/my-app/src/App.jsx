import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[count, setCount] = useState(0);

  function onClickHandler(){
    setCount(count+1)

  }
   return (
    <>
    <div>
      <h1>Myth is back</h1>
    </div>

    <div id='box' onClick={onClickHandler}>
        <button className='button'> <b>Counter {count} </b> </button>
    </div>
     
    </>
  )
}

export default App
