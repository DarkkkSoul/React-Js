import { useState } from 'react'
import './App.css'
import Card from './custom-components/card'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Card name="joe" job='google' />
            <Card name='don' job='microsoft' />
            {/* <h1 className='font-extrabold text-yellow-300'>Tailwind</h1> */}
        </>
    )
}

export default App
