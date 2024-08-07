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
import UpdatePassword from './components/authServices/UpdatePassword'
import ResetComplete from './components/authServices/ResetComplete'
import MyProfile from './components/DashboardComponents/MyProfile'
import PurchaseHistory from './components/DashboardComponents/PurchaseHistory'
import Wishlist from './components/DashboardComponents/Wishlist'
import EnrolledCourses from './components/DashboardComponents/EnrolledCourses'
import Setting from './components/DashboardComponents/Setting'
import Instructor from './components/DashboardComponents/DashInstructor/Instructor'




const App = () => {
  const { user } = useSelector(state => state.auth)
  console.log(user)
  return (
    <div className='w-screen min-h-screen flex flex-col bg-[#000814]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute user={user} />}>
          <Route path='/dashboard' element={<Dashboard />} >
            <Route path='my-profile' element={<MyProfile />} />
            <Route path='enrolled-courses' element={<EnrolledCourses />} />
            <Route path='wishlist' element={<Wishlist />} />
            <Route path='purchase-history' element={<PurchaseHistory />} />
            <Route path='settings' element={<Setting />} />
            <Route path='instructor' element={<Instructor />} />
          </Route>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/auth/verifyemail' element={<VerifyOTP />} />
        <Route path='/auth/forgotpassword' element={<Forgot_Email />} />
        <Route path='/auth/update-password/:id' element={<UpdatePassword />} />
        <Route path='/auth/resetcomplete' element={<ResetComplete />} />
      </Routes>
    </div>
  )
}


const PrivateRoute = ({ user }) => {
  console.log("p ::", user)
  return (
    !user ? <Navigate to={'/login'} /> : <Outlet />
  )
}

export default App