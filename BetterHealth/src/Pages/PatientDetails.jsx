import React from 'react';
import { Link } from 'react-router-dom';

import { GoHome } from "react-icons/go";
import { FaStar, FaRegStar } from "react-icons/fa";

function PatientDetails() {
  return (
    <div>
      <div className='flex gap-x-5 px-5 lg:px-0 md:px-8 md:ml-64 lg:ml-0'>
        <h1 className="text-2xl">Pateint details</h1>
        <div className="flex gap-2 items-center">
          <Link to='/admindashboard'><GoHome/></Link>
          <p className="font-thin"> - Patient details</p>
        </div>
      </div>

      <div>
        {/* side 1 */}
        <div className='w-[306px] '>
          {/* Address */}
          <div className='rounded-lg border p-4 '>
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
          <div>
            <div className='p-4 border-b'>
              <p className='text-[20px] '>Disease History</p>
            </div>
            <div className='h-72 flex items-center justify-center p-4 bg-green-300 '>
              History here
            </div>
          </div>

          {/* Assigned doctors */}
          <div className='rounded-lg border '>
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
                <div className='flex'>
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
        <div>

        </div>
      </div>
    </div>
  )
}

export default PatientDetails