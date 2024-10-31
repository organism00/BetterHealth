import React from 'react'
import { Link } from 'react-router-dom'
import SideBar from '../Components/SideBar'
import Navbar from '../Components/Navbar'
import HeartRateChart from '../Components/HeartRateChart'
import Fever from '../Components/Fever'
import  HeartECGChart from '../Components/HeartECGChart'
import SearchBar from '../Components/SearchBar'



const Patientdashboard = () => {
    return (
        <>
        <div className="lg:grid lg:grid-cols-[16rem_1fr] z-0">
            <SideBar />
            <main className="col-start-2  h-full w-full md:w-[70%] lg:w-full mt-12 lg:mt-0 md:mt-0">
              <Navbar />
            </main>
        </div>
            <div className="lg:hidden flex flex-col md:flex md:flex-col py-8 md:py-20 ">
                <div className=' w-[100vw] h-auto bg-yellow-400 md:bg-red-600 md:w-[100vw] md:h-auto'>
                    {/* heading */}
                    <div className='flex flex-row py-5 px-5 justify-between md:py-5 md:px-11'> 
                        <div >
                            <h1 className='text-[32px] md:text-5xl md:py-2 '>Johen doe</h1>
                        </div>
                        <div>
                            <div className=" w-[40vw] h-[7vh] md:w-[30vw] md:h-[6vh] bg-indigo-700 rounded-md flex gap-2 justify-center py-3 px-2 md:py-4">
                                <div>
                                     <img src="src/assets/Images/plus (2).png" alt="" className='w-[10px] h-[10px] mt-2 md:w-[20px] md:h-[20px]'/>
                                </div>
                                <div>
                                    <Link className=' flex justify-center ' to={`/Patientdashboard`}> 
                                    <h1 className=' text-white  whitespace-nowrap md:text-2xl'> <h1>Add Record</h1></h1>
                                    </Link>
                                </div>  
                            </div>
                        </div>
                    </div>

                   
                    <div className='w-auto h-auto flex flex-col items-center justify-evenly space-y-4'>
                         {/* content 1*/}
                        <div className='bg-indigo-800 w-[90vw] h-[40vh]  md:h-[37vh] md:bg-indigo-800 shadow-md rounded-xl flex flex-col px-4 border-t-2' >
                            <div className='flex justify-between px-3 py-5 md:px-6 md:py-6'>
                                <div>
                                    <h1 className='font-semibold text-white md:text-2xl'>Heart Rate</h1>
                                </div>
                                <div>
                                    <img src="src/assets/Images/like.png" alt="" className='w-[4vw] h-[2vh] mt-4 md:w-[4vw] md:h-[3vh]'/>
                                </div>
                            </div>
                            <div className='px-3 font-semibold text-white mt-[-13px] md:text-xl md:px-6'>
                                <h1>75/118</h1>
                            </div>        
                            <div className='ml-[-24px] py-8 md:px-6 md:w-[97vw] md:h-[9vh]'>
                            <HeartRateChart/>
                            </div>
                        </div>

                       {/* content 2*/}
                        <div className='bg-white w-[90vw] h-[39vh] md:h-[37vh] shadow-md rounded-xl flex flex-col px-5 py-2 justify-evenly border-t-2'>
                       
                            <div className='flex justify-between px-3 py-5'>
                                <div>
                                    <h1 className='font-semibold md:text-2xl'>Fever</h1>
                                </div>
                                <div>
                                    <img src="src/assets/Images/like (1).png" alt="" className='w-[4vw] h-[2vh] mt-4 md:w-[4vw] md:h-[3vh]'/>
                                </div>
                            </div>

                            <div className='px-3 font-semibold mt-[-13px]'>
                                <h1 className='sup text-sm md:text-xl'>100.8 <span>&#176;</span>F</h1>
                            </div>
           
                            <div className='ml-[-24px] py-8 md:w-[90vw] md:px-2'>
                                <Fever/>
                            </div>
                        </div>

                        {/* content 3 */}
                        <div className='bg-white w-[90vw] h-[22vh] lg:h-[25vh] lg:w-[10vw] shadow-md rounded-xl flex flex-col px-6 py-6 justify-evenly border-t-2'>
                            <div className='flex justify-between '>
                                <h1 className='text-[20px] md:text-xl md:font-semibold'>Blood Pre..</h1>
                                <img src="src/assets/Images/heartbeat.png" alt="" className='w-[5vw] h-[3vh] md:w-[4vw] md:h-[3vh]' />
                            </div>
                            <div className='flex justify-between'>
                                <h1 className='text-[18px] font-medium md:text-xl md:font-semibold'>75</h1>
                                <h1 className='md:font-normal md:text-[18px]'>Upper</h1>
                            </div>
                             <div className='flex justify-between'>
                                <h1 className='text-[18px] font-medium md:text-xl md:font-semibold'>124</h1>
                                <h1 className='md:font-normal md:text-[18px]'>Lower</h1>
                            </div>
                        </div>

                        {/* content 4 */}
                        <div className='bg-white w-[90vw] h-[14vh] shadow-md rounded-xl flex flex-col px-6 py-4 justify-evenly border-t-2'>
                            <div className='flex justify-between'>
                                <h1 className='text-[20px] md:text-xl md:font-semibold'>Bill Due</h1>
                                <img src="src/assets/Images/wallet.png" alt="" className='w-[4vw] h-[18px] md:w-[20px] md:h-[24px]' />
                            </div>
                            <div className='text[18px] font-light md:text-[18px]'>
                                $214.86
                            </div>
                        </div>

                        {/* content 5 */}
                        <div className='bg-white w-[90vw] h-[20vh] shadow-md rounded-xl flex flex-col border-t-2 px-6 py-3 justify-evenly'>
                            <h1 className='text-[20px] md:text-xl md:font-semibold'>
                                Fever History
                            </h1>
                            <select className='text-black w-32 text-[14px] h-5' name="">
                                <option value="">1 to 10 Jan'21</option>
                                <option value="">11 to 31 Jan '21</option>
                                <option value="">1 to 15 Feb '21</option>
                                <option value="">16 t0 18 Feb '21</option>
                            </select>
                            <div className='flex flex-row justify-between'>         
                                <div className='flex  text-red-600 '>
                                    <h1 className='text-[24px] font-semibold md:text-[25px]'>
                                        99
                                    </h1>
                                    <h1 className='text-[12px] leading-6 font-bold md:text-[15px] '>
                                        +12%
                                    </h1>
                                </div>
                                <div>
                                    <h1 className='text-[15px] md:text-[20px]'>Yesterday</h1>
                                </div>
                            </div>
                        </div>

                        {/* content 6 */}
                        <div className='bg-white w-[90vw] h-[14vh] shadow-md rounded-xl px-6 py-2 flex flex-col border-t-2 '>
                            <div className='flex flex-row justify-between'>
                                <h1><img src="src/assets/Images/doctor.png" alt="" className='w-8 h-6 mt-6 '/></h1>
                                <div className='py-3 px-1'>
                                    <h1 className='text-[18px] text-blue-600 font-semibold md:text-xl'>Johen Mark</h1> 
                                    <h1 className='float-end px-2 font-light text-gray-500 md:text-[18px]'>My Doctor</h1>    
                                </div>
                            </div>
                        </div>

                        {/* content 7 */}
                        <div className='bg-white w-[90vw] h-[37vh] md:h-[46vh] shadow-md rounded-xl flex flex-col py-5 md:px-6 md:py-6 space-y-2 border-t-2 px-2 '>
                            <div className='px-4'>
                                <h1 className='text-[20px]'>Heart ECG</h1>
                            </div>            
                            <div className='flex flex-row justify-between px-3 '>
                                <div>
                                    <select className='text-black text-[14px] w-36 h-6 md:text-[17px]' name="">
                                        <option value="">1 to 10 Jan'21</option>
                                        <option value="">11 to 31 Jan '21</option>
                                        <option value="">1 to 15 Feb '21</option>
                                        <option value="">16 t0 18 Feb '21</option>
                                    </select>                       
                                </div>  
                                <div className='w-[38vw] h-[5vh] md:w-[22vw] md:h-[5vh] bg-blue-50 mt-[-10px] px-3 rounded-md flex justify-between leading-10 whitespace-nowrap'>
                                    <h1 className='text-blue-600 text-[14px] font-thin md:text-[18px]'>72 bmp </h1> 
                                    <h1 className='text-[14px] font-light md:text-[18px]'>Average</h1>
                                    </div>
                                </div>
                                <div className='w-[90vw] h-[4vh] px-6 md:w-[82vw] md:h-[10vh] md:py-2'>
                                    <HeartECGChart/>
                                </div>
                            </div>
                        </div>

                            {/* content 8 */}
                        <div className='space-y-4'>
                        <div className=' bg-white w-[90vw] h-[49vh] md:h-[47vh] shadow-md rounded-xl border-t-2 md:py-4'>
                                <div className='flex flex-col py-6 space-y-2 place-items-center '>
                                    <img src="src/assets/Images/doctor M.jpeg" alt="" className='w-[12vw] h-[6vh] md:w-[12vw] md:h-[9vh] md:rounded-full md:object-cover place-items-center object-cover rounded-full'/>
                                    <h1 className='text-[20px] md:text-[23px] md:font-semibold'>Dr. Poul Doe</h1>
                                    <h1 className='text-[14px] font-normal md:text-[18px] '>Heart Specialist</h1>
                                </div>

                                <div>
                                <div className=' w-[90vw] h-[1px] bg-slate-300'></div>
                                </div>
               
                                <div className=' flex flex-row px-5 py-8 gap-8 md:px-8 md:flex md:gap-28 md:justify-center'>
                                    <div className=' flex gap-3 md:gap-6'>
                                        <img src="src/assets/Images/surgery-room.png" alt="" className='w-[13vw] h-[7vh] md:w-[6vw] md:h-[6vh] md:object-cover'/>
                                        <div className='flex flex-col  '>
                                            <h1 className='text-3xl'>10</h1>
                                            <h1 className='text-[14px] font-thin md:text-xl'>Operation</h1>
                                        </div>
                                    </div>
                                    <div className='w-[1px] h-[10vh] bg-slate-300'></div>
                                    <div  className='flex gap-3'>
                                        <img src="src/assets/Images/patient.png" alt=""  className='w-[11vw] h-[7vh] md:w-[6vw] md:h-[5vh] md:object-cover'/>
                                        <div className=' flex flex-col'>
                                            <h1 className='text-3xl'>47</h1>
                                            <h1 className='text-[14px] font-thin md:text-xl'>Patients</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flew-row justify-center'>
                                    <button className='w-[80vw] h-[6vh] rounded-lg shadow-md bg-indigo-200  justify-between'>
                                        <div className='flex justify-center gap-2'>
                                            <div className='py-2'> 
                                                <img src="src/assets/Images/message (1).png" alt="" className='w-[2vw] h-[2vh] md:w-[2vw] md:h-[2vh]'/>

                                            </div>
                                            <div className='px-2 text-indigo-700 text-2xl'>
                                                <h1 className='text-[16px] md:text-[25px]'>Messages</h1>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* content 9  */}
                            <div className='bg-white w-[90vw] h-[53vh] md:h-[46vh] shadow-md rounded-xl flex flex-col py-5 space-y-4 border-t-2 md:space-y-6'>
                                <div className='flex justify-between px-4 md:px-10'>
                                    <h1 className='text-[22px] md:text-2xl'>Current Vitals</h1>
                                    <div className='justify-between'>
                                        {/* <div> 
                                            <SearchBar/>
                                        </div>
                                        <div className='pl-[75px] -mt-5'>
                                            <img src="src/assets/Images/loupe.png" alt="" className='w-[2vh] h-[2vh]  md:w-[1vw] md:h-[1vh]'/>     
                                        </div> */}
                                    </div>
                                </div>
                                <div>
                                    <div className='w[70vw] h-[1px] bg-gray-300 md:w-[90vw]'></div>
                                </div>
                                <div className=' flex gap-16 px-4 md:flex md:justify-between md:px-10'>
                                    <div className='flex flex-col justify-between '>
                                        <h1 className='text-gray-500 text-[15px] md:text-xl'>Patieny Name:</h1>
                                        <h1 className='font-bold text-[14px] md:text-xl'>Jonsahn</h1>
                                    </div>
                                    <div className='flex flex-col justify-between'>
                                        <h1 className='text-gray-500 text-[15px] md:text-xl'>Patieny Id:</h1>
                                        <h1 className='font-bold text-[14px] md:text-xl'>1254896</h1>
                                    </div>
                                </div>
                                <div>
                                    <div className='w-[90vw] h-[1px] bg-gray-300'></div>
                                </div>
                                <div className='flex flex-row md:flex md:justify-between md:px-10'>
                                    <div className=' flex px-4 gap-3'>
                                        <div className='flex flex-col md:flex md:flex-col'>
                                            <img src="src/assets/Images/weighing-machine.png" alt="" className='w-[9vw] h-[5vh]'/>
                                            <h1>ibs</h1>
                                        </div>
                                        <div className=' mt-[-8px]'>
                                            <h1 className='text-[12px]'>Weight </h1>
                                            <h1 className='text-[19px]'>230</h1>
                                        </div>                  
                                    </div>
                                    <div className='w-[1px] h-[9vh] bg-gray-300'></div>
                                        <div className='flex '>
                                            <div className='pr-3'>
                                                <img src="src/assets/Images/dude.png" alt="" className='w-[13vw] h-[9vh]'/>
                                            </div>
                                            <div className='mt-[-8px] pr-2'> 
                                                <h1 className='text-[12px]'>Height</h1>
                                                <h1 className='text-[19px]'>6'1</h1>
                                            </div>
                                        </div>
                                        <div className='w-[1px] h-[9vh] bg-gray-300'></div>
                                        <div className='flex'>
                                            <div className='px-2 '>
                                                <img src="src/assets/Images/statistic.png" alt="" className='w=[9vw] h-[5vh]'/>
                                                <h1 className='leading-4 text-[19px]'>30.34</h1>
                                            </div>
                                        <div className='pr-[4px] text-[13px] mt-[-8px]'>BMI</div>
                                    </div>
                                </div>
                                <div>
                                    <div className='w-[90vw] h-[1px] bg-gray-300'></div>
                                </div>
                                <div className='px-5 text-[12px] md:text-xl'>
                                    <h1>Recorded on 25/05/2020</h1>
                                </div>
                                <div className='py-2 '>
                                    <div className='w-[90vw] h-[12vh] md:h-[8vh] bg-indigo-500 rounded-lg py-2 px-4 flex gap-2 text-white text-[14px] md:py-4'>
                                        <img src="src/assets/Images/cigarette.png"  alt="" className='w-[9vw] h-[4vh] md:w-[4vw] md:h-[4vh]'/>
                                        <h1 className='text-white text-[14px] py-3 md:py-4 font-semibold md:text-[20px] '>Smoking Status: current every day smoker</h1>
                                    </div>
                                </div>
                            </div> 

                            {/* content 10 */}
                            <div className='bg-white w-[90vw] h-[24vh] md:h-[20vh] shadow-md rounded-xl border-t-2 px-4 py-5 md:py-7 md:px-8' >
                                <div className=''>
                                    <img src="src/assets/Images/blood.png" alt="" className='w-[2vw] h-[2vh] ml-2 md:w-[1vw] md:h-[1vh]' />
                                </div>
                                <div className='w-[14vw] h-[7vh] bg-indigo-500 md:w-[8vw] md:h-[6vh] rounded-full  '>
                                    <div className='pt-2'>
                                        <img src="src/assets/Images/record-button.png" alt="" className='w-[2vw] h-[1vh] ml-2 md:w-[1vw] md:h-[5px] md:ml-3'/>
                                        <img src="src/assets/Images/hand.png" alt="" className='w-[8vw] h-[4vh] md:w-[6vw] md:h-[4vh]'/>
                                    </div>

                                     <div className='mt-[-39px] ml-6  z-10 md:mt-[-50px]'> 
                                        <img src="src/assets/Images/blood-sugar-monitor.png" alt="" className='w-[13vw] h-[5vh] md:w-[7vw] md:h-[5vh]' />
                                    </div>
                                </div>
                                <div className='py-2 text-blue-600'>
                                    <h1 className=' text-[19px] font-sans md:text-[24px]'>Glucose Level </h1>
                                    <h1 className='text-2xl'> 85-89</h1>
                                </div>
                            </div>

                            {/* content 11 */}
                            <div className='bg-white w-[90vw] h-[22vh] md:h-[20vh] shadow-md rounded-xl flex flex-col py-6 px-5 border-t-2 md:px-8 md:py-9'>
                                <div>
                                    <img src="src/assets/Images/blood-test.png" alt="" className='w-[12vw] h-[7vh] md:w-[7vw] md:h-[5vh] md:rounded-full object-cover' />
                                </div>
                                <div className='py-2 text-blue-600'>
                                    <h1 className='text-[19px] font-sans md:text-[24px]'> Blood Count  </h1>
                                    <h1 className='text-2xl'>9.456/ml</h1>
                                </div>
                            </div>

                            {/* content 12 */}
                            <div className='bg-white w-[90vw] h-[19vh] md:h-[15vh] shadow-md rounded-xl border-t-2 flex py-9 px-5 gap-3 md:py-8'>
                                <div className='py-1'>
                                    <img src="src/assets/Images/doctor f.jpeg" alt="" className='w-[13vw] h-[7vh] rounded-full object-cover md:w-[9vw] md:h-[7vh] md:object-cover md:rounded-full' />
                                    </div>
                                <div className='flex flex-col text-blue-600'>
                                    <h1 className='text-[26px] md:text-4xl'>Dr. Kevin Black</h1>
                                    <h1 className='text-[17px] -mt-1 md:text-2xl'>Cardiologists</h1>
                                </div>
                            </div>
                            
                        </div>    
                            

                            <div className='hidden lg:bg-blue-900 lg:w-[100vw] lg:h-[100vh]'>
                            </div> 

                </div>


                {/* second div */}
                <div className=' lg:bg-green-500 lg:h-screen lg:w-[44vw] w-auto h-screen bg-purple-300'>
                   <div className=' text-[12px] lg:text-[24px]'>
                        <h1>good</h1>

                   </div>

                </div>
            </div>
               

                 
{/* 
<div className='hidden md:hidden lg:flex lg:flex-row lg:w-[60vw] lg:h-auto'>
    <div className='lg:flex lg:flex-col'>
    
    
    <div className='lg:w-[50vw] lg:h-screen lg:bg-white lg:flex lg:py-4 lg:px-5 lg:space-x-5 '>
        
        <div className='lg:w-[11vw] lg:h-[38vh] bg-indigo-700 lg:rounded-xl shadow-md lg:border-t-2 px-2 '>
            <div className='flex justify-between px-3 py-5'>
                <div>
                    <h1 className=' text-white text-[17px]'>Heart Rate</h1>
                </div>
                <div>
                    <img src="src/assets/Images/like.png" alt="" className='w-[1vw] h-[2vh] mt-5'/>
                </div>
            </div>

            <div className='px-3 text-white mt-[-16px] text-[15px]'>
                <h1>75/118</h1>
            </div>
           
            <div className='ml-[-24px] py-4'>
                <HeartRateChart />
            </div>
        </div>

        <div className='lg:w-[11vw] lg:h-[36vh] lg:bg-white lg:rounded-xl shadow-md lg:border-t-2'>
                <div className='flex justify-between px-3 py-5'>
                    <div>
                     <h1 className='font-semibold'>Fever</h1>
                    </div>
                    <div className='py-2'>
                        <img src="src/assets/Images/like (1).png" alt="" className='w-[1vw] h-[2vh]'/>
                    </div>
                </div>

                <div className='px-3 font-semibold  mt-[-13px]'>
                    <h1 className='sup text-sm'>100.8 <span>&#176;</span>F</h1>
                </div>
           
                <div className='ml-[-24px] py-8'>
                     <Fever/>
                </div>
          
        </div>

        <div className='lg:flex lg:flex-col space-y-5 '>
            <div className='lg:w-[11vw] lg:h-[23vh] bg-white rounded-md shadow-md lg:px-4 lg:py-5 lg:space-y-3 lg:border-t-2'>
                <div className='flex justify-between lg:space-y-3 '>
                    <h1>Blood <br /> Pre..</h1>
                    <div className='lg:py-2'>
                    <img src="src/assets/Images/heartbeat.png" alt="" className='lg:w-[1vw] lg:h-[2vh]' />

                    </div>
                </div>
                <div className='flex justify-between'>
                    <h1 className='lg:text-lg'>75</h1>
                    <h1 className='lg:font-light text-[15px]'>Upper</h1>
                </div>
                <div className='flex justify-between'>
                    <h1 className='lg:text-lg'>124</h1>
                    <h1 className='lg:font-light text-[15px]'>Lower</h1>
                </div>

            </div>

            <div className='lg:w-[11vw] lg:h-[13vh] bg-white rounded-md shadow-md lg:space-y-3 lg:py-4 lg:px-4 lg:border-t-2'>
                <div className=' flex justify-between'>
                    <h1 className='lg:text-xl'>Bill Due</h1>
                    <img src="src/assets/Images/wallet.png" alt="" className='w-[15px] h-[18px] mt-2' />
                </div>
                <div className='lg:font-light'>
                    $214.86
                </div>

            </div>
        </div>

        <div className='lg:flex lg:flex-col space-y-5 '>
            <div className='lg:w-[11vw] lg:h-[24vh] rounded-md bg-white shadow-md lg:px-2 lg:py-4 lg:space-y-3 lg:border-t-2' >
                <div>
                    <h1 className='lg:text-lg'>
                        Fever <br /> History
                    </h1>
                </div>
                <div>
                    <select className='text-black w-32  h-5 lg:font-light' name="">
                        <option value="">1 to 10 Jan'21</option>
                        <option value="">11 to 31 Jan '21</option>
                        <option value="">1 to 15 Feb '21</option>
                        <option value="">16 t0 18 Feb '21</option>

                    </select>
                </div>
                <div className='flex flex-row justify-between'>
                    
                    <div className='flex  text-red-600 '>
                        <h1 className='text-[24px] font-semibold'>
                             99
                        </h1>
                        <h1 className='text-[12px]  leading-6 font-bold '>+12%</h1>

                    </div>

                    <div>
                    <h1 className='lg:text-[14px]'>Yesterday</h1>
                    </div>
                </div>

            </div>

            <div className='lg:w-[11vw] lg:h-[15vh] bg-white rounded-md shadow-md lg:flex lg:px-2 lg:border-t-2'>
             <div className='lg:flex lg:flex-row lg:space-x-1'>
                <div>
                    <img src="src/assets/Images/doctor.png" alt="" className='lg:w-[2vw] lg:h-[3vh] mt-10 '/>

                </div>
                <div className='py-3 px-1 lg:flex lg:flex-col lg:pl-4'>
                        <h1 className='lg:text-lg text-blue-600 font-semibold'>Johen Mark</h1> 
                        <h1 className='float-end  whitespace-nowrap text-gray-400 font-light'>My Doctor</h1>    
                </div>
             </div>

            </div>
        </div>

       </div>

      <div className='lg:w-[50vw] lg:h-[70vh] bg-white lg:mt-[-380px] lg:px-5 lg:flex lg:space-x-4 px-4  '>
        <div className='lg:w-[26vw] lg:h-[50vh] bg-white rounded-md shadow-md lg:border-t-2 py-4'>
        <div className='px-4  text-xl'>
                    <h1>Heart ECG</h1>
                </div>            
                <div className='flex flex-row justify-between px-3 '>
                    <div className='py-6'>
                        <select className='text-black text-[18px] w-36  h-6' name="">
                            <option value="">1 to 10 Jan'21</option>
                            <option value="">11 to 31 Jan '21</option>
                            <option value="">1 to 15 Feb '21</option>
                            <option value="">16 t0 18 Feb '21</option>
                        </select>                       
                    </div>  
                    <div className='lg:w-[8vw] lg:h-[6vh] bg-blue-50 mt-5 px-1 rounded-md flex justify-between leading-10 whitespace-nowrap'>
                        <h1 className='text-blue-600 font-thin text-[12px]'>72 bmp  </h1> 
                        <h1 className='text-[12px]'>Average</h1>
                    </div>
                </div>
                <div className='w-[350px] h-[6px] px-5 py-10 '>
                    <HeartECGChart/>
                </div>
          

        </div>
        <div className='lg:w-[20vw] lg:h-[50vh] bg-white rounded-md shadow-md lg:border-t-2'>
        <div className='flex flex-col py-8 space-y-2 place-items-center '>
                    <img src="src/assets/Images/user (1).png" alt="" className='lg:w-[4vw] lg:h-[7vh] place-items-center'/>
                    <h1 className='text-[18px]'>Dr. Poul doe</h1>
                    <h1 className='text-[14px]  '>Heart Specialist</h1>
                </div>
               
                <div className=' lg:w-[20vw] h-[1px]  bg-slate-300 lg:mt-[-8px]'></div>
                
                <div className=' flex flex-row px-3 py-8 gap-3'>
                    <div className=' flex gap-2'>
                        <img src="src/assets/Images/surgery-room.png" alt="" className='lg:w-[4vw] lg:h-[6vh]'/>
                        <div className='flex flex-col  '>
                            <h1 className='text-xl'>10</h1>
                            <h1 className='lg:text-[14px]'>Operation</h1>
                        </div>
                    </div>
                    <div className='w-[1px] h-[10vh] bg-slate-300 lg:ml-2'></div>
                    <div  className='flex gap-3'>
                        <img src="src/assets/Images/patient.png" alt=""  className='lg:w-[4vw] lg:h-[6vh]'/>
                        <div className=' flex flex-col'>
                            <h1 className='text-xl'>47</h1>
                            <h1 className='lg:text-[14px]'>Patients</h1>
                        </div>
                    </div>

                </div>

                <div className=' flex flew-row justify-center  '>
                    <button className='lg:w-[18vw] lg:h-[5vh] rounded-lg shadow-md bg-indigo-200 justify-between'>
                        <div className='flex justify-center gap-3 '>
                            <img src="src/assets/Images/message (1).png" alt="" className='lg:w-[1vw] lg:h-[2vh] my-2 '/>
                        <div className='px-2 text-indigo-700 text-2xl'>
                             <h1 className='lg:text-[15px]'>Messages</h1>
                        </div>
                        </div>
                    </button>

                </div>

        </div>
      </div>

      <div className='lg:w-[50vw] lg:h-[50vh] bg-white lg:mt-[-115px] lg:px-5 lg:space-x-5 lg:flex '>
        <div className='lg:w-[31vw] lg:h-[50vh] bg-white rounded-md shadow-md lg:py-4 lg:border-t-2'>
        <div className='lg:flex lg:justify-between lg:px-4'>
                    <h1 className='lg:text-lg'>Current Vitals</h1>
                    <div className='lg:w-[8vw] lg:h-[4vh] lg:bg-gray-200 lg:rounded-2xl lg:flex lg:justify-end lg:px-3 lg:py-2'>
                        <img src="src/assets/Images/loupe.png" alt="" className='w-[2vh] h-[2vh]'/>
                    </div>
                </div>
                <div className='w[70vw] h-[1px] bg-gray-300 lg:mt-4'></div>
                <div className=' flex gap-16 px-4 py-6 lg:justify-between'>
                    <div className='lg:flex'>
                        <h1 className='text-gray-500 text-[15px]'>Patieny Name:</h1>
                        <h1 className='text-[14px] lg:font-bold lg:px-1'>Jonsahn</h1>
                    </div>
                    <div className='lg:flex '>
                        <h1 className='text-gray-500 text-[15px]'>Patieny Id:</h1>
                        <h1 className='lg:font-bold lg:text-[14px] '>1254896</h1>
                    </div>
                </div>
                <div className='lg:w-[31vw] lg:h-[1px] bg-gray-300'></div>
                <div className='lg:flex  lg:flex-row lg:py-4'>
                 <div className=' lg:flex lg:px-4  lg:gap-3'>
                    <div className='lg:flex lg:flex-col'>
                        <img src="src/assets/Images/weighing-machine.png" alt="" className='lg:w-[3vw] lg:h-[4vh]'/>
                     
                    </div>
                    <div className=' lg:mt-[-6px]'>
                        <h1 className='text-[12px]'>Weight </h1>
                        <h1 className='text-[16px] whitespace-nowrap'>230 ibs</h1>
                    </div>
                   
                 </div>
                    <div className='w-[1px] h-[9vh] bg-gray-300'></div>
                    <div className='lg:flex '>
                        <div className='pr-3 '>
                            <img src="src/assets/Images/dude.png" alt="" className='lg:w-[7vw] lg:h-[9vh]'/>
                        </div>
                        <div className='mt-[-8px] pr-2 '> 
                            <h1 className='text-[12px] '>Height</h1>
                            <h1 className='lg:text-[14px]'>6'1</h1>
                        </div>
                    </div>
                    <div className='w-[1px] h-[9vh] bg-gray-300'></div>
                  
                        <div className='lg:flex l'>
                            <div className='px-2'>
                                <img src="src/assets/Images/statistic.png" alt="" className='w=[9vw] h-[5vh]'/>
                            </div>
                            <div>
                                <h1 className='lg:pr-[4px] lg:text-[12px] lg:mt-[-6px]'>BMI</h1>
                                <h1 className='lg:leading-4 lg:text-[17px]'>30.34</h1>

                            </div>
                        </div>
                       
                </div>
                <div className='lg:w-[31vw] h-[1px] bg-gray-300 lg:mt-4'></div>
                <div className='px-5 text-[12px] py-5'>
                    <h1>Recorded on 25/05/2020</h1>
                </div>
                <div className='lg:w-[31vw] lg:h-[8vh] bg-indigo-500 rounded-lg px-7 flex gap-2 text-white text-[14px] lg:mt-[-4px]'>
                    <img src="src/assets/Images/cigarette.png"  alt="" className='lg:w-[2vw] lg:h-[4vh]'/>
                    <h1 className='text-white lg:text-[13px] lg:font-light py-3 font-semibold'>Smoking Status: current everyday smoker</h1>
                </div>
        </div> 
        <div className='lg:flex lg:flex-col lg:space-y-5 '>
            <div className='lg:w-[15vw] lg:h-[25vh] bg-white rounded-md shadow-md lg:px-5 lg:py-7 lg:border-t-2'>
              <div className=''>
                    <img src="src/assets/Images/blood.png" alt="" className='lg:w-[1vw] lg:h-[2vh] ml-2' />
                </div>
                <div className='lg:w-[4vw] lg:h-[7vh] bg-indigo-500 rounded-full  '>
                    <div className='pt-1'>
                    <img src="src/assets/Images/record-button.png" alt="" className='lg:w-[3px] ml-3   '/>
                    <img src="src/assets/Images/hand.png" alt="" className='lg:w-[3vw] lg:h-[5vh]'/>
                    </div>

                    <div className='mt-[-39px] ml-6  z-10'> 
                        <img src="src/assets/Images/blood-sugar-monitor.png" alt="" className='lg:w-[13vw] lg:h-[5vh]' />
                    </div>
                </div>
                <div className='py-2 text-blue-600'>
                <h1 className=' lg:text-lg font-light'>Glucose Level </h1>
                <h1 className='lg:text-2xl lg:font-light'> 85-89</h1>
                </div>

            </div>
            <div className='lg:w-[15vw] lg:h-[25vh] bg-white rounded-md  shadow-md lg:px-5 lg:py-3 lg:border-t-2'>
            <div>
                    <img src="src/assets/Images/blood-test.png" alt="" className='lg:w-[4vw] lg:h-[6vh]' />
                </div>
                <div className='py-2 text-blue-600'>
                <h1 className='lg:text-lg font-light'> Blood Count  </h1>
                <h1 className='lg:text-2xl lg:font-light'>9.456/ml</h1>
                </div>

            </div>

        </div>

      </div>

    </div>

    <div className='lg:w-[30vw] lg:h-auto lg:bg-white lg:flex lg:flex-col lg:mt-[-40px] lg:space-y-3'>
        <div className='lg:w-[25vw] lg:h-[15vh] bg-white rounded-md shadow-md lg:px-6 lg:py-6 lg:border-t-2 lg:flex lg:space-x-3'>
                <div className='py-1'>
                    <img src="src/assets/Images/doctor f.jpeg" alt="" className='lg:w-[4vw] lg:h-[7vh] rounded-full' />
                </div>
                <div className='flex flex-col text-blue-600'>
                    <h1 className='lg:text-2xl'>Dr. Kevin Black</h1>
                    <h1 className='lg:text-lg'>Cardiologists</h1>
                </div>            
        </div>
        <div className='py-1 text-lg'>
         <h1>Schedule Appointments</h1>
        </div>
        <div className='lg:w-[25vw] lg:h-[44vh] bg-white rounded-md shadow-md lg:border-t-2 '> 
        <div className='py-5 px-5 gap-3'>
                <div className='lg:w-[9vw] lg:h-[22px] bg-green-100 rounded-lg lg:flex lg:justify-center'>
                    <h1 className='text-[13px] px-1 text-green-700'>Routine Checkup</h1>
                </div>
                <div className='py-2'>
                    <h1 className='lg:text-xl'>Meculam Deo - Standard Consult</h1>
                </div>
                <div className='flex gap-4'>
                    <h1 className='text-gray-400 text-[16px]'>09:15am - 10:45am</h1>
                    <div className='flex py-1 gap-3'>
                        <img src="src/assets/Images/clock (1).png" alt="" className='lg:w-[1vw] lg:h-[2vh]' />
                        <h1 className='mt-[-2px] text-[14px] text-blue-400'>Starts in 15m</h1>
                    </div>

                </div>
                </div>

                <div>
                     <div className='w-[25vw] h-[1px] bg-gray-300 lg:mt-[-8px]'></div>
                </div>

                <div className=' flex gap-3'>
                    <div className='flex py-6 px-2 '>
                         <div className=''>
                             <img src="src/assets/Images/doctor M.jpeg" alt="" className='lg:w-[5vw] lg:h-[7vh] rounded-full' />
                        </div>
                        <div className=''>
                           <h1 className='lg:text-xl lg:text-blue-500 wlg:hitespace-nowrap'>Dr. Meculam</h1>
                           <h1 className='lg:text-[13px] lg:whitespace-nowrap'>+1 142 536 7890</h1>
                       </div>
                       
                    </div>
                    <div className='lg:flex lg:py-8 lg:gap-4'>
                        <div className=' mt-[-3px]'>
                          <img src="src/assets/Images/dot.png" alt="" className='lg:w-[4vw] lg:h-[6vh]' />
                        </div>
                        <h1 className='py-3 ml-[-8px] text-blue-500 text-[14px] lg:mt-[-5px]'>Billed</h1>
                    </div>
                </div> 

                <div>
                    <div className='lg:w-[25vw] h-[1px] bg-gray-300 lg:mt-[-18px]'></div>
                </div> 

                <div className='flex justify-end px-3 py-6 '>
                     <button className='lg:w-[10vw] lg:h-[4vh] bg-gray-200 rounded-md px-2 py-2 '>          
                       <img src="src/assets/Images/pen.png" alt="" className='lg:w-[1vw]'/>                   
                       <h1 className='lg:mt-[-16px] text-[13px] lg:ml-4 '>Edit Consult</h1>              
                     </button>

                </div>
            
        </div>
        <div className='lg:w-[25vw] lg:h-[44vh] bg-white rounded-md shadow-md lg:border-t-2'>
        <div className='py-5 px-5 gap-3'>
                <div className='lg:w-[7vw] lg:h-[22px] bg-red-100 rounded-lg lg:flex lg:justify-center'>
                    <h1 className='text-[13px] px-1 text-red-700'>Emergency</h1>
                </div>
                <div className='py-2'>
                    <h1 className='lg:text-xl whitespace-nowrap'> Maical Deo - Premium Consult</h1>
                </div>
                <div className='flex gap-4'>
                    <h1 className='text-gray-400 text-[16px]'>09:15am - 10:45am</h1>
                    <div className='flex py-1 gap-3'>
                        <img src="src/assets/Images/clock (1).png" alt="" className='lg:w-[1vw] lg:h-[2vh]' />
                        <h1 className='mt-[-2px] text-[14px] text-blue-400'>Starts in 15m</h1>
                    </div>

                </div>
                </div>

                <div>
                     <div className='w-[25vw] h-[1px] bg-gray-300 lg:mt-[-8px]'></div>
                </div>

                <div className=' flex gap-3'>
                    <div className='flex py-4 px-2  gap-3'>
                         <div className=''>
                             <img src="src/assets/Images/doctor M.jpeg" alt="" className='lg:w-[5vw] lg:h-[7vh] rounded-full' />
                        </div>
                        <div className=''>
                           <h1 className='lg:text-xl lg:text-blue-500 lg:whitespace-nowrap lg:mt-[-10px]'>Dr. Maical <br/> Deo</h1>
                           <h1 className='lg:text-[13px] lg:whitespace-nowrap'>+1 421 563 7458</h1>
                       </div>
                       
                    </div>
                    <div className='lg:flex lg:py-8 lg:gap-4'>
                        <div className=' mt-[-3px]'>
                          <img src="src/assets/Images/dot.png" alt="" className='lg:w-[4vw] lg:h-[6vh]' />
                        </div>
                        <h1 className='py-3 ml-[-8px] text-blue-500 text-[14px] lg:mt-[-5px]'> Bulk Billed</h1>
                    </div>
                </div> 

                <div>
                    <div className='lg:w-[25vw] h-[1px] bg-gray-300 lg:mt-[-18px]'></div>
                </div> 

                <div className='flex justify-end px-3 py-6 '>
                     <button className='lg:w-[10vw] lg:h-[4vh] bg-gray-200 rounded-md px-2 py-2 '>          
                       <img src="src/assets/Images/pen.png" alt="" className='lg:w-[1vw]'/>                   
                       <h1 className='lg:mt-[-16px] text-[13px] lg:ml-4 '>Edit Consult</h1>              
                     </button>

                </div>

       
               
            
        </div>
        <div className='lg:w-[25vw] lg:h-[43vh] bg-white rounded-md shadow-md lg:border-t-2'>
        <div className='py-5 px-5 gap-3'>
                <div className='lg:w-[7vw] lg:h-[22px] bg-blue-100 rounded-lg lg:flex lg:justify-center'>
                    <h1 className='text-[13px] px-1 text-blue-700'>Emergency</h1>
                </div>
                <div className='py-2'>
                    <h1 className='lg:text-xl'>Jilmil Deo - Neuro Consult</h1>
                </div>
                <div className='flex gap-4'>
                    <h1 className='text-gray-400 text-[16px]'>09:15am - 10:45am</h1>
                    <div className='flex py-1 gap-3'>
                        <img src="src/assets/Images/clock (1).png" alt="" className='lg:w-[1vw] lg:h-[2vh]' />
                        <h1 className='mt-[-2px] text-[14px] text-blue-400'>Starts in 15m</h1>
                    </div>

                </div>
                </div>

                <div>
                     <div className='w-[25vw] h-[1px] bg-gray-300 lg:mt-[-8px]'></div>
                </div>

                <div className=' flex gap-3'>
                    <div className='flex py-6 px-2 lg:gap-3'>
                         <div className=''>
                             <img src="src/assets/Images/doctor M.jpeg" alt="" className='lg:w-[5vw] lg:h-[7vh] rounded-full' />
                        </div>
                        <div className=''>
                           <h1 className='lg:text-xl lg:text-blue-500 lg:whitespace-nowrap'>Dr. Meculam</h1>
                           <h1 className='lg:text-[13px] lg:whitespace-nowrap'>+1 125 412 0215</h1>
                       </div>
                       
                    </div>
                    <div className='lg:flex lg:py-8 lg:gap-4'>
                        <div className=' mt-[-3px]'>
                          <img src="src/assets/Images/dot.png" alt="" className='lg:w-[4vw] lg:h-[6vh]' />
                        </div>
                        <h1 className='py-3 ml-[-8px] text-blue-500 text-[14px] lg:mt-[-5px]'>Bulk Billed</h1>
                    </div>
                </div> 

                <div>
                    <div className='lg:w-[25vw] h-[1px] bg-gray-300 lg:mt-[-18px]'></div>
                </div> 

                <div className='flex justify-end px-3 py-6 '>
                     <button className='lg:w-[10vw] lg:h-[4vh] bg-gray-200 rounded-md px-2 py-2 '>          
                       <img src="src/assets/Images/pen.png" alt="" className='lg:w-[1vw]'/>                   
                       <h1 className='lg:mt-[-16px] text-[13px] lg:ml-4 '>Edit Consult</h1>              
                     </button>

                </div>

        </div>
    </div>

</div>
               
        <div className='lg:hidden bg-white w-auto h-auto flex flex-col items-center justify-evenly space-y-4  '>
            
            <div className='bg-indigo-800 w-[90vw] h-[39vh] shadow-md rounded-xl flex flex-col px-2 py-2 border-t-2' >
                 <div className='flex justify-between px-3 py-5'>
                    <div>
                     <h1 className='font-semibold text-white'>Heart Rate</h1>
                    </div>
                     <div>
                        <img src="src/assets/Images/like.png" alt="" className='w-[4vw] h-[2vh] mt-4'/>
                     </div>
                </div>

                <div className='px-3 font-semibold text-white mt-[-13px]'>
                    <h1>75/118</h1>
                </div>
           
                <div className='ml-[-24px] py-8'>
                     <HeartRateChart/>
                </div>
            </div> 
             
            <div className='bg-white w-[90vw] h-[39vh] shadow-md rounded-xl flex flex-col px-3 py-2 justify-evenly border-t-2' >
            <div className='flex justify-between px-3 py-5'>
                    <div>
                     <h1 className='font-semibold'>Fever</h1>
                    </div>
                     <div>
                        <img src="src/assets/Images/like (1).png" alt="" className='w-[4vw] h-[2vh] mt-4'/>
                     </div>
                </div>

                <div className='px-3 font-semibold mt-[-13px]'>
                <h1 className='sup text-sm'>100.8 <span>&#176;</span>F</h1>
                </div>
           
                <div className='ml-[-24px] py-8'>
                     <Fever/>
                </div>
               
            

            </div>     
            
            
            <div className=''>             
                <div className='bg-white w-[90vw] gap-4 h-[22vh] lg:h-[25vh] lg:w-[10vw] shadow-md rounded-xl flex flex-col px-3 py-2 justify-evenly border-t-2'>
                    <div className='flex justify-between '>
                         <h1>Blood Pre..</h1>
                         <img src="src/assets/Images/heartbeat.png" alt="" className='w-[5vw] h-[3vh]' />
                    </div>
                    <div className='flex justify-between'>
                         <h1>75</h1>
                         <h1>Upper</h1>
                    </div>
                    <div className='flex justify-between'>
                        <h1>124</h1>
                        <h1>Lower</h1>
                    </div>
                </div>
            </div>

            <div className='bg-white w-[90vw] h-[22vh] shadow-md rounded-xl flex flex-col px-3 py-2 justify-evenly border-t-2' >
                <div className='flex justify-between'>
                    <h1>Bill Due</h1>
                    <img src="src/assets/Images/wallet.png" alt="" className='w-[4vw] h-[18px]' />
                </div>
                <div>
                    $214.86
                </div>
            </div>

            <div className='bg-white w-[90vw] h-[22vh] shadow-md rounded-xl flex flex-col border-t-2 px-3 py-2 justify-evenly'>
                <h1>
                    Fever History
                </h1>
                <select className='text-black w-32  h-5' name="">
                    <option value="">1 to 10 Jan'21</option>
                    <option value="">11 to 31 Jan '21</option>
                    <option value="">1 to 15 Feb '21</option>
                    <option value="">16 t0 18 Feb '21</option>
                </select>
                <div className='flex flex-row justify-between'>         
                    <div className='flex  text-red-600 '>
                        <h1 className='text-[24px] font-semibold'>
                            99
                        </h1>
                        <h1 className='text-[12px]  leading-6 font-bold '>
                            +12%
                        </h1>
                    </div>
                    <div>
                       <h1>Yesterday</h1>
                    </div>
                </div>
            </div>

            <div className='bg-white w-[90vw] h-[22vh] shadow-md rounded-xl px-3 py-2 flex flex-col border-t-2 '>
                <div className='flex flex-row justify-between'>
                        <h1><img src="src/assets/Images/doctor.png" alt="" className='w-8 h-6 mt-6 '/></h1>
                    <div className='py-6 px-1'>
                        <h1 className='text-[20px] text-blue-600 font-semibold'>Johen Mark</h1> 
                        <h1 className='float-end px-2 '>My Doctor</h1>    
                    </div>
                </div>
            </div>
           
            <div className='bg-white w-[90vw] h-[39vh] shadow-md rounded-xl flex flex-col py-5 space-y-4 border-t-2 '>
                <div className='px-4'>
                    <h1>Heart ECG</h1>
                </div>            
                <div className='flex flex-row justify-between px-3 '>
                    <div>
                        <select className='text-black text-[18px] w-36 h-6' name="">
                            <option value="">1 to 10 Jan'21</option>
                            <option value="">11 to 31 Jan '21</option>
                            <option value="">1 to 15 Feb '21</option>
                            <option value="">16 t0 18 Feb '21</option>
                        </select>                       
                    </div>  
                    <div className='w-[40vw] h-[12vw] bg-blue-50 mt-[-15px] px-3 rounded-md flex justify-between leading-10 whitespace-nowrap'>
                        <h1 className='text-blue-600 font-thin'>72 bmp  </h1> 
                        <h1 className=''>Average</h1>
                    </div>
                </div>
                <div className='w-[350px] h-[6px] px-5'>
                    <HeartECGChart/>
                </div>
            </div>

            <div className=' bg-white w-[90vw] h-[57vh] shadow-md rounded-xl border-t-2'>
                <div className='flex flex-col py-8 space-y-4 place-items-center '>
                    <img src="src/assets/Images/user (1).png" alt="" className='w-[14vw] h-[8vh] place-items-center'/>
                    <h1 className='text-[24px]'>Dr. Poul doe</h1>
                    <h1 className='text-[17px] font-thin '>Heart Specialist</h1>
                </div>
               
                <div className=' w-[90vw] h-[1px]  bg-slate-300'></div>
                
                <div className=' flex flex-row px-5 py-8 gap-8'>
                    <div className=' flex gap-3'>
                        <img src="src/assets/Images/surgery-room.png" alt="" className='w-[13vw] h-[7vh]'/>
                        <div className='flex flex-col  '>
                            <h1 className='text-3xl'>10</h1>
                            <h1>Operation</h1>
                        </div>
                    </div>
                    <div className='w-[1px] h-[10vh] bg-slate-300'></div>
                    <div  className='flex gap-3'>
                        <img src="src/assets/Images/patient.png" alt=""  className='w-[11vw] h-[7vh]'/>
                        <div className=' flex flex-col'>
                            <h1 className='text-3xl'>47</h1>
                            <h1>Patients</h1>
                        </div>
                    </div>

                </div>

                <div className=' flex flew-row justify-center'>
                    <button className='w-[80vw] h-[7vh] rounded-lg shadow-md bg-indigo-200  justify-between'>
                        <div className='flex justify-center gap-3 '>
                            <img src="src/assets/Images/message (1).png" alt="" className='w-[4vw] h-[2vh] my-2'/>
                            <div className='px-2 text-indigo-400 text-2xl'>
                                <h1 className='text-[18px]'>Messages</h1>
                            </div>
                        </div>
                    </button>

                </div>
            </div> 

            <div className='bg-white w-[90vw] h-[53vh] shadow-md rounded-xl flex flex-col py-5 space-y-4 border-t-2'>
                <div className='flex justify-between px-4'>
                    <h1 className='text-[22px]'>Current Vitals</h1>
                    <div className='w-[23vw] h-[4vh] bg-gray-200 rounded-2xl flex justify-end px-3 py-2'>
                        <img src="src/assets/Images/loupe.png" alt="" className='w-[2vh] h-[2vh]'/>
                    </div>
                </div>
                <div>
                <div className='w[70vw] h-[1px] bg-gray-300'></div>
                </div>
                <div className=' flex gap-16 px-4'>
                    <div className='flex flex-col justify-between'>
                        <h1 className='text-gray-500 text-[15px]'>Patieny Name:</h1>
                        <h1 className='font-bold'>Jonsahn</h1>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <h1 className='text-gray-500 text-[15px]'>Patieny Id:</h1>
                        <h1 className='font-bold'>1254896</h1>
                    </div>
                </div>
                <div>
                <div className='w-[90vw] h-[1px] bg-gray-300'></div>
                </div>
                <div className='flex  flex-row'>
                    <div className=' flex px-4 gap-3'>
                        <div className='flex flex-col'>
                            <img src="src/assets/Images/weighing-machine.png" alt="" className='w-[9vw] h-[5vh]'/>
                            <h1>ibs</h1>
                        </div>
                        <div className=' mt-[-8px]'>
                            <h1 className='text-[12px]'>Weight </h1>
                            <h1 className='text-[19px]'>230</h1>
                        </div>                  
                    </div>
                    <div className='w-[1px] h-[9vh] bg-gray-300'></div>
                    <div className='flex '>
                        <div className='pr-3'>
                            <img src="src/assets/Images/dude.png" alt="" className='w-[13vw] h-[9vh]'/>
                        </div>
                        <div className='mt-[-8px] pr-2'> 
                            <h1 className='text-[12px]'>Height</h1>
                            <h1 className='text-[19px]'>6'1</h1>
                        </div>
                    </div>
                    <div className='w-[1px] h-[9vh] bg-gray-300'></div>
                    <div className='flex'>
                        <div className='px-2 '>
                            <img src="src/assets/Images/statistic.png" alt="" className='w=[9vw] h-[5vh]'/>
                            <h1 className='leading-4 text-[19px]'>30.34</h1>
                        </div>
                        <div className='pr-[4px] text-[13px] mt-[-8px]'>BMI</div>
                    </div>
                </div>
                <div className='w-[90vw] h-[1px] bg-gray-300'></div>
                <div className='px-5 text-[12px]'>
                    <h1>Recorded on 25/05/2020</h1>
                </div>
                <div className='w-[90vw] h-[13vh] bg-indigo-500 rounded-lg py-5 px-7 flex gap-2 text-white text-[14px]'>
                    <img src="src/assets/Images/cigarette.png"  alt="" className='w-[9vw] h-[4vh]'/>
                    <h1 className='text-white text-[14px] py-3 font-semibold'>Smoking Status: current everyday smoker</h1>
                </div>
            </div> 

            <div className='bg-white w-[90vw] h-[22vh] shadow-md rounded-xl border-t-2 px-4 py-4 '>
                <div className=''>
                    <img src="src/assets/Images/blood.png" alt="" className='w-[2vw] h-[2vh] ml-2' />
                </div>
                <div className='w-[14vw] h-[7vh] bg-indigo-500 rounded-full  '>
                    <div className='pt-2'>
                        <img src="src/assets/Images/record-button.png" alt="" className='w-[2vw] h-[1vh] ml-2   '/>
                        <img src="src/assets/Images/hand.png" alt="" className='w-[8vw] h-[4vh]'/>
                    </div>

                    <div className='mt-[-39px] ml-6  z-10'> 
                        <img src="src/assets/Images/blood-sugar-monitor.png" alt="" className='w-[13vw] h-[5vh]' />
                    </div>
                </div>
                <div className='py-2 text-blue-600'>
                    <h1 className=' text-[19px] font-sans'>Glucose Level </h1>
                    <h1 className='text-2xl'> 85-89</h1>
                </div>
            </div>

            <div className='bg-white w-[90vw] h-[22vh] shadow-md rounded-xl flex flex-col py-6 px-5 border-t-2'>
                <div>
                    <img src="src/assets/Images/blood-test.png" alt="" className='w-[12vw] h-[6vh]' />
                </div>
                <div className='py-2 text-blue-600'>
                    <h1 className='text-[19px] font-sans'> Blood Count  </h1>
                    <h1 className='text-2xl'>9.456/ml</h1>
                </div>
            </div>

            <div className='bg-white w-[90vw] h-[19vh] shadow-md rounded-xl border-t-2 flex py-9 px-5 gap-3'>
                <div className='py-1'>
                    <img src="src/assets/Images/doctor f.jpeg" alt="" className='w-[16vw] h-[8vh] rounded-full object-cover' />
                </div>
                <div className='flex flex-col text-blue-600'>
                    <h1 className='text-3xl'>Dr. Kevin Black</h1>
                    <h1 className='text-[20px]'>Cardiologists</h1>
                </div>
            </div>  
            <div className='py-2 float-left mr-32 text-xl whitespace-nowrap'>
                <h1>Scheduled Appointments</h1>
            </div>

            <div className='bg-white w-[90vw] h-[45vh] shadow-md rounded-xl flex flex-col border-t-2 '>
                <div className='py-5 px-5 gap-3'>
                    <div className='w-[30vw] h-[3vh] bg-green-100 rounded-lg'>
                        <h1 className='text-[13px] px-1 text-green-700'>Routine Checkup</h1>
                    </div>
                    <div className='py-3'>
                        <h1 className='text-xl'>Meculam Deo - Standard Consult</h1>
                    </div>
                    <div className='flex gap-6'>
                        <h1 className='text-gray-400 text-[16px]'>09:15am - 10:45am</h1>
                        <div className='flex py-1 gap-3'>
                            <img src="src/assets/Images/clock (1).png" alt="" className='w-[4vw] h-[2vh]' />
                            <h1 className='mt-[-2px] text-[14px] text-blue-400'>Starts in 15m</h1>
                        </div>
                    </div>
                </div>
                <div>
                     <div className='w-[90vw] h-[1px] bg-gray-300'></div>
                </div>
                <div className=' flex gap-9'>
                    <div className='flex py-6 px-4 gap-2'>
                         <div className=''>
                             <img src="src/assets/Images/doctor M.jpeg" alt="" className='w-[16vw] h-[8vh] rounded-full object-cover' />
                        </div>
                        <div className=''>
                           <h1 className='text-[20px] text-blue-500'>Dr. Meculam</h1>
                           <h1 className='text-[13px]'>+1 142 536 7890</h1>
                       </div>                    
                    </div>
                    <div className='flex py-8'>
                        <div className=' mt-[-3px]'>
                          <img src="src/assets/Images/dot.png" alt="" className='w-[14vw] h-[7vh]' />
                        </div>
                        <h1 className='py-3 ml-[-8px] text-blue-500 text-[14px] '>Billed</h1>
                    </div>
                </div> 
                <div>
                    <div className='w-[90vw] h-[1px] bg-gray-300'></div>
                </div> 
                <div className='flex justify-end px-3 py-5 '>
                    <button className='w-[40vw] h-[5vh] bg-gray-200 rounded-lg px-2 py-2 '>          
                       <img src="src/assets/Images/pen.png" alt="" className='w-[4vw]'/>                   
                       <h1 className='mt-[-18px] text-[13px] '>Edit Consult</h1>              
                    </button>
                </div>     
            </div>

            <div className='bg-white w-[90vw] h-[45vh] shadow-md rounded-xl flex flex-col border-t-2 '>
                <div className='py-5 px-5 gap-3'>
                    <div className='w-[22vw] h-[3vh] bg-red-100 rounded-lg px-1'>
                        <h1 className='text-[13px] px-1 text-red-700'>Emergency</h1>
                    </div>
                    <div className='py-3'>
                         <h1 className='text-xl'>Maical Deo - Premium Consult</h1>
                    </div>
                    <div className='flex gap-6'>
                        <h1 className='text-gray-400 text-[16px]'>09:15am - 10:45am</h1>
                        <div className='flex py-1 gap-3'>
                            <img src="src/assets/Images/clock (1).png" alt="" className='w-[4vw] h-[2vh]' />
                            <h1 className='mt-[-2px] text-[14px] text-blue-400'>Starts in 15m</h1>
                        </div>
                    </div>
                </div>
                <div>
                     <div className='w-[90vw] h-[1px] bg-gray-300'></div>
                </div>
                <div className=' flex '>
                    <div className='flex py-6 px-4 gap-2'>
                         <div className=''>
                             <img src="src/assets/Images/doctor M.jpeg" alt="" className='w-[16vw] h-[8vh] rounded-full' />
                        </div>
                        <div className=''>
                           <h1 className='text-[20px] text-blue-500'>Dr. Maical Deo</h1>
                           <h1 className='text-[13px]'>+1 421 563 7458</h1>
                       </div>                     
                    </div>
                    <div className='flex py-8'>
                        <div className=' mt-[-3px]'>
                          <img src="src/assets/Images/dot.png" alt="" className='w-[14vw] h-[7vh]' />
                        </div>
                        <h1 className='py-3 ml-[-8px] text-blue-500 text-[14px] whitespace-nowrap'>Bulk Billed</h1>
                    </div>
                </div> 
                <div>
                    <div className='w-[90vw] h-[1px] bg-gray-300'></div>
                </div> 
                <div className='flex justify-end px-3 py-4 '>
                    <button className='w-[40vw] h-[5vh] bg-gray-200 rounded-lg px-2 py-2 '>          
                        <img src="src/assets/Images/pen.png" alt="" className='w-[4vw] '/>                   
                        <h1 className='mt-[-18px] text-[13px] '>Edit Consult</h1>              
                    </button>
                </div>           
            </div>

            <div className='bg-white w-[90vw] h-[45vh] shadow-md rounded-xl flex flex-col border-t-2 '>
                <div className='py-5 px-5 gap-3'>
                    <div className='w-[22vw] h-[3vh] bg-blue-100 rounded-lg px-1'>
                        <h1 className='text-[13px] px-1 text-blue-700'>Emergency</h1>
                    </div>
                    <div className='py-3'>
                       <h1 className='text-xl'>Jilmil Deo - Neuro Consult</h1>
                    </div>
                    <div className='flex gap-6'>
                        <h1 className='text-gray-400 text-[16px]'>09:15am - 10:45am</h1>
                        <div className='flex py-1 gap-3'>
                            <img src="src/assets/Images/clock (1).png" alt="" className='w-[4vw] h-[2vh]' />
                            <h1 className='mt-[-2px] text-[14px] text-blue-400'>Starts in 15m</h1>
                        </div>
                    </div>
                </div>
                <div>
                     <div className='w-[90vw] h-[1px] bg-gray-300'></div>
                </div>
                <div className=' flex '>
                    <div className='flex py-6 px-4 gap-2'>
                         <div className=''>
                             <img src="src/assets/Images/doctor M.jpeg" alt="" className='w-[16vw] h-[8vh] rounded-full' />
                        </div>
                        <div className=''>
                           <h1 className='text-[20px] text-blue-500'>Dr. Maical Deo</h1>
                           <h1 className='text-[13px]'>+1 125 412 0215</h1>
                        </div>                   
                    </div>
                    <div className='flex py-8'>
                        <div className=' mt-[-3px]'>
                          <img src="src/assets/Images/dot.png" alt="" className='w-[14vw] h-[7vh]' />
                        </div>
                        <h1 className='py-3 ml-[-8px] text-blue-500 text-[14px] whitespace-nowrap'>Bulk Billed</h1>
                    </div>
                </div> 
                <div>
                    <div className='w-[90vw] h-[1px] bg-gray-300'></div>
                </div> 
                <div className='flex justify-end px-3 py-4 '>
                    <button className='w-[40vw] h-[5vh] bg-gray-200 rounded-lg px-2 py-2 '>          
                        <img src="src/assets/Images/pen.png" alt="" className='w-[4vw]'/>                   
                        <h1 className='mt-[-18px] text-[13px] '>Edit Consult</h1>              
                    </button>
                </div>          
            </div>
                          
        </div> */}
                {/* </div> */}
            
        </>
      );    
}

export default Patientdashboard




