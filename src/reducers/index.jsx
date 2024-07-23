import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../Store/Slices/authSlice"
import profileReducer from "../Store/Slices/profileSlice";
import cartReducer from "../Store/Slices/cartSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer, 
  cart: cartReducer,
})

export default rootReducer