import React from 'react'
import useCurrencyInfo from '../customHooks/useCurrencyinfo'

function InputBox(props) {
    //
    let responseData = useCurrencyInfo(props.defaultCurrency);
    const currencyCode = Object.keys(responseData);


    return (
        <div className='inline-flex gap-x-7 bg-amber-300 px-4 py-6 bg-opacity-85 rounded-2xl'>
            <div>
                <div className='text-teal-900 font-bold text-xl'>{props.label}</div>
                <input className='px-2 py-1' type="text" />
            </div>
            <div>
                <div className='text-teal-900 font-bold text-xl'>Currency Type</div>
                <select className='px-3 py-1 rounded-xl text-lg'>
                    <option>{props.defaultCurrency}</option>
                    {
                        currencyCode.map((code, index) => (             //displaying currency options
                            <option value={code} key={index}>{code}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default InputBox;