import { useState } from 'react'
import './App.css'

function App() {

    let [count, setCount] = useState(0);

    function addValue() {
        if (count < 20) setCount(count = count + 1);
        else alert('Limit Exceeded!');
    }
    function removeValue() {
        if (count > 0) setCount(count = count - 1);
        else alert('Limit Exceeded!');
    }

    return (
        <>
            <h1>Counter Project (Hooks) Counter: {count}</h1>
            <h2>Count : {count}</h2>

            <button
                onClick={addValue}
            >
                Increase
            </button>

            <br /><br />

            <button
                onClick={removeValue}
            >
                Decrease
            </button>

            <b><p>Final count : {count}</p></b>
        </>
    )
}

export default App
