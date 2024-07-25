import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { useSelector } from 'react-redux'


const ProfileDropdown = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <Avatar>
      <AvatarImage src={user.image} />
      <AvatarFallback>{user.firstName[0]}</AvatarFallback>
    </Avatar>
  )
}

export default ProfileDropdown 