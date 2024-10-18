import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Components/Navbar'
import SideBar from '../Components/SideBar'

import { GoHome } from "react-icons/go";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineWeekend } from "react-icons/md";
import { FaFileMedical } from "react-icons/fa6";




function PatientDetails() {
  return (
    <div className="flex flex-col gap-0 lg:flex-row py-4 md:px-0 ">
      <SideBar/>
      <NavBar/>

      <div className='mt-20 lg:mx-4 w-full'>
        <div className='flex gap-x-5 py-4 lg:px-0 md:px-8 md:ml-64 lg:ml-0 '>
          <h1 className="text-2xl">Pateint details</h1>
          <div className="flex gap-2 items-center">
            <Link to='/admindashboard'><GoHome/></Link>
            <p className="font-thin"> - Patient details</p>
          </div>
        </div>

        <div className='flex gap-4  '>
          {/* side 1 */}
          <div className='w-[33.33%] flex flex-col gap-4 '>
            {/* Address */}
            <div className='rounded-lg shadow-lg border p-4 '>
              <div>
                <p>Email: email@email.com</p>
                <p>Phone: +234 810 000 0000</p>
                <p>Address: 123, Otigba Street, Ikeja Lagos, Nigeria</p>
              </div>
              <div className='flex items-center justify-center bg-blue-400 h-40'>
                Map here
              </div>
            </div>

            {/* Disease History */}
            <div className='shadow-lg border rounded-lg'>
              <div className='p-4 border-b'>
                <p className='text-[20px] '>Medical History</p>
              </div>
              <div className='h-72 flex items-center justify-center p-4 bg-green-300 '>
                History here
              </div>
            </div>

            {/* Assigned doctors */}
            <div className='rounded-lg border shadow-lg '>
              <div className='p-4 border-b'>
                <p className='text-[20px] '>Assigned Doctors</p>
              </div>
              <div className='flex gap-4 p-4'>
                <div>
                  <img src="" alt="" className='w-24 h-24 bg-black rounded-xl ' />
                </div>
                <div>
                  <p>Name</p>
                  <p>Physician</p>
                  <div className='flex gap-1'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaRegStar/>
                  </div>
                </div>
              </div>
              <div className='flex justify-between p-4 '>
                <button className='px-4 py-2 rounded-lg bg-red-300 text-red-600 '>Unassign</button>
                <button className='px-4 py-2 rounded-lg bg-green-100 text-green-600 '>Check</button>
              </div>
            </div>
          </div>

          {/* side 2 */}
          <div className='w-[66.67%] flex flex-col gap-4 '>
            {/* buttons */}
            <div className='flex items-center justify-between'>
              <button className='flex items-center px-4 py-2 bg-primary text-white rounded-lg'><FaRegEdit/>Edit Profile</button>
              <div className='flex items-center gap-2'>
                <button className='flex items-center px-4 py-2 bg-primary text-white rounded-lg'><FaFileMedical/>New Medical Condition</button>
                <button className='flex items-center px-4 py-2 bg-primary text-white rounded-lg'><MdOutlineWeekend/>New Appointment</button>
              </div>
            </div>

            {/* details and story */}
            <div className='h-[60vh] rounded-lg shadow-lg border flex items-center justify-center'>
              Details and Disease Story here
            </div>

            {/* vitals and statistics */}
            <div className='flex justify-between gap-4 '>
              {/* Vitals */}
              <div className='w-[50%] h-[60vh] rounded-lg border shadow-lg '>
                Vitals here
              </div>

              {/* Statistics */}
              <div className='w-[50%] h-[60vh] rounded-lg border shadow-lg '>
                Statistics here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientDetails