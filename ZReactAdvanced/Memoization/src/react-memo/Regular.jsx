import React, { useRef } from 'react'

function Regular({ items }) {
    const renderCount = useRef(0);
    renderCount.current++;
    return (
        <div>{items} {renderCount.current}</div>
    );
}

export default Regular