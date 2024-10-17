import React from 'react';
import SideBar from '../Components/SideBar';
import Navbar from '../Components/Navbar';
import { doctorsList } from '../Components/DoctorsData'
import { GoHome } from "react-icons/go";
import { NavLink } from 'react-router-dom';

const DoctorList = () => {
  return (
   <div className="flex flex-col gap-0 lg:flex-row py-4 md:px-0 ">
        <SideBar/>
        <Navbar/>

        <div className='flex justify-center w-[100%] '>
            <section className='mt-28 lg:mx-10 my-10 grid justify-center '>
                <div className='flex justify-between'>
                    <div className='flex gap-x-5 px-5 lg:px-0 md:px-8 md:ml-64 lg:ml-0'>
                        <h1 className="text-2xl">Doctors</h1>
                        <div className="flex gap-2 items-center">
                            <GoHome/>
                            <p className="font-thin"> - Doctors</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <input type="text" className='md:w-[350px] border px-4 rounded' />
                        <button className='bg-[#5156be] text-white px-4 rounded '>Search</button>
                    </div>
                </div>

                <div className='py-5 md:ml-72 lg:ml-0 gap-x-10 grid grid-cols-1 lg:grid-cols-3 gap-y-10 '>

                    {doctorsList.map(doctor => {
                        return (
                          <NavLink
                            to={"/doctordetails"}
                            key={doctor.id}
                            className="w-[250px] overflow-hidden shadow-2xl border border-stone-100 rounded-lg bg-white"
                          >
                            <div className="flex justify-center flex-col items-center h-[200px] w-[100%] ">
                              <img
                                src={doctor.thumb}
                                alt="image"
                                className="w-100% h-[100%] object-cover "
                              />
                            </div>
                            <div className="text-2xl text-white font-medium bg-primary2 flex flex-col items-center p-2 ">
                              <p className="">{doctor.name}</p>
                              <p className="font-medium text-sm text-gray-300">
                                {doctor.title}
                              </p>
                            </div>
                          </NavLink>
                        );
                    })}
                </div>
                    
            </section>
        </div>
   </div>
  )
}
 
export default DoctorList