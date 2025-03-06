import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const { user } = useContext(UserContext);
    if (!user) {
        return (
            <div className='w-full h-screen flex flex-col items-center gap-y-4 mt-10 font-medium text-3xl'>
                Please Login
            </div>
        )
    } else {
        return (
            <div className='w-full h-screen flex flex-col items-center gap-y-4 mt-10 font-medium text-3xl'>
                <div>Username: {user.userName}</div>
                <div>Password: {user.password}</div>
            </div>
        )
    }
}

export default Profile