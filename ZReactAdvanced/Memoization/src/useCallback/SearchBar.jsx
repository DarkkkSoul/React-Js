import React, { memo } from 'react'

function SearchBar({ onChange }) {
    console.log("rendering");
    return (
        <div>
            <input className='border' type="text" onChange={(e) => onChange(e.target.value)} />
        </div>
    )
}

export default memo(SearchBar)