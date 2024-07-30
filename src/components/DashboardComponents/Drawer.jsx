import React from 'react'
// import { User, BookCopy, Bookmark, ShoppingCart, GraduationCap, Settings, LogOut } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../core/common/Loading';
import DashboardData from "../../Data/DashboardData"
import * as Icons from "lucide-react";
import { Settings, LogOut } from "lucide-react"
import { setUser } from '@/Store/Slices/authSlice';
import { Link, useLocation } from 'react-router-dom';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog"

const Drawer = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const matchRoute = (route) => {
    return matchRoute({ path: route }, location.pathname);
  };


  const { loading: profileLoading } = useSelector((state) => state.profile);
  const { user, loading: authLoading } = useSelector((state) => state.auth);

  const LogoutHandler = () => {
    dispatch(setUser(null));
    toast.success("User logged out")
    navigate('/login')
  }



  if (authLoading || profileLoading) {
    return <Loading />
  }

  console.log('User:', user); // Debugging output
  console.log('DashboardData:', DashboardData); // Debugging output


  return (
    <div className="fixed mt-20 inset-y-[50px] left-4 hidden w-[240px] bg-[#161D29] flex-col items-start border rounded-[10px] sm:flex py-16 z-10">
      <div className="flex space-y-6 items-start px-8 justify-center flex-col">
        {
          DashboardData.map((link) => {
            const Icon = Icons[link.icon];
            if (!link.type || user?.accountType === link.type) {
              console.log("Location path : ", location.pathname)
              return (
                <Link key={link.id} to={link.path} className={`flex flex-row items-center justify-center space-x-3 ${location.pathname.includes(link.path) && "text-yellow-400 underline"}`}>
                  <Icon className={`size-5  ${location.pathname.includes(link.path) && "text-yellow-400"}`} />
                  <span className="text-[15px] font-semibold">{link.name}</span>
                </Link>
              );
            }
            return null;
          })
        }
      </div>
      <div className='border w-[85%] border-b ml-4 my-5'></div>
      <div className="flex space-y-6 items-start px-8 justify-center flex-col">
        <Link to={'settings'} className={`flex flex-row items-center justify-center space-x-3 ${location.pathname.includes("settings") && "text-yellow-400 underline"}`}>
          <Settings className="size-5" />
          <span className="text-[15px] font-semibold">Setting</span>
        </Link>
        <AlertDialog >
          <AlertDialogTrigger asChild>
            <button to={'/'} className="flex flex-row items-center justify-center space-x-3">
              <LogOut className="size-5 " />
              <span className="text-[15px] font-semibold">Logout</span>
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent className="rounded-xl">
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>You will be logged out of your account</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="bg-white rounded-[8px] text-black font-bold">Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={LogoutHandler} className="bg-yellow-400 rounded-[8px] font-bold hover:bg-yellow-300">Log out</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div >
  )
}

export default Drawer