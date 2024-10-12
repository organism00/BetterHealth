import React, { useState } from "react";
import anime from "../../adminDashboardAssets/anime.gif";
import custom from "../../adminDashboardAssets/custom-17.svg";
import "../../App.css";
import {
  TbLayoutDashboardFilled,
  TbScan,
  TbDeviceAnalytics,
} from "react-icons/tb";
import { PiDiamondsFourFill } from "react-icons/pi";
import { IoIosSwitch } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaUsers, FaHospital, FaBed } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { BsCalendarDate } from "react-icons/bs";
import { MdAccessibilityNew } from "react-icons/md";
import { Link } from "react-router-dom";
import menuImage from "../../assets/Images/menu (2).png";

const SideBar = () => {
  const [showPatientsDropdown, setShowPatientsDropdown] = useState(false);
  const [showDoctorsDropdown, setShowDoctorsDropdown] = useState(false);
  const [featuresdropdown, setfeaturesdropdown] = useState(false);
  const [appsdropdown, setappsdropdown] = useState(false);
  const [formsdropdown, setformsdropdown] = useState(false);
  const [authdropdown, setauthdropdown] = useState(false);
  const [miscdropdown, setmiscdropdown] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility

  // Toggle sidebar visibility for mobile view
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const misc = () => setmiscdropdown((prev) => !prev);
  const auth = () => setauthdropdown((prev) => !prev);
  const forms = () => setformsdropdown((prev) => !prev);
  const apps = () => setappsdropdown((prev) => !prev);
  const features = () => setfeaturesdropdown((prev) => !prev);
  const togglePatientsDropdown = () => setShowPatientsDropdown((prev) => !prev);
  const toggleDoctorsDropdown = () => setShowDoctorsDropdown((prev) => !prev);

  return (
    <div className="lg:grid lg:grid-cols-[15rem_1fr]">
      {/* Mobile View Sidebar */}
      <aside className="w-screen h-20 top-0 bg-violet-50 md:hidden lg:hidden fixed z-50">
        <div className="flex items-center justify-between px-6">
          <div className="flex gap-4 items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-[#483d8b]">
              <img
                src={anime}
                data-aos="fade-up"
                alt="Doctor Illustration"
                className="rounded-[360px] w-12 h-12 mx-auto"
              />
            </div>
            <h1 className="self-center text-2xl font-semibold pt-2">
              Better Health
            </h1>
          </div>
          {/* Menu Icon to toggle sidebar */}
          <img
            className="w-6 h-6 cursor-pointer" // Make the image clickable
            src={menuImage}
            alt="menu"
            onClick={toggleSidebar}
          />
        </div>

        {/* Sidebar content for mobile */}
        <div
          className={`fixed top-20 left-0 w-[270px] h-screen bg-violet-50 transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mt-10">
            <div className="max-h-[100%] overflow-x-auto no-scrollbar flex flex-col w-[270px] h-screen px-7">
              {/* Sidebar content */}
              <div className="flex flex-col gap-y-7 mt-8">
                <div className="flex justify-between w-28 items-center">
                  <TbLayoutDashboardFilled className="text-xl" />
                  <Link to={"/"} className="hover:text-blue-400">
                    Dashboard
                  </Link>
                </div>
                <div className="flex justify-between w-32 items-center">
                  <TbScan className="text-xl" />
                  <a href="#" className="hover:text-blue-400">
                    Appointments
                  </a>
                </div>

                {/* Patients Dropdown */}
                <div>
                  <div
                    className="flex justify-between w-60 items-center flex-row"
                    onClick={togglePatientsDropdown}
                  >
                    <div className="flex justify-between w-20 items-center">
                      <PiDiamondsFourFill className="text-xl" />
                      <a href="#" className="hover:text-blue-400">
                        Patients
                      </a>
                    </div>
                    <RiArrowDropDownLine className="text-xl" />
                  </div>
                  {showPatientsDropdown && (
                    <div className="flex flex-col items-center justify-center my-4 text-start">
                      <ul className="space-y-4">
                        <li className="list-disc hover:text-blue-400">
                          <a href="#">Patient</a>
                        </li>
                        <li className="list-disc hover:text-blue-400">
                          <a href="#">Patient Details</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Doctors Dropdown */}
                <div>
                  <div
                    className="flex justify-between w-60 items-center flex-row"
                    onClick={toggleDoctorsDropdown}
                  >
                    <div className="flex justify-between w-20 items-center">
                      <TbDeviceAnalytics className="text-xl" />
                      <a href="#" className="hover:text-blue-400">
                        Doctors
                      </a>
                    </div>
                    <RiArrowDropDownLine className="text-xl" />
                  </div>
                  {showDoctorsDropdown && (
                    <div className="flex flex-col items-center justify-center my-4 text-start">
                      <ul className="space-y-4">
                        <li className="list-disc hover:text-blue-400">
                          <a href="#">Doctor Item 1</a>
                        </li>
                        <li className="list-disc hover:text-blue-400">
                          <a href="#">Doctor Item 2</a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex justify-between w-20 items-center">
                  <IoIosSwitch className="text-xl" />
                  <a href="#" className="hover:text-blue-400">
                    Nurse
                  </a>
                </div>

                <div className="flex justify-between w-28 items-center">
                  <FaUsers className="text-xl" />
                  <a href="#" className="hover:text-blue-400">
                    Other staffs
                  </a>
                </div>
              </div>
              {/* Sidebar Footer */}
              <div className="pb-10 flex flex-col items-center">
                <img src={custom} className="relative top-12" />
                <div className="w-52 h-36 bg-indigo-300 rounded-2xl pt-16">
                  <h1 className="text-lg text-center">Make an Appointment</h1>
                  <p className="text-center">Best Health Care here</p>
                </div>
              </div>
              <div className="pb-24 flex flex-col items-center">
                <p>&copy; Better Health</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Desktop Sidebar */}
      <aside className="w-[270px] h-[120vh] md:block bg-violet-50 fixed top-0 left-0 hidden lg:block">
        {/* ... the same content as above for the desktop version ... */}
      </aside>
    </div>
  );
};

export default SideBar;
