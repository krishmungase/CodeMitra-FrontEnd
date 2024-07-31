import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog"
import { Trash2 } from "lucide-react"
import { apiConnector } from "@/services/apiconnector";
import { useSelector } from "react-redux";
import Loading from "../core/common/Loading";



const SetSection4 = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useSelector((state) => state.auth)

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await apiConnector().deleteAccount({ method: "DELETE", bodyData: {}, url: "/auth/sendotp" })
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error creating", error);
    }
    finally {
      setIsLoading(false);
    }
  }

  if(isLoading){
    return <Loading />
  }
  return (
    <div className="max-w-[69rem] container mx-auto py-8">
      <div className="bg-[#340019] min-h-36 space-x-6 flex items-start rounded-[10px] px-16 py-6">
        <div className="max-w-md py-4 bg-[#691432] px-4 rounded-full">
          <Trash2 className="size-8 text-[#EF476F]" />
        </div>
        <div className="max-w-xl space-y-1">
          <p className="text-xl font-bold">Delete Account</p>
          <p className="text-sm text-[#FBC7D1]">
            Would you like to delete account?
          </p>
          <p className="text-sm text-[#FBC7D1]">
            This account contains Paid Courses. Deleting your account will
            remove all the contain associated with it.
          </p>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="text-sm text-[#D43D63] hover:text-red-600 underline">
                I want to delete my account.
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="rounded-xl">
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  Your account will be deleted permantly
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-white rounded-[8px] text-black font-bold">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  className="bg-red-500 rounded-[8px] font-bold hover:bg-red-600"
                  onClick={onSubmit}
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default SetSection4;
