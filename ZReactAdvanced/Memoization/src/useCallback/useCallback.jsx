import React, { useState, useCallback } from 'react'
import SearchBar from './SearchBar'

const allNames = ["John", "Rock", "Alice", "Kane"];

function UseCallbackDemo() {
    const [names, setNames] = useState(() => [...allNames]);

    const handleShuffle = () => {
        setNames(prev => [...prev].sort(() => Math.random() - 0.5));
    }

    const handleQuery = useCallback(
        (text) => {
            const q = text.toLowerCase();
            const filteredNames = allNames.filter((name) => (
                name.toLowerCase().includes(q)
            ));
            setNames(filteredNames);
        },
        []
    );

    return (
        <div>
            <div>
                <button onClick={handleShuffle}>
                    Shuffle
                </button>
                <div>
                    <SearchBar onChange={handleQuery} />
                </div>
            </div>
            <div>
                {
                    names.map((n) => {
                        return <div key={n}>{n}</div>
                    })
                }
            </div>
        </div>
    )
}

export default UseCallbackDemo