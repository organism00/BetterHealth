import React from 'react'

import {FaHome, FaTwitter, FaInstagram} from 'react-icons/fa'
import { TiSocialFacebook } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import Map from './Map';
import doctor1 from '../assets/images/doctor.png'
import rating from '../assets/images/stars.jpg'
import equipment from '../assets/images/Hospital equipment.jpeg'
import male from '../assets/images/male.jpeg'
import { LuClock4 } from "react-icons/lu";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Chat from './Chat';
import DonutChart from './DonutChart';
import { IoIosSearch } from "react-icons/io";
import weight from '../assets/images/weight.png'
import human from '../assets/images/human.png'
import bmi from '../assets/images/bmi.png'
import smoke from '../assets/images/smoking.png'
import { FaBook } from "react-icons/fa";





const PatientDetail = () => {
    const containerStyle = {
        width: '100%',
        height: '400px'
      };
      
      const center = {
        lat: -3.745,
        lng: -38.523
      };
      
  return (
    <>
    <div className="grid grid-cols-[16rem_1fr]" >
      
     <main className="col-start-2 bg-white h-screen ">
      
      
     <div className="w-[100%]  mx-auto mt-20 p-4 border ">
     {/* patient Details */}
     <div className=' w-[95%] lg:w-[25%]   flex justify-between pl-6' >
     <h1 className='font-semibold'>Patient Details</h1>
     <div className='flex justify-between text-[15px] '>
     <FaHome className='mt-1' />
     <p className='ml-1'>- Patient Details </p>
     </div>
     </div>
     {/* flex divs */}

     <div className='flex flex-col lg:flex-row w-[100%] justify-between pt-4  pl-6'>
     {/* 1st div */}
    <div className=' w-[95%] lg:w-[35%] space-y-4 flex flex-col' >
    <div className='bg-white w-[100%] h-[430px] shadow-lg border-2 border-shadow-lg rounded-md flex flex-col space-x-4 space-y-4 '>
    <div className='flex flex-col space-y-2 space-x-6 '>
    <p className='ml-6 mt-6'>Email: David@yahoo.com</p>
    <p>Pone: +11 123 456 7890</p>
    <p>Address :123, Lorem Ipsum, Florida, USA</p>
    <p>Social Profile</p>
    <div className='w-[35%] flex justify-between'>
    <div className='w-10 h-10 bg-blue-800 hover:bg-blue-900 rounded-full flex justify-center items-center '>
    <TiSocialFacebook className='w-6 h-6 text-white  ' />
    </div>
    <div className='w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex justify-center items-center' >
    <FaTwitter className='w-4 h-4 text-white' />
    </div>
    <div className='w-10 h-10 bg-pink-600 hover:bg-pink-800 rounded-full flex justify-center items-center'>
    <FaInstagram  className='w-4 h-4 text-white'/>
    </div>
    </div>
    </div>
    <Map />
    </div>
    {/* disease history */}
    <div className='bg-white w-[100%] h-[430px] shadow-lg border-2 border-shadow-lg rounded-md flex flex-col space-x-4 space-y-4 ' >
    <div className='w-[50%] font-bold text-[20px] text-gray-600 text-center pt-4'>
    Disease History
    </div>
    {/* info divs */}
    <div className='text-gray-500'>
    {/* diabetes */}
    <div className='w-[90%]  flex  ' >
    <div className='w-[20%] '>
    <div className='w-12 h-12 bg-blue-800 rounded-full flex justify-center items-center' >
    <CiHeart className='w-8 h-8 text-white font-bold' />
    </div>
    <div className=' w-12 flex justify-center items-center' >
    <div className='w-1 h-8 bg-blue-800 '></div> 
    </div>
    </div>
    <div >
    <h1 className='font-semi-bold text-[20px] '>Diabetes</h1>
    <p>Mon, 18, Mar,2021, 11:15 AM </p>
    </div>
    </div>
    {/* sleep problem */}
    <div className='w-[90%]  flex  ' >
    <div className='w-[20%] '>
    <div className='w-12 h-12 bg-blue-800 rounded-full flex justify-center items-center' >
    <CiHeart className='w-8 h-8 text-white font-bold' />
   </div>
   <div className=' w-12 flex justify-center items-center' >
   <div className='w-1 h-8 bg-blue-800 '></div> 
   </div>
   </div>
   <div >
   <h1 className='font-semi-bold text-[20px] '>Sleep Problem</h1>
   <p>Tue, 21, June,2020, 03:22 PM </p>
   </div>
   </div>
   {/* Dental care */}
   <div className='w-[90%]  flex  ' >
   <div className='w-[20%] '>
   <div className='w-12 h-12 bg-blue-800 rounded-full flex justify-center items-center' >
   <CiHeart className='w-8 h-8 text-white font-bold' />
   </div>
   <div className=' w-12 flex justify-center items-center' >
   <div className='w-1 h-8 bg-blue-800 '></div> 
   </div>
   </div>
   <div >
   <h1 className='font-semi-bold text-[20px] '>Dental Care</h1>
   <p>Wed, 15, Mar,2020, 02:11 PM </p>
   </div>
   </div>
    {/* diabetes */}
   <div className='w-[90%]  flex  ' >
   <div className='w-[20%] '>
   <div className='w-12 h-12 bg-blue-800 rounded-full flex justify-center items-center' >
   <CiHeart className='w-8 h-8 text-white font-bold' />
   </div>
   </div>
   <div >
   <h1 className='font-semi-bold text-[20px] '>Diabetes</h1>
   <p>Sun, 11, Jan,2020, 12:24 PM </p>
   </div>
   </div>
   </div>
   </div>
   {/* Assigned Doctor */}
   <div className='bg-white text-gray-600 w-[100%]  shadow-lg border-2 border-shadow-lg rounded-md flex flex-col   ' >
   <div className=' pt-6 w-[50%] font-bold text-[20px] text-gray-600 text-center pl-4'>Assigned Doctor</div>
   <hr className='mt-6'  />
   <div className='flex w-[90%] pt-6 pl-4 '>
   <div className='w-[40%] flex justify-center items-center pt-6 rounded-md  bg-violet-300'>
   <img src={doctor1} alt="" className='w-[100%]' />
   </div>
   <div className=' ml-4 mt-2'>
   <h1 className='font-semi-bold text-[20px]'>Dr. Johen Doe</h1>
   <p>Physician</p>
   <img src={rating} alt="" className='w-20 h-20' />
   </div>
   </div>
   <div>
   <div className='w-[95%] flex justify-between pt-4 pl-4'>
   <div className='w-[40%] h-[40px] bg-pink-200 hover:bg-red-500 text-red-500 hover:text-pink-200 rounded-md flex justify-center items-center'>Unassign</div>
   <div  className='w-[40%] h-[40px] bg-green-50 hover:bg-green-900 text-green-900 hover:text-pink-200 rounded-md flex justify-center items-center' >Check</div>
   </div>
   </div>
   </div>
   </div>
   {/* 2nd div */}
   <div className=' w-[95%] lg:w-[63%] space-y-4 flex flex-col'>
   {/* edit profile div */}
   <div className='w-full  flex flex-col lg:flex-row justify-between pl-4 lg:pl-0 pt-2 lg:pt-0' >
   <div  className=' w-[35%] lg:w-[20%] h-[40px] bg-blue-800 hover:bg-blue-900 text-white  rounded-md flex justify-center items-center'>
   <FaRegEdit  />
   <p className='ml-1'>Edit Profile</p>
   </div>
   <div className='w-[70%] lg:w-[52%]  flex justify-center pt-2 lg:pt-0 '>
   <div  className='w-[50%] h-[40px] bg-white-800 border-[1px] border-red-500 hover:bg-red-500 text-red-500 hover:text-white  rounded-md flex justify-center items-center'>
   <FaBook />
   <p className='ml-1'>View Appointment</p>
   </div>
   <div  className='w-[55%] h-[40px] ml-2 bg-green-700 hover:bg-green-900 text-white  rounded-md flex justify-center items-center'>
   <FaBook />
   <p className='ml-1'>View Medical Record</p>
   </div>
   </div>
   </div>
    {/* pic div */}
    <div className='bg-white w-[100%]  shadow-lg border-2 border-shadow-lg rounded-md flex  flex-col   '>
     {/* equipment */}
     <div className='bg-full h-[200px] '>
      <img src={equipment} alt="" className='w-full h-[200px] rounded-md' />
     </div>
     {/* other pic */}
   <div  className='w-[70%] h-[150px] text-gray-600  flex justify-between mt-[-30px] pl-6 ' >
        <div className='flex flex-col text-center '>
          <img src={male} alt="" className=' rounded-md' />
          <p className='mt-2  '>Disease</p>
          <p className='text-[20px] font-semibold'> Cold & Flu</p>
        </div>
        <div className='flex text-gray-600 flex-col justify-center '>
          <h1 className='text-[20px] font-semibold' >Mical Doe</h1>
          <p className='font-semibold' >#p- 12458796</p>
          <div className='flex'>
          <LuClock4 className='mt-1' />
            <p className='ml-1'>Admin on 15 May 2021, 10:00 AM</p>
          </div>
        </div>
        
   </div>
   <div className='w-[95%] pl-6 mt-[70px] text-gray-600 space-y-1'>
    <h1  className='text-[20px] font-semibold' >Story About Disease</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam 
    eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    
    </div>
   </div>
    
   {/* stat div */}
   <div className='w-[100%] lg:flex justify-between ' >
    {/* sub div1 */}
    <div className='bg-white text-gray-600 w-[100%] h-[300px] shadow-lg border-2 border-shadow-lg rounded-md flex flex-col   ' >
   <div className=' w-[95%] font-bold text-gray-600  flex justify-between items-center pt-4 pl-4 '>
       <p className='text-[20px'>Current Vitals</p>
       <div className='w-[30%] h-[30px] bg-slate-100 rounded-full flex justify-end items-center' >
       <IoIosSearch className='mr-2' />
       </div>
     </div>
   <hr className='mt-4'  />
    <div className='w-[100%] flex'>
      <div className='w-[35%] h-[110px] bg-white border-[1px] flex justify-evenly pt-4  '>
        <div>
          <img src={weight} alt="" className='mt-1' />
          <p className='pt-1 text-[15px] font-bold text-blue-950'>ibs</p>
        </div>
        <div >
          <p>weight</p>
          <p className='pt-1 text-[15px] font-bold text-blue-950' >230</p>
        </div>
      </div>
      <div className='w-[35%] h-[110px] bg-white border-[1px] flex justify-center pt-3 '>
        <img src={human} alt="" className='w-3=[40%%] h-[90px] mt-1' />
        <div className='ml-1'>
          <p>Height</p>
          <p className='pt-1 text-[15px] font-bold text-blue-950' >6'1</p>
        </div>
      </div>
      <div className='w-[35%] h-[110px] bg-white border-[1px] flex pl-4 pt-4  '>
        <div>
          <img src={bmi} alt="" className='mt-1' />
          <p className='pt-1 text-[15px] font-bold text-blue-950'>30.34</p>
        </div>
       
          <p >BMI</p>
         
       
      </div>
    </div>
    <p className='pt-1 text-red-600 pl-2'>blood pressure</p>
    <div className='w-[100%] flex pl-2 mt-2'>
      <div className='w-full '>
        <div className='w-[25%] h-2 rounded-full bg-green-800'></div>
        <div className='flex w-[20%]'>
          <h1 className='text-[25px] font-bold text-blue-900'>150</h1>
          <div className='ml-2 text-[10px] mt-2'>
            <p>Systolic</p>
            <p>mmHg</p>
          </div>
        </div>
      </div>
      <div className='w-full pl-4  '>
        <div className='w-[25%] h-2 rounded-full bg-green-800'></div>
        <div className='flex '>
          <h1 className='text-[25px] font-bold text-blue-900'>90</h1>
          <div className='ml-2 text-[10px] mt-2'>
            <p>Systolic</p>
            <p>mmHg</p>
          </div>
        </div>
      </div>
    </div>
       <p className='text-[10px] text-gray-600 pl-4 pt-1'>Recorded on 25/05/2018 </p>
   </div>

    {/* <div className='bg-white text-gray-600 w-[100%] h-[300px] shadow-lg border-2 border-shadow-lg rounded-md' ></div> */}
    {/* sub-div2 */}
    <div className='bg-white text-gray-600 w-[100%] h-[300px] shadow-lg border-2 pt-2 pl-2 flex flex-col border-shadow-lg rounded-md mt-2 lg:mt-0' >
      <div className='text-[20px] font-semibold '>Your Statistic</div>
     <div className='w-[100%] mt-4'>
     <DonutChart />
     </div>
    </div>
    </div>
    <div className='w-[95%] lg:w-[50%] bg-blue-800 h-[60px] text-white rounded-md '>
    <div className='flex justify-center pt-2  '>
    <img src={smoke} alt="" />
    <p className='ml-2 pt-1'>Smoking Status : current every day</p>
    </div>
    <p className='text-center w-[60%]  flex justify-center '>smoker</p>
    </div>
    
   </div>
    </div>
   </div>
   </main>
  </div>
  
  <Chat/>
 
   
    
    </>
  )
}

export default PatientDetail