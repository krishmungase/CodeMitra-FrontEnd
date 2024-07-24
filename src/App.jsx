import React, { useState } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup"
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Contact from './pages/Contact'
import { useSelector } from 'react-redux'
import VerifyOTP from "./components/authServices/Verifyotp-email"
import Forgot_Email from './components/authServices/Forgot_Email'




const App = () => {
  const { user } = useSelector(state => state.auth)
  console.log(user)
  return (
    <div className='w-screen min-h-screen flex flex-col bg-[#000814]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute isLoggedIn={user} />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/auth/verifyemail' element={<VerifyOTP />} />
        <Route path='/auth/forgotpassword' element={<Forgot_Email />} />
      </Routes>
    </div>
  )
}


const PrivateRoute = ({ isLoggedIn }) => {
  console.log("p ::", isLoggedIn)
  return (
    !isLoggedIn ? <Navigate to={'/login'} /> : <Outlet />
  )
}

export default App