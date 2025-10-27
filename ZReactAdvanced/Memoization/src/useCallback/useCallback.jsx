import React, { useState } from 'react'
import InputBar from './InputBar'

const allNames = ["John", "Rock", "Alice", "Kane"];
function useCallback() {
    const [names, setNames] = useState(allNames);

    const handleShuffle = () => {
        setNames(allNames.sort(() => Math.random() - 0.5));
    }

    return (
        < div >
            <div>
                <button onClick={handleShuffle}>
                    Shuffle
                </button>
                <div>
                    <InputBar />
                </div>
            </div>
            <div>
                {
                    names.map((n, i) => {
                        return <div key={i}>{n}</div>
                    })
                }
            </div>
        </div>
    )
}

export default useCallback