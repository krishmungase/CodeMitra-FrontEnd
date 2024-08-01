import React, { useState, useEffect } from "react";
import { Label } from "../ui/label";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "../../components/ui/button";
import { Calendar } from "../../components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useSelector } from "react-redux";
import { apiConnector } from "@/services/apiconnector";
import toast from "react-hot-toast";

const SetSection2 = () => {
  const { user } = useSelector((state) => state.auth);
  const [date, setDate] = useState(user?.addtionalDetails?.dateOfBirth || null);
  const [selectedGender, setSelectedGender] = useState(
    user?.addtionalDetails?.gender || ""
  );
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    dateOfBirth: user?.addtionalDetails?.dateOfBirth || "",
    gender: user?.addtionalDetails?.gender || "",
    contactNumber: user?.addtionalDetails?.contactNumber || "",
    about: user?.addtionalDetails?.about || "",
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      dateOfBirth: date,
      gender: selectedGender,
    }));
  }, [date, selectedGender]);

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  console.log("FormHandler: ", formData);

  const submitHandler = async (event) => {
    event.preventDefault();
    const finalData = {
      ...formData,
      
    };
    console.log("Final data: " + finalData);

    setIsLoading(true);
    try {
      const response = await apiConnector().setProfileData({
        method: "PUT",
        bodyData: finalData,
        token: user.token,
        url: "/profile/updateprofile",
      });
      console.log("Response: ", response);
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error creating", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-[69rem] container mx-auto py-8">
      <form
        onSubmit={submitHandler}
        className="flex items-start px-16 py-8 justify-between flex-col bg-[#161D29] rounded-[10px] min-h-36"
      >
        <div className="flex items-center justify-between w-full ">
          <p className="text-lg font-bold">Profile information</p>
        </div>
        <div className="flex items-center w-full flex-col justify-center space-y-6 py-3">
          <div className="w-full flex items-center justify-between space-x-4">
            <div className="flex-1">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-[#F1F2FF] mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                placeholder={user.firstName || "Enter your first name"}
                className="w-full px-4 py-2 border bg-[#2C333F] rounded-[7px]"
                onChange={changeHandler}
                value={formData.firstName}
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-[#F1F2FF] mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                placeholder={user.lastName || "Enter your last name"}
                className="w-full px-4 py-2 border bg-[#2C333F] rounded-[7px] "
                onChange={changeHandler}
                value={formData.lastName}
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-between space-x-4">
            <div className="flex-1">
              <label
                htmlFor="date-of-birth"
                className="block text-sm font-medium text-[#F1F2FF] mb-1"
              >
                Date of Birth
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-[#2C333F] text-white rounded-[7px]",
                      !date && "text-gray-400"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                      format(new Date(date), "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(newDate) => setDate(newDate)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex-1">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-[#F1F2FF] mb-1"
              >
                Gender
              </label>
              <div className="flex items-center justify-center w-full">
                <RadioGroup
                  value={selectedGender}
                  onValueChange={setSelectedGender}
                  className="flex items-center space-x-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Male" id="r1" />
                    <Label htmlFor="r1">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Female" id="r2" />
                    <Label htmlFor="r2">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Other" id="r3" />
                    <Label htmlFor="r3">Other</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-between space-x-4">
            <div className="flex-1">
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-[#F1F2FF] mb-1"
              >
                Contact Number
              </label>
              <input
                type="text"
                id="contact"
                name="contactNumber"
                placeholder={
                  user.addtionalDetails.contactNumber ||
                  "Enter your contact number"
                }
                onChange={changeHandler}
                value={formData.contactNumber}
                className="w-full px-4 py-2 border bg-[#2C333F] rounded-[7px]"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="about"
                className="block text-sm font-medium text-[#F1F2FF] mb-1"
              >
                About
              </label>
              <input
                type="text"
                id="about"
                name="about"
                placeholder={
                  user.addtionalDetails.about || "Write about yourself"
                }
                onChange={changeHandler}
                value={formData.about}
                className="w-full px-4 py-2 border bg-[#2C333F] rounded-[7px] "
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end px-8 space-x-4 pt-8 w-full">
          <button
            disabled={isLoading}
            className="flex items-center justify-center text-white hover:bg-[#2C333F] bg-gray-700 px-5 rounded-[8px] py-[9px] space-x-2"
          >
            <span>Cancel</span>
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black px-6 rounded-[8px] py-[0.48rem] space-x-2"
          >
            <span className="text-md font-semibold">
              {isLoading ? "Saving..." : "Save"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SetSection2;
