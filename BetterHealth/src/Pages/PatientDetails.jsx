import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavBar from '../Components/Navbar';
import SideBar from '../Components/SideBar';
import YourStart from '../Components/Patients/YourStart';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Images
import proimage from '../assets/Images/first.png'

// Icons
import { GoHome } from "react-icons/go";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineWeekend } from "react-icons/md";
import { FaFileMedical } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const diseaseHistory = [
  { 
    name: 'Diabetes', 
    date: 'Mon, 18 Mar 2021, 11:15 AM', 
    story: 'Diabetes is a chronic condition where the body either does not produce enough insulin, or it cannot effectively use the insulin it produces. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  { 
    name: 'Sleep Problem', 
    date: 'Tue, 21 Jun 2020, 03:22 PM', 
    story: 'Sleep problems are disturbances in sleep patterns which affect health, leading to issues like insomnia, sleep apnea, or restless legs syndrome.' 
  },
  { 
    name: 'Dental Care', 
    date: 'Wed, 15 Mar 2020, 02:11 PM', 
    story: 'Dental care involves the prevention and treatment of oral health problems such as cavities, gum disease, and tooth loss.'
  },
  { 
    name: 'Diabetes', 
    date: 'Sun, 11 Jan 2020, 12:24 PM', 
    story: 'Managing diabetes requires monitoring blood sugar levels, maintaining a healthy diet, and possibly insulin therapy.'
  }
];

function PatientDetails() {
  const [selectedStory, setSelectedStory] = useState(diseaseHistory[0].story);

  const [viewport, setViewport] = useState({
    latitude: 6.601838,
    longitude: 3.351486,
    zoom: 12,
    width: '100%',
    height: '100%'
  });
  const location = useLocation();
  console.log(location.state)

  // Function to handle clicking on a disease history item
  const handleDiseaseClick = (story) => {
    setSelectedStory(story);
  };
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
            <div className='rounded-lg shadow-lg border p-4 space-y-4 '>
              <div className='space-y-2'>
                <p>Email: email@email.com</p>
                <p>Phone: +234 810 000 0000</p>
                <p>Address: 123, Otigba Street, Ikeja Lagos, Nigeria</p>
              </div>
              <div className='h-40 border-t '>
                <Map
                  {...viewport}
                  mapStyle="mapbox://styles/mapbox/streets-v11"
                  onViewportChange={(newViewport) => setViewport(newViewport)}
                  mapboxAccessToken="your-mapbox-access-token"
                >
                  <Marker latitude={6.601838} longitude={3.351486}>
                    <div className="bg-blue-500 w-3 h-3 rounded-full" />
                  </Marker>
                </Map>
              </div>
            </div>

            {/* Disease History */}
            <div className='shadow-lg border rounded-lg'>
              <div className='p-4 border-b'>
                <p className='text-[20px] '>Medical History</p>
              </div>
              <div className='flex items-center justify-center p-4 '>
              <div className="space-y-0">
                  {diseaseHistory.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 cursor-pointer"
                      onClick={() => handleDiseaseClick(item.story)}
                    >
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center">
                          <FaHeart className='text-[20px] ' />
                        </div>
                        {index < diseaseHistory.length - 1 && (
                          <div className="h-6 border-l-4 border-primary "></div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Assigned doctors */}
            <div className='rounded-lg border shadow-lg '>
              <div className='p-4 border-b'>
                <p className='text-[20px] '>Assigned Doctors</p>
              </div>
              <div className='flex gap-4 p-4'>
                <div className='rounded-xl border bg-[#c8c9ee] shadow-lg'>
                  <img src={proimage} alt="" className='w-24 h-24 object-cover ' />
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
            <div className='rounded-lg shadow-lg border items-center justify-center'>
              <div className='bg-black h-40 w-[100%]'>

              </div>
              <div>

              </div>

              <div className='p-4 mt-20 '>
                <h2 className='font-medium mb-4 '>Story About Disease</h2>
                <p>{selectedStory}</p>
              </div>
            </div>

            {/* vitals and statistics */}
            <div className='flex justify-between gap-4 '>
              {/* Vitals */}
              <div className='w-[50%] rounded-lg border shadow-lg '>
                <div className='rounded-lg border shadow-lg p-4 space-y-4'>
                  <h3 className="text-xl font-semibold mb-4">Patient Vitals</h3>
                  <div className="grid grid-cols-2 gap-4 ">
                    {/* Vital 1 */}
                    <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md">
                      <FaHeart className="text-red-500 text-2xl mb-2"/>
                      <p className="text-sm font-semibold">Heart Rate</p>
                      <p className="text-lg font-bold">72 bpm</p>
                    </div>
                    
                    {/* Vital 2 */}
                    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md">
                      <FaHeart className="text-blue-500 text-2xl mb-2"/>
                      <p className="text-sm font-semibold">Blood Pressure</p>
                      <p className="text-lg font-bold">120/80 mmHg</p>
                    </div>
                    
                    {/* Vital 3 */}
                    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md">
                      <FaHeart className="text-green-500 text-2xl mb-2"/>
                      <p className="text-sm font-semibold">Temperature</p>
                      <p className="text-lg font-bold">36.8°C</p>
                    </div>
                    
                    {/* Vital 4 */}
                    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md">
                      <FaHeart className="text-yellow-500 text-2xl mb-2"/>
                      <p className="text-sm font-semibold">Respiratory Rate</p>
                      <p className="text-lg font-bold">16 breaths/min</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className='w-[50%] h-[60vh] rounded-lg border shadow-lg flex items-center justify-center '>
                <YourStart/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientDetails