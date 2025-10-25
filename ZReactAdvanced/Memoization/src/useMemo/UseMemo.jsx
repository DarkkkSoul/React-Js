import React, { useState } from 'react'
import ExpensiveCounter from './ExpensiveCounter'

function UseMemo() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <ExpensiveCounter />
            <button onClick={() => setCount(count + 1)}>
                Click
            </button>
            <div>Count: {count}</div>
        </div>
    )
}

export default UseMemo