import React, { useState } from 'react';
import { HiOutlineDotsHorizontal } from "react-icons/hi";

// images
import doc1 from '../../adminDashboardAssets/doc1.png';
import doc2 from '../../adminDashboardAssets/doc2.png';
import doc3 from '../../adminDashboardAssets/doc3.png';
import doc4 from '../../adminDashboardAssets/doc4.png';
import doc5 from '../../adminDashboardAssets/doc5.png';

const doctorList = [
  { id: 1, name: 'Dr. Jaylon Stanton', position: 'Dentist', image: doc1 },
  { id: 2, name: 'Dr. Carla Schleifer', position: 'Oculist', image: doc2 },
  { id: 3, name: 'Dr. Hanna Geidt', position: 'Surgeon', image: doc3 },
  { id: 4, name: 'Dr. Roger George', position: 'General Practitioner', image: doc4 },
  { id: 5, name: 'Dr. Natalie Doe', position: 'Physician', image: doc5 }
]

function DoctorList() {
  const [openDoctorsMenu, setOpenDoctorsMenu] = useState(false);

  const toggleDoctorsMenu = () => {
    setOpenDoctorsMenu(!openDoctorsMenu);
  };
  return (
    <div>
      <div className='shadow-lg pt-4 rounded-lg border'>
        <div className='mb-4 pb-4 px-8 border-b w-[100% text-[18px] text-[#172b4c] flex items-center justify-between '>
          <p className='text-[18px] text-[#172b4c] font-medium '>Doctor List</p>
          <p className='text-[14px] text-[#172b4c]'>Today</p>
        </div>
        
        {doctorList.map(item => {
          return (
            <div key={item.id} className='border rounded-lg flex gap-2 p-4 m-4 '>
              <div className='bg-secondary rounded-xl'>
                <img src={item.image} alt="" className='w-[54px] ' />
              </div>
              <div className='w-[150px]'>
                <h1 className='text-[16px] '>{item.name}</h1>
                <p className='text-[14px] text-[#7e8299] '>{item.position}</p>
              </div>
              <HiOutlineDotsHorizontal className='text-[25px] text-[#7e8299] cursor-pointer ' onClick={toggleDoctorsMenu} />

              {openDoctorsMenu && (
                <div className='shadow-lg p-4 rounded-lg border absolute bg-white text-[14px] grid gap-4 w-[150px] '>
                  <p>Inbox</p>
                  <p>Sent</p>
                  <p>Spam</p>
                  <p>Draft</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DoctorList