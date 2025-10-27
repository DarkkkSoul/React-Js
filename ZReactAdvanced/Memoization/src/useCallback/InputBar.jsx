import React from 'react'

function InputBar() {
    const handleChange = () => {
    }
    return (
        <div>
            <input className='border' type="text" onChange={(e) => handleChange(e)} />
        </div>
    )
}

export default InputBar