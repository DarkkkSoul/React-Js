import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);
    const loginUser = () => {
        setUser({ userName, password });
    }
    return (
        <>
            <div className='w-full h-screen flex flex-col items-center gap-y-4 mt-10'>
                <input type="text" placeholder='UserName'
                    onChange={(e) => setUserName(e.target.value)}
                    className='bg-neutral-700 py-2 rounded-md pl-4 text-white font-bold text-lg'
                />
                <input type="text" placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    className='bg-neutral-700 py-2 rounded-md pl-4 text-white font-bold text-lg'
                />
                <button
                    onClick={loginUser}
                    className='font-semibold text-lg text-black bg-lime-400 p-2 rounded-lg'>Log In</button>
            </div>
        </>
    )
}

export default Login