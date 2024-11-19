import React, { useState } from "react";
import { IoIosSwitch } from "react-icons/io";
import { PiDiamondsFourFill } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaHospital} from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import {
  TbLayoutDashboardFilled,
  TbScan,
} from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdSick } from "react-icons/md";
import { GrResources } from "react-icons/gr";
import { Link } from "react-router-dom";
import anime from "../../Assets/Images/Animation-2.gif";
import custom from "../../adminDashboardAssets/custom-17.svg";
import "../../Style/customScrollbar.css";
import "../../App.css";

function Sidebar() {
  const [dropdowns, setDropdowns] = useState({
    managementStaff: false,
    labTest: false,
    financial: false,
    facilities: false,
    resourceInventory: false,
    pharmacy: false,
    patientManagement: false,
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
      label: "Staff Management ",
      icon: <PiDiamondsFourFill className="text-xl" />,
      link: "/admin/staffManagement",
    },
    {
      label: "Lab Test",
      icon: <IoIosSwitch className="text-xl" />,
      dropdown: dropdowns.labTest,
      toggle: () => toggleDropdown("labTest"),
      items: [
        { label: "Request", link: "#" },
        { label: "Report", link: "/admin/labreport" },
      ],
    },
    {
      label: "Financial",
      icon: <GiTakeMyMoney className="text-xl" />,
      dropdown: dropdowns.financial,
      toggle: () => toggleDropdown("financial"),
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
      label: "Resource & Inventory",
      icon: <GrResources className="text-xl" />,
      dropdown: dropdowns.resourceInventory,
      toggle: () => toggleDropdown("resourceInventory"),
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
        { label: "Add Drug", link: "/admin/addDrug"},
        { label: "Stock Management", link: "/admin/inventory" },
      ],
    },

    {
      label: "Patient Management",
      icon: <MdSick className="text-xl" />,
      dropdown: dropdowns.patientManagement,
      toggle: () => toggleDropdown("patientManagement"),
      items: [
        { label: "In-patient", link: "/admin/inPatientsList" },
        { label: "Out-Patient", link: "hey" },
      ],
    },
  ];

  return (
    <>
      {/* Sidebar for Large Screens */}
      <aside className="hidden lg:grid lg:grid-cols-[15rem_1fr] h-screen  z-50 pb-6">
        <div className="hidden lg:block fixed shadow-sm bg-white ">
          <div className="h-20 gap-2 flex items-center justify-center ">
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

          <div className="mt-0">
            <div className="max-h-[100%] scrollable-div flex flex-col w-[238px] lg:w-[190px] xl:w-[238px] h-screen px-7">
              <div className="flex flex-col gap-y-7 mt-8">
                {sections.map((section, index) => (
                  <div key={index}>
                    <div
                      className={`flex justify-between w-[13vw] items-center ${
                        section.dropdown ? "flex-row" : ""
                      }`}
                      onClick={section.toggle}
                    >
                      <div className="flex cursor-pointer gap-4 items-center">
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
                      <div className="flex flex-col items-center justify-center ml-10 my-4 text-start">
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
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
