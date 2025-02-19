import { useState } from 'react'
import './App.css'

function App() {
    const [clr, setClr] = useState('white');

    return (
        <div className='w-full h-screen' style={{ backgroundColor: clr }} >
            <div className='btn-div font-medium flex flex-wrap justify-center fixed inset-x-72 mt-10 rounded-2xl bg-teal-600'>
                <button className='bg-red-700 text-white' onClick={() => setClr('red')}>Red</button>
                <button className='bg-green-700 text-white' onClick={() => setClr('green')}>Green</button>
                <button className='bg-blue-700 text-white' onClick={() => setClr('blue')}>Blue</button>
                <button className='bg-gray-700 text-white text-gray-50' onClick={() => setClr('gray')}>Gray</button>
                <button className='bg-yellow-500 text-white' onClick={() => setClr('yellow')}>Yellow</button>
                <button className='bg-pink-700 text-white' onClick={() => setClr('pink')}>Pink</button>
                <button className='bg-white' onClick={() => setClr('white')}>White</button>
                <button className='bg-black text-white' onClick={() => setClr('black')}>Black</button>
            </div>
        </div>
    )
}

export default App
