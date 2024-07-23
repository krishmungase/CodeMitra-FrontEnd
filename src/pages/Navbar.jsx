import React from "react";
import CodeMitra from "/assets/images/LogoCodeMitra.png";
import { Link, useLocation } from "react-router-dom";
import toast from 'react-hot-toast';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const location = useLocation();
  return (
    <div className="border-1 border-b">
      <div className="container mx-auto flex flex-row justify-between items-center py-4">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={CodeMitra} alt="Logo" height={32} width={200} loading="lazy" />
          </Link>
        </div>

        <nav>
          <ul className="flex gap-x-6 text-richblack-25">
            <li>
              <Link to="/" className={`${location.pathname === "/" && "text-yellow-400"}`}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={`${location.pathname === "/about" && "text-yellow-400"}`}>About</Link>
            </li>
            <li>
              <Link to="/contact" className={`${location.pathname === "/contact" && "text-yellow-400"}`}>Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Button Group  */}
        <div className="flex items-center gap-x-4 text-richblack-100">
          {!isLoggedIn && (
            <Link to="/login">
              <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Log in</button>
            </Link>
          )}

          {!isLoggedIn && (
            <Link to="/signup">
              <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Sign up</button>
            </Link>
          )}

          {isLoggedIn && (
            <Link to="/">
              <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700" onClick={() => {
                setIsLoggedIn(false)
                toast.success("Logged out");
              }}>Log out</button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/dashboard">
              <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Dashboard</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
