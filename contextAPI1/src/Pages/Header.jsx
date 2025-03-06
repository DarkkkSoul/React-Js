import React from 'react'
import { NavLink } from 'react-router'

function Header() {
    return (
        <>
            <div className='bg-slate-700 text-white py-5 px-5 mx-20 mt-7 rounded-xl'>
                <ul className='flex gap-x-5'>
                    <li>
                        <NavLink to='/'
                            className={
                                ({ isActive }) =>
                                    `${isActive ? 'text-white' : 'text-amber-500'}
                            font-bold text-lg
                        `
                            }>
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/profile' className={
                            ({ isActive }) =>
                                `${isActive ? 'text-white' : 'text-amber-500'}
                        font-bold text-lg
                    `
                        }>
                            Profile
                        </NavLink>
                    </li>
                </ul>

            </div>
        </>
    )
}

export default Header