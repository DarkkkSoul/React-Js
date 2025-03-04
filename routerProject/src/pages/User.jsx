import React from 'react'
import { useParams } from 'react-router'

function User() {
    const { userId } = useParams();
    return (
        <div className='text-orange-700 font-bold text-4xl text-center my-40'>
            User: <span className='text-black font-normal'>{userId}</span>
        </div>
    )
}

export default User