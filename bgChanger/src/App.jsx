import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function changeClr(clr){
    document.body.style.backgroundColor=clr;
  }

  return (    
    <>
      <div className='btn-div font-bold'>
        <button className='bg-red-700' onClick={() => changeClr('red')}>Red</button>
        <button className='bg-green-700' onClick={() => changeClr('green')}>Green</button>
        <button className='bg-blue-700' onClick={() => changeClr('blue')}>Blue</button>
        <button className='bg-gray-700' onClick={() => changeClr('gray')}>Gray</button>
        <button className='bg-yellow-700' onClick={() => changeClr('yellow')}>Yellow</button>
        <button className='bg-pink-700' onClick={() => changeClr('pink')}>Pink</button>
        <button className='bg-white' onClick={() => changeClr('white')}>White</button>
        <button className='bg-black text-white' onClick={() => changeClr('black')}>Black</button>
      </div>
    </>
  )
}

export default App
