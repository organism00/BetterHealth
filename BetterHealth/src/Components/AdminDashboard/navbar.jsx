import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import user from "../../assets/Images/user.svg";
import { BiSolidNotification } from "react-icons/bi";
import { PiGearFill } from "react-icons/pi";
import { RiLogoutCircleLine, RiArrowDropDownLine } from "react-icons/ri";
import {
  TbLayoutDashboardFilled,
  TbScan,
  TbDeviceAnalytics,
} from "react-icons/tb";
import { PiDiamondsFourFill } from "react-icons/pi";
import { IoIosSwitch } from "react-icons/io";
import { FaUsers, FaHospital, FaBed } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { BsCalendarDate } from "react-icons/bs";
import { MdAccessibilityNew } from "react-icons/md";
import { Link } from "react-router-dom";
import anime from "../../Assets/Images/Animation-2.gif";
import custom from "../../adminDashboardAssets/custom-17.svg";
import "../../Style/customScrollbar.css";
import "../../App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuHandleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="w-full lg:ml-[18vw] z-50 bg-white -mt-4 shadow-sm lg:w-[81vw] h-[11vh] py-6 fixed top-0 px-5 lg:px-5 lg:justify-between lg:items-center">
        <div
          className="flex justify-end z lg:hidden"
          onClick={menuHandleClick}
          onKeyPress={(e) =>
            (e.key === "Enter" || e.key === " ") && menuHandleClick()
          }
          role="button"
          tabIndex="0"
          aria-label="Toggle Menu"
        >
          <button className="w-11 h-11 bg-gray-100 cursor-pointer rounded-lg">
            <IoMenu className="text-2xl mx-auto" />
          </button>
        </div>
        {menuOpen && <MobileNavBar />}
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex justify-between w-72">
            <button
              onClick={menuHandleClick}
              className="w-11 h-11 bg-gray-100 cursor-pointer rounded-lg"
            >
              <IoMenu className="text-2xl mx-auto" />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex justify-center flex-col">
              <h1 className="text-indigo-500 font-bold text-sm lg:text-base w-[70px] lg:w-auto">
                Adegbenga Oluwatosin
              </h1>
              <p className="text-end font-thin text-[10px]">SUPER ADMIN</p>
            </div>
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-indigo-300 rounded-md">
              <img src={user} alt="User profile" className="rounded-md" />
            </div>
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-indigo-50 rounded-md flex items-center justify-center cursor-pointer">
              <RiLogoutCircleLine className="text-2xl text-orange-400" />
            </div>
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-indigo-50 rounded-md flex items-center justify-center">
              <BiSolidNotification className="text-2xl text-blue-400" />
            </div>
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-indigo-50 rounded-md flex items-center justify-center">
              <PiGearFill className="text-2xl text-pink-300" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const MobileNavBar = () => {
 const [dropdowns, setDropdowns] = useState({
   patients: false,
   report: false,
   doctors: false,
   nurse: false,
   billing: false,
   facilities: false,
   pharmacy: false,
 });

 // Function to toggle dropdowns by section name
 const toggleDropdown = (section) => {
   setDropdowns((prev) => ({
     ...prev,
     [section]: !prev[section],
   }));
 };

 const sections = [
   {
     label: "Dashboard",
     icon: <TbLayoutDashboardFilled className="text-xl" />,
     link: "/admin/superadmindashboard",
   },
   {
     label: "Appointments",
     icon: <BsCalendarDate className="text-xl" />,
     link: "#",
   },
   {
     label: "Patients",
     icon: <PiDiamondsFourFill className="text-xl" />,
     dropdown: dropdowns.patients,
     toggle: () => toggleDropdown("patients"),
     items: [
       { label: "New Patient", link: "/newpatient" },
       { label: "Patient List", link: "/patientlist" },
       { label: "Insurance", link: "#" },
     ],
   },
   {
     label: "Lab Test",
     icon: <IoIosSwitch className="text-xl" />,
     dropdown: dropdowns.report,
     toggle: () => toggleDropdown("report"),
     items: [
       { label: "Request", link: "#" },
       { label: "Report", link: "#" },
     ],
   },
   {
     label: "Doctors",
     icon: <TbDeviceAnalytics className="text-xl" />,
     dropdown: dropdowns.doctors,
     toggle: () => toggleDropdown("doctors"),
     items: [
       { label: "New Doctor", link: "/newdoctor" },
       { label: "Doctor List", link: "/doctorlist" },
     ],
   },
   {
     label: "Nurse",
     icon: <IoIosSwitch className="text-xl" />,
     dropdown: dropdowns.nurse,
     toggle: () => toggleDropdown("nurse"),
     items: [
       { label: "New Nurse", link: "/newnurse" },
       { label: "Nurse List", link: "/nurselist" },
     ],
   },
   {
     label: "Other Staffs",
     icon: <FaUsers className="text-xl" />,
     link: "#",
   },
   {
     label: "Billing",
     icon: <CgMenuLeft className="text-xl" />,
     dropdown: dropdowns.billing,
     toggle: () => toggleDropdown("billing"),
     items: [{ label: "Payment", link: "#" }],
   },
   {
     label: "Facilities",
     icon: <FaHospital className="text-xl" />,
     dropdown: dropdowns.facilities,
     toggle: () => toggleDropdown("facilities"),
     items: [
       { label: "Ward/Room", link: "#" },
       { label: "Laboratory", link: "#" },
       { label: "Operation Room", link: "#" },
       { label: "Emergency Room", link: "#" },
     ],
   },
   {
     label: "Pharmacy",
     icon: <TbScan className="text-xl" />,
     dropdown: dropdowns.pharmacy,
     toggle: () => toggleDropdown("pharmacy"),
     items: [
       { label: "Orders", link: "#" },
       { label: "Add Drug", link: "/admin/addDrug" },
       { label: "Inventory", link: "/admin/inventory" },
     ],
   },
   {
     label: "Outpatients",
     icon: <MdAccessibilityNew className="text-2xl" />,
     link: "#",
   },
   {
     label: "Inpatients",
     icon: <FaBed className="text-2xl" />,
     link: "#",
   },
 ];

  return (
    <div className="fixed w-[75vw] inset-0 bg-white z-40 flex flex-col items-center shadow-md lg:hidden">
      <div className="flex gap-4 items-center justify-center py-2">
        <div className="w-14 h-14 rounded-full bg-[#483d8b]">
          <img
            src={anime}
            alt="Doctor Illustration"
            className="rounded-full w-12 h-12 mx-auto"
          />
        </div>
        <h1 className="self-center text-2xl font-semibold pt-2">
          Better Health
        </h1>
      </div>
      <div className="mt-4">
        <div className="max-h-[100%] scrollable-div flex flex-col  h-screen">
          <div className="flex flex-col gap-y-7 mt-8">
            {sections.map((section, index) => (
              <div key={index}>
                <div
                  className={`flex justify-between  items-center ${
                    section.dropdown ? "flex-row" : ""
                  }`}
                  onClick={section.toggle}
                >
                  <div className="flex gap-4 items-center">
                    {section.icon}
                    {section.link ? (
                      <Link to={section.link} className="hover:text-blue-400">
                        {section.label}
                      </Link>
                    ) : (
                      <span className="hover:text-blue-400">
                        {section.label}
                      </span>
                    )}
                    {section.items && (
                      <RiArrowDropDownLine className="text-3xl" />
                    )}
                  </div>
                </div>
                {section.dropdown && (
                  <div className="flex flex-col items-center justify-center my-4 text-start">
                    <ul className="space-y-4">
                      {section.items.map((item, i) => (
                        <li key={i} className="list-disc hover:text-blue-400">
                          <Link to={item.link}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pb-10 flex flex-col items-center">
            <img src={custom} className="relative top-12 w-[120px]" />
            <div className="p-2 h-36 bg-indigo-300 rounded-2xl pt-16">
              <h1 className="text-[2vmin] text-center">Make an Appointment</h1>
              <p className="text-center">Best Health Care here</p>
            </div>
          </div>
          <div className="pb-24 flex flex-col items-center">
            <p>&copy; Better Health</p>
          </div>
        </div>
      </div>
    </div>
  );
};
