import React, {useState} from 'react'
import anime from '../assets/images/anime.gif'
import custom from '../assets/images/custom-17.svg'
import '../App.css'
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { TbScan } from "react-icons/tb";
import { PiDiamondsFourFill } from "react-icons/pi";
import { IoIosSwitch } from "react-icons/io";
import { TbDeviceAnalytics } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { FaHospital } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { MdAccessibilityNew } from "react-icons/md";
import { FaBed } from "react-icons/fa";

const SideBar = () => {

    const [showPatientsDropdown, setShowPatientsDropdown] = useState(false);
  const [showDoctorsDropdown, setShowDoctorsDropdown] = useState(false);
  const [featuresdropdown, setfeaturesdropdown] = useState(false);
  const [appsdropdown, setappsdropdown] = useState(false);
  const [formsdropdown, setformsdropdown] = useState(false);
  const [authdropdown, setauthdropdown] = useState(false);
  const [miscdropdown, setmiscdropdown] = useState(false);

  // Function to toggle the Dashboard dropdown
  const misc =()=>{
    setmiscdropdown((prev) => !prev)
  }
  const auth =()=>{
    setauthdropdown((prev) => !prev)
  }
  const forms =()=>{
    setformsdropdown((prev) => !prev)
  }
  const apps =()=>{
    setappsdropdown((prev) => !prev)
  }
  const features =()=>{
    setfeaturesdropdown((prev) => !prev)
  }
  
  // Function to toggle the Patients dropdown
  const togglePatientsDropdown = () => {
    setShowPatientsDropdown((prev) => !prev);
  };

  // Function to toggle the Doctors dropdown
  const toggleDoctorsDropdown = () => {
    setShowDoctorsDropdown((prev) => !prev);
  };
  return (
    <div className="lg:grid lg:grid-cols-[16rem_1fr]" >
        <aside className='w-screen h-20 top-0 bg-violet-50 md:hidden lg:hidden fixed z-50'>
        <div className='flex gap-4 items-center justify-center'>
                        <div className="w-14 h-14 rounded-full bg-[#483d8b]">
                            <img
                                src={anime}
                                data-aos="fade-up"
                                alt="Doctor Illustration"
                                className="rounded-[360px] w-12 h-12 mx-auto "
                            />
                        </div>
 
                        <h1 className="self-center  text-2xl font-semibold pt-2">Better Health</h1>
                    </div>
        </aside>
        <aside className="w-[270px] h-[120vh] md:block bg-violet-50 fixed top-0 left-0 hidden lg:block">
                <div className="w-[270px] h-20 fixed gap-2 flex items-center justify-center ">
                    <div className='flex gap-4'>
                        <div className="w-14 h-14 rounded-full bg-[#483d8b]">
                            <img
                                src={anime}
                                data-aos="fade-up"
                                alt="Doctor Illustration"
                                className="rounded-[360px] w-12 h-12 mx-auto "
                            />
                        </div>
 
                        <h1 className="self-center  text-2xl font-semibold pt-2">Better Health</h1>
                    </div>
                    {/* <img src={anime} alt=""  className='w-12 h-12'/>
                    <h1 className='text-3xl text-indigo-900'>BETTERLIFE</h1> */}
                </div>
                <div className="mt-20">
                    <div className="max-h-[100%] overflow-x-auto  no-scrollbar flex flex-col w-[270px] h-screen px-7">
                        <div className="flex flex-col gap-y-7 mt-8">
                            <div className="flex justify-between w-28 items-center ">
                                <TbLayoutDashboardFilled  className="text-xl"/> 
                                <a href="#"  className="hover:text-blue-400">Dashboard</a>
                            </div>
                            <div className="flex justify-between w-32 items-center">
                                <TbScan className="text-xl"/>
                                <a href="#" className="hover:text-blue-400">Appointments</a>
                            </div>    

                            <div>
                                <div className="flex justify-between w-60 items-center flex-row" onClick={togglePatientsDropdown}>
                                    <div className="flex justify-between w-20 items-center">
                                        <PiDiamondsFourFill className="text-xl"/>
                                        <a href="#"  className="hover:text-blue-400">Patients</a>
                                    </div>
                                    <RiArrowDropDownLine className="text-xl" />
                                </div>
                                
                                {showPatientsDropdown && (
                                <div className="flex flex-col items-center justify-center my-4 text-start">
                                    <ul className="space-y-4">
                                        <li className="list-disc hover:text-blue-400"> <a href="#">Patient</a></li>
                                        <li className="list-disc hover:text-blue-400"> <a href="#">Patient Details</a></li>
                                    </ul>
                                </div>
                                )}
                            </div>

                            <div >
                                <div className="flex justify-between w-60 items-center flex-row" onClick={toggleDoctorsDropdown}>
                                    <div className="flex justify-between w-20 items-center">
                                        <TbDeviceAnalytics className="text-xl"/>
                                        <a href="#"  className="hover:text-blue-400"> Doctors </a>
                                    </div>
                                    <RiArrowDropDownLine className="text-xl" />
                                </div>
                                {showDoctorsDropdown && (
                                <div className="flex flex-col items-center justify-center my-4 text-start">
                                    <ul className="space-y-4">
                                        <li className="list-disc hover:text-blue-400"> <a href="#">Doctor Item 1</a></li>
                                        <li className="list-disc hover:text-blue-400"> <a href="#">Doctor Item 2</a></li>
                                    </ul>
                                </div>
                                )}
                            </div>
                            
                            <div className="flex justify-between w-20 items-center">
                                <IoIosSwitch className="text-xl"/>
                                <a href="#" className="hover:text-blue-400">Nurse</a>
                            </div>

                            <div className="flex justify-between w-28 items-center">
                                <FaUsers className="text-xl" />
                                <a href="#" className="hover:text-blue-400">Other staffs</a>
                            </div>

                        </div>


                        <div className="flex flex-col gap-y-7 mt-8 ">
                            <p className="text-[12px] text-blue-800 ">COMPONENTS</p>
                            <div className="flex flex-col gap-y-7 mt-2">
                                <div className="flex w-20 justify-between">
                                    <CgMenuLeft className="text-xl"/>
                                    <a href="#" >Billing</a>
                                </div>
                                

                                <div className="flex w-24 justify-between ">
                                    <FaHospital className="text-xl"/>
                                    <a href="#" onClick={forms} className="hover:text-blue-400">Facilities</a>
                                </div>

                                <div >
                                    <div className="flex w-32 justify-between ">
                                        <BsCalendarDate className="text-xl"/>
                                        <a href="#" onClick={apps} className="hover:text-blue-400">Appointments</a>
                                    </div>
                                    
                                </div>

                                <div>
                                    <div className="flex w-28 justify-between ">
                                        <MdAccessibilityNew className="text-2xl"/>
                                        <a href="#" onClick={auth} className="hover:text-blue-400">Outpatients</a>
                                    </div>
                                    
                                </div>

                                <div >
                                    <div className="flex w-28 justify-between ">
                                        <FaBed className="text-2xl"/>
                                        <a href="#" onClick={misc} className="hover:text-blue-400">Inpatients</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pb-10 flex flex-col items-center "> 
                            <img src={custom} className="relative top-12" />
                            <div className="w-52 h-36 bg-indigo-300 rounded-2xl pt-16">
                                <h1 className="text-lg text-center">Make an Appointments</h1>
                                <p className="text-center">Best Health Care here</p>
                            </div>
                        </div>
                        <div className="pb-24 flex flex-col items-center ">
                            <h1 className="font-bold">Doclinc dashboard</h1>
                            <p>© 2024 All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </aside>
    </div>
  )
}

export default SideBar