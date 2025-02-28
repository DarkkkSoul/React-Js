import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'

function App() {

    return (
        <>
            <InputBox label='From' defaultCurrency='inr' />
            <InputBox label='To' defaultCurrency='usd' />
        </>
    )
}

export default App
