import React from 'react'
import { IoMenu } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import user from '../assets/images/avatar-1.png'
import { IoMdQrScanner } from "react-icons/io";
import { BiSolidNotification } from "react-icons/bi";
import { PiGearFill } from "react-icons/pi";
const Navbar = () => {
  return (
    <div>
        <nav className="bg-white  w-full h-20 fixed top-20 md:top-0  md:w-[68%] lg:w-full md:ml-72 lg:top-0 z-50 px-5 lg:px-10 flex items-center md:justify-between justify-between lg:items-center lg:justify-between border-b-[1px] lg:ml-4 border-stone-200 ">
            <div className="flex justify-between w-72">
                <button  className="w-11 h-11 bg-violet-50 rounded-lg">
                    <IoMenu className='text-2xl mx-auto text-violet-600'/>
                </button>
                <div className="relative hidden lg:block " >
                    <input type="text" placeholder="Search" className="bg-violet-50 w-60 h-11 outline-none rounded-lg px-5"/>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                        <BsSearch className="text-gray-400" />
                    </div>
                </div>
            </div>
                
            <div className='flex w-72 lg:mr-64 items-center gap-3'>
                <div className='flex justify-center flex-col'>
                    <h1 className='text-indigo-500 font-bold text-sm lg:text-base w-[70px] lg:w-auto'>Johen Doe</h1>
                    <p className='text-end font-thin text-[10px]'>ADMIN</p>
                </div>
                <div className='w-8 h-8 lg:w-10 lg:h-10  bg-indigo-300 rounded-md'>
                    <img src={user} alt="" className='rounded-md'/>
                </div>
                <div className='w-8 h-8 lg:w-10 lg:h-10 bg-indigo-50 rounded-md flex items-center justify-center'>
                    <IoMdQrScanner className='text-2xl text-orange-400'/>
                </div>
                <div className='w-8 h-8 lg:w-10 lg:h-10 bg-indigo-50 rounded-md flex items-center justify-center'>
                    <BiSolidNotification className='text-2xl text-blue-400'/>
                </div>
                <div className='w-8 h-8 lg:w-10 lg:h-10 bg-indigo-50 rounded-md flex items-center justify-center' >
                    <PiGearFill className='text-2xl text-pink-300'/>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar