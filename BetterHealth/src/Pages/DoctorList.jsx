import React from 'react';
import SideBar from '../Components/SideBar';
import Navbar from '../Components/Navbar';
import { doctorsList } from '../Components/DoctorsData'
import { GoHome } from "react-icons/go";

const DoctorList = () => {
  return (
   <div className="flex flex-col gap-2 lg:flex-row py-4 md:px-0 ">
        <SideBar/>
        <Navbar/>

        <section className='lg:px-4 mt-28 lg:mx-10 my-10'>
            <div className='flex justify-between'>
                <div className='flex gap-x-5 px-5 lg:px-0 md:px-8 md:ml-64 lg:ml-0'>
                    <h1 className="text-2xl">Doctors</h1>
                    <div className="flex gap-2 items-center">
                        <GoHome/>
                        <p className="font-thin"> - Doctors</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <input type="text" className='border py-2 px-4 rounded-lg' />
                    <button className='bg-[#5156be] text-white px-4 py-2 rounded-lg '>Search</button>
                </div>
            </div>

            <div className='w-full py-5  md:ml-72 lg:ml-0 lg:w-[103%] gap-x-5 md:w-[94.4%] grid grid-cols-1 lg:grid-cols-3 gap-y-10 place-items-center'>

                {doctorsList.map(doctor => {
                    return(
                        <div key={doctor.id} className='w-[90%] h-[70vh] lg:h-72 md:w-[100%] shadow-xl border border-stone-100 rounded-lg'>
                            <div className='flex justify-center flex-col items-center text-center space-y-3 text-2xl text-blue-700 font-medium'>
                                <img src={doctor.thumb} alt="" />
                                <p className=''>{doctor.name}</p>
                                <p className='font-medium text-sm text-gray-400'>{doctor.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
                
        </section>
   </div>
  )
}
 
export default DoctorList