import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactMemo from './react-memo/ReactMemo.jsx'
import UseMemo from './useMemo/UseMemo.jsx'
import UseCallbackDemo from './useCallback/useCallback.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="react-memo" element={<ReactMemo />} />
      <Route path="use-memo" element={<UseMemo />} />
      <Route path="use-callback" element={<UseCallbackDemo />} />

    </Routes>
  </BrowserRouter>
)
