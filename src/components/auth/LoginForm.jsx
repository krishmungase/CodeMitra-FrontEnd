import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { apiConnector } from "@/services/apiconnector";
import { setUser } from "../../Store/Slices/authSlice";
import toast from "react-hot-toast";
import Loading from "../core/common/Loading"



const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const [accountType, setAccountType] = useState("student");
  console.log(accountType);
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });



  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  async function submitHandler(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await apiConnector().loginUser({ method: "POST", bodyData: formData, url: "/auth/login" })
      dispatch(setUser(response.data.user))
      toast.success("Login successful")
      navigate('/dashboard/my-profile')
    } catch (error) {
      toast.error(error.response.data.message)
      console.log("Error", error)
    }
    finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="mt-8">
      <div className="flex bg-richblack-800 max-w-max rounded-full p-1 gap-x-1">
        <button
          className={`${accountType === "student"
            ?
            "bg-richblack-900 text-richblack-5"
            : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}>
          Student
        </button>

        <button
          className={`${accountType === "instructor"
            ?
            "bg-richblack-900 text-richblack-5"
            : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}>
          Instructor
        </button>
      </div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-6"
      >
        <label htmlFor="" className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address
            <sup className="text-pink-200">*</sup>
          </p>

          <input
            type="email"
            required
            value={formData.email}
            placeholder="Enter your email address"
            onChange={changeHandler}
            name="email"
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
          />
        </label>

        <label htmlFor="" className="w-full relative">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Password
            <sup className="text-pink-200">*</sup>
          </p>

          <input
            type={showPassword ? "text" : "password"}
            required
            value={formData.password}
            placeholder="Enter Password"
            onChange={changeHandler}
            name="password"
            className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
          />

          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[38px] cursor-pointer "
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>

          <Link to="/auth/forgotpassword">
            <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
              Forgot Password
            </p>
          </Link>
        </label>

        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-semibold text-richblack-900">
          Sign in
        </button>
      </form>
    </div>

  );
};

export default LoginForm;
