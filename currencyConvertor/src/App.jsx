import { useEffect, useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './customHooks/useCurrencyinfo'


function App() {
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('INR');

    const [inputCurrency, setInputCurrency] = useState('0.000');
    const [outputCurrency, setOutputCurrency] = useState(0);

    let responseData = useCurrencyInfo(fromCurrency);

    useEffect(() => {
        setOutputCurrency((inputCurrency * responseData[toCurrency]).toFixed(3));
    }, [inputCurrency, toCurrency, responseData, fromCurrency])


    return (
        <>
            <div className="w-full h-screen inline-flex justify-center items-center bg-no-repeat bg-cover bg-[url('https://images.pexels.com/photos/30254965/pexels-photo-30254965/free-photo-of-rustic-wooden-barn-amidst-lush-greenery.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
                <div className='flex flex-col gap-y-4 bg-emerald-500 p-5 rounded-xl bg-opacity-80'>
                    <InputBox label='From' defaultCurrency={fromCurrency} setCurrency={setFromCurrency} defaultValue={inputCurrency} setCurrencyValue={setInputCurrency} />
                    <InputBox label='To' defaultCurrency={toCurrency} setCurrency={setToCurrency} defaultValue={outputCurrency} setCurrencyValue={setOutputCurrency} />
                </div>
            </div>
        </>
    )
}

export default App
