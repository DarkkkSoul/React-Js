import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StateUse from './useState.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <StateUse />
    </StrictMode>
)
