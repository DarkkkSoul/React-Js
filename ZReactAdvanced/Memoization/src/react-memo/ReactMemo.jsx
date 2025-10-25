import React, { useState } from 'react'
import Memo from './Memo';
import Regular from './Regular';

// const staticItems = ['A', 'B', 'C']; // Props that DO NOT change

function ParentComponent() {
    const [count, setCount] = useState(0); // State that changes

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Click to Increment
            </button>
            <div>
                COUNT: {count}
            </div>
            <br /><br />
            <div>This component WILL re-render when count changes</div>
            <Regular />
            <div>This component will NOT re-render when count changes</div>
            <Memo />

        </div>
    );
}
export default ParentComponent