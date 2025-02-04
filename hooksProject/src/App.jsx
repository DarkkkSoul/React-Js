import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count,setCount] = useState(0);

  // let count = 0 ;

  function addValue(){
    setCount(count = count + 1);
    console.log('added ',count);    
  }
  function removeValue(){
    // count --;
    setCount(count = count - 1);
    console.log('removed',count);    
  }

  return (
    <>
      <h1>Counter Project (Hooks) Counter: {count}</h1>
      <h2>Count : {count}</h2>

      <button  
          onClick={addValue}
      >
        Increase  
      </button>

      <br /><br />

      <button
          onClick={removeValue}
      >
        Decrease
      </button>

      <b><p>Final count : {count}</p></b>
    </>
  )
}

export default App
