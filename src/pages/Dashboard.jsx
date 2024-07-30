import Loading from "@/components/core/common/Loading";
import Drawer from "@/components/DashboardComponents/Drawer";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb"


const Dashboard = () => {

  const { loading: authLoading } = useSelector((state) => state.auth)
  const { loading: profileLoading } = useSelector((state) => state.profile)

  if (authLoading || profileLoading) {
    return <Loading />
  }

  return (
    <div className="container mx-auto py-16">
      <div className="">
        <Drawer />
        <div className="pl-[240px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};


export default Dashboard;
