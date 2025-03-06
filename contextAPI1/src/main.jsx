import { createRoot } from 'react-dom/client'
import Layout from './Pages/Layout'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import UserContextProvider from './context/UserContextProvider'

createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Login />} />
                    <Route path='profile' element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </UserContextProvider>
)
