import React, { useRef } from 'react'

const Memo = function Memo({ items }) {
    const renderCount = useRef(0);
    renderCount.current++;
    return (
        <div>{items} {renderCount.current}</div>
    );
};

export default React.memo(Memo);