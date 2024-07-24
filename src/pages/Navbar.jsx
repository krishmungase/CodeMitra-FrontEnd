import React, { useEffect, useState } from "react";
import CodeMitra from "/assets/images/LogoCodeMitra.png";
import { Link, useLocation } from "react-router-dom";
import toast from 'react-hot-toast';
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropdown from "../components/Profile/ProfileDropdown";
import { apiConnector } from "../services/apiconnector";
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"


const Navbar = () => {

  const { user } = useSelector((state) => state.auth);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const [subLinks, setSubLinks] = useState([]);

  const fetchSublinks = async () => {
    try {
      const result = await apiConnector().fetchCategories({ method: "GET", url: "/catogory/getcatagories" })
      console.log("Printing Sublinks : ", result);
      setSubLinks(result.data.Catagories);
    } catch (error) {
      toast.error("Catagory Fetching Error")
      console.log("could not fetch catagory list")
    }
  }

  useEffect(() => {
    fetchSublinks();
  }, [])

  if (!subLinks) return <h1>Loading...</h1>

  console.log(subLinks)

  return (

    <div className="border-1 border-b" >
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
              {


                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <div className="flex items-center justify-center space-x-1">
                      <span>Catalog</span>
                      <ChevronDown />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    {subLinks.map((catagory, index) => (
                      <Link to={`/catalog/${catagory.name.toLowerCase()}`}>
                        <DropdownMenuItem key={index} className="font-semibold">
                          {catagory.name}
                        </DropdownMenuItem>
                      </Link>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              }
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
          {
            user && user?.accountType != "instructor" && (
              <Link to="/dashboard/cart" className="relative  bg-richblack-800 px-4 py-2.5 rounded-[10px] border border-richblack-700 hover:bg-richblack-700 transition-colors duration-300">
                <AiOutlineShoppingCart className="text-2xl text-white" />
                {
                  totalItems > 0 && (
                    <div className="absolute top-[-4px] right-[-9px] font-bold text-richblack-900 bg-white rounded-full w-5 h-5 flex items-center justify-center">
                      {totalItems}
                    </div>
                  )
                }
              </Link>
            )
          }

          {
            !user?.token && (
              <Link to="/login">
                <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Log in</button>
              </Link>
            )
          }

          {
            !user?.token && (
              <Link to="/signup">
                <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Sign up</button>
              </Link>
            )
          }

          {
            user?.token && (
              <ProfileDropdown />
            )
          }

        </div>
      </div>
    </div >
  );
};

export default Navbar;
