import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { apiConnector } from "@/services/apiconnector";
import toast from "react-hot-toast";
import Loading from "./Loading";
import countryPhoneCodes from "@/Data/CountryCode";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactFrom = async (data) => {
    console.log("data : ", data);
    setIsLoading(true);
    try {
      // const response = await apiConnector().contactus({
      //   method: "POST",
      //   bodyData: data,
      //   url: "/contact/contactus",
      // });
      const response = { status: "ok" }
      console.log("response is here : ", response);
      toast.success("Message sent successfully");
    } catch (error) {
      console.log("error", error);
      toast.error(response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstName: "",
        LastName: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form
      form
      onSubmit={handleSubmit(submitContactFrom)}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      <div className="flex gap-x-4">
        <label htmlFor="firstName" className="w-full">
          <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
            First Name
          </p>
          <input
            className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter first name"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <p className="text-red-500 text-[0.875rem]">
              {errors.firstName.message}
            </p>
          )}
        </label>

        <label className="w-full">
          <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
            Last Name
          </p>
          <input
            className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter last name"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-red-500 text-[0.875rem]">
              {errors.lastName.message}
            </p>
          )}
        </label>
      </div>
      <div>
        <label className="w-full">
          <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
            Email Address
          </p>
          <input
            className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-red-500 text-[0.875rem]">
              {errors.email.message}
            </p>
          )}
        </label>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phonenumber">Phone Number</label>
        <div className="flex flex-row gap-3 max-w-full">
          <div className="w-1/4">
            <select
              name="dropdown"
              id="dropdown"
              className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
              {...register("countrycode", { required: true })}
            >
              {countryPhoneCodes.map((element, idx) => {
                return (
                  <option key={idx} value={element.code}>
                    {element.code}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="w-3/4">
            <input
              type="text"
              name="phonenumber"
              id="phonenumber"
              placeholder="12345 67890"
              className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
              {...register("phoneNo", {
                required: "Please enter Phone Number",
                maxLength: {
                  value: 10,
                  message: "Invalid Phone Number",
                },
                minLength: {
                  value: 8,
                  message: "Invalid Phone Number",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Invalid Phone Number",
                },
              })}
            />
          </div>
        </div>
        {errors.phoneNo && <span>{errors.phoneNo.message}</span>}
      </div>
      <div>
        <label className="w-full">
          <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
            Message<sup className="text-red-200">*</sup>
          </p>
          <Textarea
            name="message"
            id="message"
            placeholder="Type your message here."
            className="bg-richblack-800 text-[16px] rounded-[6px]"
            {...register("message", { required: true })}
          />
        </label>
        {errors.message && (
          <p className="text-red-500 text-[0.875rem]">
            {errors.message.message}
          </p>
        )}
      </div>
      <button className="bg-[#FFD60A] text-richblack-900 font-semibold px-[12px] rounded-[8px] py-[8px] mt-6">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
