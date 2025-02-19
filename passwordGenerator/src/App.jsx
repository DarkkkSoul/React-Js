import { useState } from 'react'
import './App.css'

function App() {

    const [length, setLength] = useState(6);
    const [intAllowed, setIntAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);

    function isIntChecked() {
        setIntAllowed(!intAllowed);
    }
    function isCharChecked() {
        setCharAllowed(!charAllowed);
    }

    return (
        <>
            <div className='w-full flex items-center justify-center'>
                <div className='inline-flex flex-col items-center justify-center my-20 bg-black text-yellow-500 p-20 font-bold rounded-2xl'>
                    <div className='text-2xl'>Password Generator</div>
                    <div className='my-5'>
                        <input className='bg-white h-10 w-96' />
                        <button className='bg-blue-600 h-10 w-24 text-white'>Copy</button>
                    </div>
                    <div className='flex flex-row gap-x-5 text-xl'>
                        <div>
                            <input type="range"
                                className='mr-2 cursor-pointer'
                                onChange={(e) => { setLength(e.target.value) }}
                                min={6} max={50}
                            />
                            <label >Length:{length}</label>
                        </div>
                        <div>
                            <input type="checkbox" checked={intAllowed} onClick={isIntChecked} className='size-5' />
                            <label>Numbers</label>
                        </div>
                        <div>
                            <input type="checkbox" checked={charAllowed} onClick={isCharChecked} className='size-5' />
                            <label>Characters</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
