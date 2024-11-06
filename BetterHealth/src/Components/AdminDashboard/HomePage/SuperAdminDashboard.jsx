import React from "react";
import Navbar from "../Navbar";
import Mainpage from "../MainPage";
import Sidebar from "../Sidebar";


const SuperAdminDashboard = () => {
  return (
    <>
      <div className="lg:flex">
        <Sidebar />
        <div>
          <Navbar />
          <Mainpage />
        </div>
      </div>
    </>
  );
};

export default SuperAdminDashboard;