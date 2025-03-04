import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const responseData = useLoaderData();

    return (
        <div className='flex flex-col gap-y-4 my-28 justify-center items-center'>
            <img src={responseData.avatar_url} className='w-56' />
            <div className='text-2xl'>{responseData.login}</div>
            <div className='text-lg'>Followers: {responseData.followers}</div>
        </div>
    )
}

export default Github;

export async function infoLoader() {
    const responseData = await fetch('https://api.github.com/users/MaheshKumarrG');
    return responseData.json();
}