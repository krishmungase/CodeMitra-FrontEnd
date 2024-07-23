import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"




const App = () => {
  return (
    <div className='w-screen min-h-screen flex flex-col bg-[#000814]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}


const PrivateRoute = () => {
  return (
    !isLoggedIn ? <Navigate to={'/login'} /> : <Outlet />
  )
}

export default App