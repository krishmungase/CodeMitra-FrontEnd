import Loading from "@/components/core/common/Loading";
import Drawer from "@/components/DashboardComponents/Drawer";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";


const Dashboard = () => {

  const { loading: authLoading } = useSelector((state) => state.auth)
  const { loading: profileLoading } = useSelector((state) => state.profile)

  if (authLoading || profileLoading) {
    return <Loading />
  }

  return (
    <div className="container mx-auto py-16">
      <div className="flex items-center justify-center space-y-2">
        <Drawer />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};


export default Dashboard;
