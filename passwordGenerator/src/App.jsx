import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {

    const [length, setLength] = useState(8);
    const [intAllowed, setIntAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState('');

    //Generating password
    const passwordGenerator = useCallback(() => {
        let pass = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        if (intAllowed) str += '0123456789';
        if (charAllowed) str += '!@#$%^&*-_+=[]{}~`';

        for (let i = 1; i < length; i++) {
            pass += str[Math.floor(Math.random() * str.length + 1)];
        }

        setPassword(pass);

    }, [intAllowed, charAllowed, length, setPassword]);

    //Calling the function
    useEffect(() => {
        passwordGenerator();
    }, [intAllowed, charAllowed, length, passwordGenerator])


    function isIntChecked() {
        setIntAllowed(!intAllowed);
    }
    function isCharChecked() {
        setCharAllowed(!charAllowed);
    }

    const passwordRef = useRef(null);
    const copyToClipboard = useCallback(() => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
    }, [password])

    return (
        <>
            <div className='w-full flex items-center justify-center'>
                <div className='inline-flex flex-col items-center justify-center my-20 bg-black text-yellow-500 p-20 font-bold rounded-2xl'>
                    <div className='text-2xl'>Password Generator</div>
                    <div className='my-5'>
                        <input className='bg-white h-10 w-96 px-3' value={password} ref={passwordRef} />
                        <button className='bg-blue-600 h-10 w-24 text-white' onClick={copyToClipboard}>Copy</button>
                    </div>
                    <div className='flex flex-row gap-x-5 text-xl'>
                        <div>
                            <input type="range"
                                className='mr-2 cursor-pointer'
                                onChange={(e) => { setLength(e.target.value) }}
                                min={8} max={50}
                            />
                            <label >Length:{length}</label>
                        </div>
                        <div>
                            <input type="checkbox" checked={intAllowed} onChange={isIntChecked} className='size-5 cursor-pointer' />
                            <label>Numbers</label>
                        </div>
                        <div>
                            <input type="checkbox" checked={charAllowed} onChange={isCharChecked} className='size-5 cursor-pointer' />
                            <label>Characters</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
