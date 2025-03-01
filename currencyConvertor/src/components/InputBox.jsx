import React, { useState } from 'react'
import useCurrencyInfo from '../customHooks/useCurrencyinfo'

function InputBox(props) {

    let responseData = useCurrencyInfo(props.defaultCurrency);
    const currencyCode = Object.keys(responseData);

    return (
        <div className='inline-flex gap-x-7 bg-amber-300 px-4 py-6 bg-opacity-85 rounded-2xl'>
            <div>
                <div className='text-teal-900 font-bold text-lg'>{props.label}</div>
                <input className='px-2 py-1 rounded-md' type="text" onChange={(e) => props.setCurrencyValue(e.target.value)} value={props.defaultValue} />
            </div>
            <div>
                <div className='text-teal-900 font-bold text-lg'>Currency Type</div>
                <select
                    onChange={(e) => props.setCurrency(e.target.value)}
                    className='px-3 py-1 hover:cursor-pointer active:cursor-pointer rounded-xl text-md bg-lime-700 text-white font-medium opacity-85'
                    value={props.defaultCurrency}>
                    {
                        currencyCode.map((code, index) => (             //displaying currency options
                            <option className='text-white hover:cursor-pointer active:cursor-pointer font-medium' value={code} key={index}>{code}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default InputBox;