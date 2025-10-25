import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactMemo from './react-memo/ReactMemo.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="react-memo" element={<ReactMemo />} />
    </Routes>
  </BrowserRouter>
)
