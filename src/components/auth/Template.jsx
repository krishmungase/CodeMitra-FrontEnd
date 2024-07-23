import React from "react";
import { FcGoogle } from "react-icons/fc";
import frame from "/assets/images/frame.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignForm";

const Template = ({ title, description1, description2, image, formType, setIsLoggedIn }) => {
  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col lg:flex-row space-y-16 py-12 px-32 justify-between text-richblack-100">
        <div className="max-w-md flex flex-col">
          <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
            {title}
          </h1>
          <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
            <span className="text-richblack-100">{description1}</span>
            <span className="text-blue-100 italic"> {description2}</span>
          </p>

          {formType === "login" ? <LoginForm setIsLoggedIn={setIsLoggedIn} /> : <SignupForm setIsLoggedIn={setIsLoggedIn} />}

          <div className="flex w-full items-center gap-x-2 my-4">
            <div className="h-[1px] bg-richblack-700 w-full"></div>
            <p className="uppercase text-richblack-700 font-medium leading-[1.375rem]">
              or
            </p>
            <div className="h-[1px] bg-richblack-700 w-full"></div>
          </div>

          <button className="flex rounded-md items-center justify-center border border-richblack-700 font-medium text-richblack-100 px-[12px] py-[8px] gap-x-2 mt-6">
            <FcGoogle />
            <p>Sign in with Google</p>
          </button>
        </div>

        <div className="relative w-11/12 max-w-[450px]">
          <img src={frame} alt="patter" width={558} height={504} loading="lazy" />
          <img
            src={image}
            alt="patter"
            width={558}
            height={504}
            loading="lazy"
            className="absolute -top-4 right-4 "
          />
        </div>
      </div>
    </div>
  );
};

export default Template;
