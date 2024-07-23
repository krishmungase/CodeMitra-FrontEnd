import React, { useState } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"
import Dashboard from './pages/Dashboard'




const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className='w-screen min-h-screen flex flex-col bg-[#000814]'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />

      </Routes>
    </div>
  )
}


const PrivateRoute = ({ isLoggedIn }) => {
  return (
    !isLoggedIn ? <Navigate to={'/login'} /> : <Outlet />
  )
}

export default App