import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import user from "../../assets/Images/user.svg";
import { BiSolidNotification } from "react-icons/bi";
import { PiGearFill } from "react-icons/pi";
import { RiLogoutCircleLine, RiArrowDropDownLine } from "react-icons/ri";
import "../../Style/customScrollbar.css";
import "../../App.css";

const Navbar = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const menuHandleClick = () => {
  //   setMenuOpen(!menuOpen);
  // };

  return (
    <>
      <nav className="z-50 bg-white shadow-sm h-[11vh] sticky top-0 px-5 lg:px-5 flex ">
        <div className="z-30 lg:hidden"
          // onClick={menuHandleClick}
          // onKeyPress={(e) =>
          //   (e.key === "Enter" || e.key === " ") && menuHandleClick()
          // }
          role="button"
          tabIndex="0"
          aria-label="Toggle Menu"
        >
          <button className="w-11 h-11 bg-[gray-100] cursor-pointer rounded-lg">
            <IoMenu className="text-4xl mx-auto" />
          </button>
        </div>
        {/* {menuOpen && <MobileNavBar />} */}
        
        <div className="hidden w-full lg:flex justify-between items-center ">
          <div className="flex justify-between">
            <button
              // onClick={menuHandleClick}
              className="w-11 h-11 bg-gray-100 cursor-pointer rounded-lg"
            >
              <IoMenu className="text-2xl mx-auto" />
            </button>
          </div>
          <div className="flex items-center gap-3 ">
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