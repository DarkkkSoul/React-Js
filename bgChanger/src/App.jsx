import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='btn-div'>
        <button className='bg-red-700'>Red</button>
        <button className='bg-green-700'>Green</button>
        <button className='bg-blue-700'>Blue</button>
        <button className='bg-gray-700'>Gray</button>
        <button className='bg-yellow-700'>Yellow</button>
        <button className='bg-pink-700'>Pink</button>
        <button className='bg-white'>White</button>
        <button className='bg-black'>Black</button>
      </div>
    </>
  )
}

export default App
