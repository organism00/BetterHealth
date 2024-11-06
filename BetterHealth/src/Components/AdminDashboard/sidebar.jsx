import React, { useState } from "react";
import { IoIosSwitch } from "react-icons/io";
import { PiDiamondsFourFill } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaUsers, FaHospital, FaBed } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { BsCalendarDate } from "react-icons/bs";
import {
  TbLayoutDashboardFilled,
  TbScan,
  TbDeviceAnalytics,
} from "react-icons/tb";
import { MdAccessibilityNew } from "react-icons/md";
import { Link } from "react-router-dom";
import anime from "../../Assets/Images/Animation-2.gif";
import custom from "../../adminDashboardAssets/custom-17.svg";
import "../../Style/customScrollbar.css";
import "../../App.css";

function Sidebar() {
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
      link: "/admindashboard",
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
      items: [{ label: "Orders", link: "#" }],
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
    <>
      {/* Sidebar for Large Screens */}
      <aside className="hidden lg:block w-[18vw] shadow-md fixed top-0 z-50 left-0 pb-6">
        <div className="w-[200px] h-20 fixed gap-2 flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-14 h-14 rounded-full bg-[#483d8b]">
              <img
                src={anime}
                alt="Doctor Illustration"
                className="rounded-full w-12 h-12 mx-auto"
              />
            </div>
            <h1 className="self-center text-xl font-semibold pt-2">
              Better Health
            </h1>
          </div>
        </div>

        <div className="mt-20">
          <div className="max-h-[100%] scrollable-div flex flex-col w-[238px] h-screen px-7">
            <div className="flex flex-col gap-y-7 mt-8">
              {sections.map((section, index) => (
                <div key={index}>
                  <div
                    className={`flex justify-between w-[13vw] items-center ${
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
                        <span>{section.label}</span>
                      )}
                    </div>
                    {section.items && (
                      <RiArrowDropDownLine className="text-xl" />
                    )}
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
                <h1 className="text-[2vmin] text-center">
                  Make an Appointment
                </h1>
                <p className="text-center">Best Health Care here</p>
              </div>
            </div>
            <div className="pb-24 flex flex-col items-center">
              <p>&copy; Better Health</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
