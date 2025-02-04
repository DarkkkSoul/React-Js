import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let count = 0 ;

  function addValue(){
    count ++;
    console.log('added ',count);
    
  }
  function removeValue(){
    count --;
    console.log('removed',count);
    
  }

  return (
    <>
      <h1>Counter Project (Hooks) Counter:{count}</h1>
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

      <p>Final count:{count}</p>
    </>
  )
}

export default App
