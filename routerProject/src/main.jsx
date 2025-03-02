import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './pages/Layout.jsx'
import About from './pages/About.jsx'
import Contact from './pages/contact.jsx'
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
