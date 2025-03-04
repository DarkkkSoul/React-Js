import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './pages/Layout.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import NoPage from './pages/NoPage.jsx'
import User from './pages/User.jsx'
import Github, { infoLoader } from './pages/Github.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='*' element={<NoPage />} />
                <Route path='users/:userId' element={<User />} />
                <Route loader={infoLoader} path='github' element={<Github />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
