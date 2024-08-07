import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { apiConnector } from "../../services/apiconnector";
import Loading from "../core/common/Loading";
import { useDispatch } from "react-redux";
import { setUser } from "../../Store/Slices/authSlice";

const SignupForm = () => {
  const [accountType, setAccountType] = useState("student");

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const handleClick = (buttonName) => {
    setShowPassword({
      ...showPassword,
      [buttonName]: !showPassword[buttonName],
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const finalData = {
      ...formData,
      accountType
    }

    setIsLoading(true);
    try {
      const response = await apiConnector().sendotp({ method: "POST", bodyData: finalData, url: "/auth/sendotp" })
      console.log("Data to store", finalData);
      dispatch(setUser(finalData));
      toast.success("otp sent successfully");
      navigate('/auth/verifyemail')
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error creating", error);
    }
    finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="mt-8 max-w-max">
      {/* Button Group */}
      <div className="flex bg-richblack-800 max-w-[53%] rounded-full p-1 gap-x-1">
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

      {/* Form */}
      <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
        <div className="flex gap-x-4">
          <label className="w-full">
            <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
              required
              type="text"
              name="firstName"
              id="firstName"
              onChange={changeHandler}
              value={formData.firstName}
              placeholder="Enter first name"
            />
          </label>

          <label className="w-full">
            <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
              required
              type="text"
              name="lastName"
              id="lastName"
              onChange={changeHandler}
              value={formData.lastName}
              placeholder="Enter last name"
            />
          </label>
        </div>

        <label className="w-full">
          <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
            Email Address<sup className="text-pink-200">*</sup>
          </p>
          <input
            className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
            required
            type="email"
            name="email"
            id="email"
            value={formData.email}
            placeholder="Enter email address"
            onChange={changeHandler}
          />
        </label>

        <div className="flex gap-x-4">
          <label className="w-full relative">
            <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
              required
              type={showPassword.password ? "text" : "password"}
              name="password"
              id="password"
              onChange={changeHandler}
              value={formData.password}
              placeholder="Enter Password"
            />

            <span
              className="absolute top-[38px] right-3 z-10 cursor-pointer"
              onClick={() => handleClick("password")}
            >
              {showPassword.password ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          </label>

          <label className="w-full relative">
            <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
              required
              type={showPassword.confirmPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              onChange={changeHandler}
              value={formData.confirmPassword}
              placeholder="Confirm Password"
            />

            <span
              className="absolute top-[38px] right-1.5 z-10 cursor-pointer"
              onClick={() => handleClick("confirmPassword")}
            >
              {showPassword.confirmPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          </label>
        </div>

        <button className="bg-yellow-50 text-richblack-900 font-semibold px-[12px] rounded-[8px] py-[8px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
