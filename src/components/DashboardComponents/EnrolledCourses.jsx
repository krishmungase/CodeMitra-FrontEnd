import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { SlashIcon } from "@radix-ui/react-icons";
import { useSelector } from "react-redux";
import Loading from "../core/common/Loading";
import { apiConnector } from "@/services/apiconnector";
import toast from "react-hot-toast";
import ProgressTable from "../EnrolledCoursesComp/ProgressTable";

const EnrolledCourses = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const userId = user.token
  console.log("userId: " + userId)

  const getEnrolledCourses = async () => {
    setIsLoading(true);
    try {
      const response = await apiConnector().enrolledCourse({
        method: "POST",
        bodyData: { userId: user._id },
        token: user.token,
        url: "/profile/enrolledcourses",
      });
      console.log("response : ", response);
      setEnrolledCourses(response.data.CoursesEnrolled);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error creating", error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log("enrolledCourses: ", enrolledCourses);



  useEffect(() => {
    getEnrolledCourses();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="flex flex-col space-y-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>settings</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-2xl font-bold">Enrolled Course</h1>
      </div>
      <div>
        {
          !enrolledCourses ? (
            <div>
              Loading...
            </div>
          ) : !enrolledCourses.length ? (<p>You have not enrolled in any course yet</p>) : (
            <ProgressTable enrolledCourses={enrolledCourses} />
          )
        }
      </div>
    </div>
  );
};

export default EnrolledCourses;
