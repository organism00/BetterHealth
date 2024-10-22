import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavBar from '../Components/Navbar';
import SideBar from '../Components/SideBar';
import YourStart from '../Components/Patients/YourStart';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Images
import proimage from '../assets/Images/first.png';
import bgImage from '../assets/Images/bgImage.avif';
import patient from '../assets/Images/patient.jpeg'

// Icons
import { GoHome } from "react-icons/go";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineWeekend } from "react-icons/md";
import { FaFileMedical } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { GiWeight } from "react-icons/gi";
import { IoIosMan } from "react-icons/io";
import { TbWaveSawTool } from "react-icons/tb";
import { GoSidebarExpand } from "react-icons/go";
import { IoMdCloseCircleOutline } from "react-icons/io";


const diseaseHistory = [
  { 
    name: 'Diabetes', 
    date: 'Mon, 18 Mar 2021, 11:15 AM', 
    story: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit explicabo aliquam dolorum quam impedit minus optio voluptates facilis quis consequuntur autem doloremque sint, aspernatur, sequi saepe. Cum eligendi iure explicabo repellat! Quisquam dicta odio aliquam est quia ad tempora exercitationem numquam vitae vero, fugit perspiciatis, aperiam iure veritatis officiis! Ratione ad ab iste sapiente harum officia voluptatum id assumenda neque, nobis totam? Numquam aliquam at earum maiores repudiandae iste dicta mollitia, nobis quia eveniet vel eaque quod dolores? Quos rem explicabo ipsam laborum vel necessitatibus quis repudiandae possimus id, consectetur dignissimos beatae iste provident libero cumque, expedita ducimus. Dolorum expedita ratione earum ut molestias dicta ex dignissimos odit culpa asperiores suscipit libero blanditiis saepe neque veritatis adipisci, beatae nam debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus autem repellat dolore ullam voluptatibus eum itaque omnis ipsam, laudantium suscipit quae a, aliquid non et expedita nulla deleniti.'
  },
  { 
    name: 'Sleep Problem', 
    date: 'Tue, 21 Jun 2020, 03:22 PM', 
    story: 'Sleep problems are disturbances in sleep patterns which affect health, leading to issues like insomnia, sleep apnea, or restless legs syndrome. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit explicabo aliquam dolorum quam impedit minus optio voluptates facilis quis consequuntur autem doloremque sint, aspernatur, sequi saepe. Cum eligendi iure explicabo repellat! Quisquam dicta odio aliquam est quia ad tempora exercitationem numquam vitae vero, fugit perspiciatis, aperiam iure veritatis officiis! Ratione ad ab iste sapiente harum officia voluptatum id assumenda neque, nobis totam? Numquam aliquam at earum maiores repudiandae iste dicta mollitia, nobis quia eveniet vel eaque quod dolores? Quos rem explicabo ipsam laborum vel necessitatibus quis repudiandae possimus id, consectetur dignissimos beatae iste provident libero cumque, expedita ducimus. Dolorum expedita ratione earum ut molestias dicta ex dignissimos odit culpa asperiores suscipit libero blanditiis saepe neque veritatis adipisci, beatae nam debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus autem repellat dolore ullam voluptatibus eum itaque omnis ipsam, laudantium suscipit quae a, aliquid non et expedita nulla deleniti. Dolore repellendus possimus beatae.' 
  },
  { 
    name: 'Dental Care', 
    date: 'Wed, 15 Mar 2020, 02:11 PM', 
    story: 'Dental care involves the prevention and treatment of oral health problems such as cavities, gum disease, and tooth loss. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit explicabo aliquam dolorum quam impedit minus optio voluptates facilis quis consequuntur autem doloremque sint, aspernatur, sequi saepe. Cum eligendi iure explicabo repellat! Quisquam dicta odio aliquam est quia ad tempora exercitationem numquam vitae vero, fugit perspiciatis, aperiam iure veritatis officiis! Ratione ad ab iste sapiente harum officia voluptatum id assumenda neque, nobis totam? Numquam aliquam at earum maiores repudiandae iste dicta mollitia, nobis quia eveniet vel eaque quod dolores? Quos rem explicabo ipsam laborum vel necessitatibus quis repudiandae possimus id, consectetur dignissimos beatae iste provident libero cumque, expedita ducimus. Dolorum expedita ratione earum ut molestias dicta ex dignissimos odit culpa asperiores suscipit libero blanditiis saepe neque veritatis adipisci, beatae nam debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus autem repellat dolore ullam voluptatibus eum itaque omnis ipsam, laudantium suscipit quae a, aliquid non et expedita nulla deleniti. Dolore repellendus possimus beatae.'
  },
  { 
    name: 'Diabetes', 
    date: 'Sun, 11 Jan 2020, 12:24 PM', 
    story: 'Managing diabetes requires monitoring blood sugar levels, maintaining a healthy diet, and possibly insulin therapy. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit explicabo aliquam dolorum quam impedit minus optio voluptates facilis quis consequuntur autem doloremque sint, aspernatur, sequi saepe. Cum eligendi iure explicabo repellat! Quisquam dicta odio aliquam est quia ad tempora exercitationem numquam vitae vero, fugit perspiciatis, aperiam iure veritatis officiis! Ratione ad ab iste sapiente harum officia voluptatum id assumenda neque, nobis totam? Numquam aliquam at earum maiores repudiandae iste dicta mollitia, nobis quia eveniet vel eaque quod dolores? Quos rem explicabo ipsam laborum vel necessitatibus quis repudiandae possimus id, consectetur dignissimos beatae iste provident libero cumque, expedita ducimus. Dolorum expedita ratione earum ut molestias dicta ex dignissimos odit culpa asperiores suscipit libero blanditiis saepe neque veritatis adipisci, beatae nam debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus autem repellat dolore ullam voluptatibus eum itaque omnis ipsam, laudantium suscipit quae a, aliquid non et expedita nulla deleniti. Dolore repellendus possimus beatae.'
  }
];

function PatientDetails() {
  const [selectedStory, setSelectedStory] = useState(diseaseHistory[0].story);
  const [disease, setDisease] = useState(diseaseHistory[0].name);
  const [isMore, setIsMore] = useState(false);
  const [openBookVitalsModal, setOpenBookVitalsModal] = useState(false)
  const [openEmrModal, setOpenEmrModal] = useState(false)

  const handleBookVitalsModal = () => {
    setOpenBookVitalsModal(true)
  }
  const handleEmrModal = () => {
    setOpenEmrModal(true)
  }

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
  const handleDiseaseClick = (story, name) => {
    setSelectedStory(story);
    setDisease(name)
  };
  return (
    <div className="flex flex-col gap-0 lg:flex-row py-4 md:px-0 ">
      <SideBar/>
      <NavBar/>

      <div className='fixed right-0 top-[50%] p-2 rounded-lg text-[24px] z-20 bg-primary'
        onClick={() => setIsMore(!isMore)}
      >
        <GoSidebarExpand className='text-white cursor-pointer'/>
      </div>
        {isMore && (
          <div className='fixed right-4 top-[57.5%] z-20 bg-white rounded-lg border p-4 shadow-xl flex flex-col gap-2 text-[14px]'>
            <Link to={'#'} className='hover:text-primary'>Previous surgery</Link>
            <Link to={'#'} className='hover:text-primary'>Allergies</Link>
            <Link to={'#'} className='hover:text-primary'>Current medication</Link>
            <Link to={'#'} className='hover:text-primary'>Payment history</Link>
            <Link to={'#'} className='hover:text-primary'>Insurance (HMO)</Link>
          </div>
        )}

      <div className='mt-20 lg:mx-4 w-full'>
        <div className='flex gap-x-5 py-4 lg:px-0 md:px-8 md:ml-64 lg:ml-0 '>
          <h1 className="text-2xl">Pateint details</h1>
          <div className="flex gap-2 items-center">
            <Link to='/admindashboard'><GoHome/></Link>
            <p className="font-thin"> - Patient details</p>
          </div>
        </div>

        <div className='flex gap-4 flex-col lg:flex-row p-4 lg:p-0 '>
          {/* side 1 */}
          <div className='lg:w-[33.33%] w-[100%] flex flex-col gap-4 '>
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
            <div className='shadow-lg border rounded-lg '>
              <div className='p-4 border-b'>
                <p className='text-[20px] '>Medical History</p>
              </div>
              <div className='flex items-center lg:justify-center p-4 '>
              <div className="space-y-0">
                  {diseaseHistory.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 cursor-pointer "
                      onClick={() => handleDiseaseClick(item.story, item.name)}
                    >
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <div className="w-14 h-14 bg-primary hover:bg-primaryhover transition-all text-white rounded-full flex items-center justify-center">
                          <FaHeart className='text-[20px] ' />
                        </div>
                        {index < diseaseHistory.length - 1 && (
                          <div className="h-6 border-l-4 border-primary "></div>
                        )}
                      </div>
                      <div className='hover:text-primaryhover transition-all'>
                        <p className="font-medium ">{item.name}</p>
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
          <div className='w-[100%] lg:w-[66.67%] flex flex-col gap-4 '>
            {/* buttons */}
            <div className='flex flex-wrap gap-2 items-center justify-between'>
              <button className='flex items-center px-4 py-2 bg-primary hover:bg-primaryhover transition-all text-white rounded-lg'><FaRegEdit/>Edit Profile</button>
              <div className='flex items-center gap-2'>
                <button className='flex gap-2 items-center px-4 py-2 bg-primary hover:bg-primaryhover transition-all text-white rounded-lg'
                  onClick={handleBookVitalsModal}
                ><FaFileMedical/>Book Vitals Check</button>
                <button className='flex gap-2 items-center px-4 py-2 bg-primary hover:bg-primaryhover transition-all text-white rounded-lg'
                  onClick={handleEmrModal}
                ><MdOutlineWeekend/>Create EMR</button>
              </div>
            </div>

            {/* details and story */}
            <div className='rounded-lg shadow-lg border items-center justify-center relative'>
              <div className='h-40 w-[100%]'>
                <img src={bgImage} alt="" className='object-cover w-[100%] h-[100%] ' />
              </div>

              {/* Patient name and image */}
              <div className='flex gap-4 items-center absolute left-6 top-[130px]'>
                <div>
                  <div className='w-[100px] h-[100px] rounded-xl overflow-hidden border shadow-lg '>
                    <img src={patient} alt=""  className='h-[100%] w-[100%] object-cover '/>
                  </div>
                  <div className='text-center'>
                    <p>Disease</p>
                    <p className='font-medium text-14px '>{disease}</p>
                  </div>
                </div>
                <div>
                  <h1 className='font-medium text-[2vmax] '>Patient Name</h1>
                  <p className='font-medium text-[1.5vmax] '>#p-patientID</p>
                  <p className='flex items-center gap-1 '><IoMdTime/> Admin on 15 October 2024, 10:00 AM</p>
                </div>
              </div>

              {/* Disease story */}
              <div className='p-4 mt-32 '>
                <h2 className='font-medium mb-4 '>Story About Disease</h2>
                <p className='text-[12px]'>{selectedStory}</p>
              </div>
            </div>

            {/* vitals and statistics */}
            <div className='flex flex-col lg:flex-row justify-between gap-4 '>
              {/* Vitals */}
              <div className='w-[100%] lg:w-[50%] rounded-lg border shadow-lg '>
                <div className='border p-4 space-y-4'>
                  <div className='py-4 border-b'>
                    <h3 className="text-xl font-semibold mb-4">Patient Vitals</h3>
                  </div>
                  <div className="flex justify-between ">
                    {/* Vital 1 */}
                    <div className="flex flex-col items-center justify-center border p-4 lg:p-2">
                      <GiWeight className="text-red-500 text-4xl mb-2"/>
                      <p className="text-[10px]">Weight</p>
                      <p className="text-lg font-bold">230 ibs</p>
                    </div>
                    
                    {/* Vital 2 */}
                    <div className="flex flex-col items-center justify-center border p-4 lg:p-2">
                      <IoIosMan className="text-[#e1ca58] text-[100px] mb-2"/>
                      <p className="text-[10px]">Height</p>
                      <p className="text-lg font-bold">{`6'1`}</p>
                    </div>
                    
                    {/* Vital 3 */}
                    <div className="flex flex-col items-center justify-center border p-4 lg:p-2">
                      <TbWaveSawTool className="text-green-500 text-6xl mb-2"/>
                      <p className="text-[10px]">BMI</p>
                      <p className="text-lg font-bold">30.34</p>
                    </div>
                  </div>
                  <div>
                    {/* Vital 4 */}
                    <div className="flex gap-4 flex-col justify-center border p-2">
                      <p className="text-[14px] text-red-600 ">Blood Pressure</p>
                      <div className='flex gap-4'>
                        <div className='flex items-center gap-1'>
                          <p className="text-[3vmax] font-bold">150</p>
                          <div>
                            <p className="text-[12px]">Systolic</p>
                            <p className="text-[12px]">mmHg</p>
                          </div>
                        </div>
                        <div className='flex items-center gap-1'>
                          <p className="text-[3vmax] font-bold">90</p>
                          <div>
                            <p className="text-[12px]">Diastolic</p>
                            <p className="text-[12px]">mmHg</p>
                          </div>
                        </div>
                      </div>
                      <p>Recorded on 25/10/2024</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className='w-[100%] lg:w-[50%] h-[60vh] rounded-lg border shadow-lg flex items-center justify-center '>
                <YourStart/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Vitals */}
      {openBookVitalsModal && (
        <div className='fixed w-[100%] h-[100%] flex items-center justify-center z-50 bg-[#00000066] '>
          <div className=' flex items-center justify-center w-[50vw] h-[80vh] bg-white p-14 relative'>
            <button className='bg-primary rounded-xl text-white p-2 text-[30px] shadow-lg absolute right-4 top-4 '
              onClick={() => setOpenBookVitalsModal(false)}
            ><IoMdCloseCircleOutline/></button>
            <form action="submit">
              <h1 className='text-2xl font-medium mb-4'>Book Vitals Check</h1>
              <input type="text" placeholder='Enter patient identification number' className='border p-3 rounded-lg w-[100%] ' />
              <select name="" id="" className='border mt-4 w-[100%] p-3 rounded-lg '>
                <option value="">Select Nurse</option>
                <option value="">Adenike Olawale</option>
                <option value="">Omowunmi Paul</option>
                <option value="">John Mark</option>
                <option value="">Peter Stones</option>
              </select>
              <button className='w-[100%] bg-primary text-white font-medium p-3 rounded-lg mt-4 hover:bg-primaryhover transition-all '>Book</button>
            </form>
          </div>
        </div>
      )}
      {/* Modal for EMR */}
      {openEmrModal && (
        <div className='fixed w-[100%] h-[100%] flex items-center justify-center z-50 bg-[#00000066] '>
          <div className=' flex items-center justify-center w-[50vw] h-auto bg-white px-14 py-10 relative'>
            <button className='bg-primary rounded-xl text-white p-2 text-[30px] shadow-lg absolute right-4 top-4 '
              onClick={() => setOpenEmrModal(false)}
            ><IoMdCloseCircleOutline/></button>
            <form action="submit" className='space-y-2'>
              <h1 className='text-2xl font-medium'>Create EMR</h1>
              <input type="text" placeholder='Enter patient identification number' className='border p-3 rounded-lg w-[100%] ' />
              {/* DATE */}
              <input type="date" className='border p-3 rounded-lg w-[100%]' />
              <input type="text" placeholder='Enter Diagnosis' className='border p-3 rounded-lg w-[100%] ' />
              <input type="text" placeholder='Enter patient treatment' className='border p-3 rounded-lg w-[100%] ' />
              <input type="text" placeholder='Enter patient prescribed medication' className='border p-3 rounded-lg w-[100%] ' />
              <input type="text" placeholder='Enter doctors note' className='border p-3 rounded-lg w-[100%] ' />
              <button className='w-[100%] bg-primary text-white font-medium p-3 rounded-lg mt-4 hover:bg-primaryhover transition-all'>Create EMR</button>
            </form>

          </div>
        </div>
      )}
    </div>
  )
}

export default PatientDetails