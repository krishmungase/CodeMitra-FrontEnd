import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { useDispatch, useSelector } from 'react-redux'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import { Link, useNavigate } from "react-router-dom"
import { LayoutDashboard, LogOut } from 'lucide-react';
import { setUser } from '../../Store/Slices/authSlice'
import toast from 'react-hot-toast'




const ProfileDropdown = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LogoutHandler = () => {
    dispatch(setUser(null));
    toast.success("User logged out")
    navigate('/login')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user.image} />
          <AvatarFallback>{user.firstName[0]}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link to={'/dashboard'} className='flex items-center justify-center space-x-2'>
            <LayoutDashboard className='size-5' /> <span className='text-[16px]'>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button onClick={LogoutHandler} to={'/'} className='flex items-center justify-center space-x-2'>
            <LogOut className='size-5' /> <span className='text-[16px]'>Log out</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileDropdown 