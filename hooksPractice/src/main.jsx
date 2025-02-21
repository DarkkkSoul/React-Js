import { createRoot } from 'react-dom/client'
import StateUse from './useState.jsx'
import CallbackUse from './useCallback.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <StateUse />
        <CallbackUse />
    </>
)
