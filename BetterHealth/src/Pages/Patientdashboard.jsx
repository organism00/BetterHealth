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

            <div className="lg:hidden flex flex-col md:flex md:flex-col py-8 md:py-20 space-y-4  ">
                <div className='w-[100%] h-auto bg-[whitesmoke] md:bg-[whitesmoke] '>
                    {/* heading */}
                    <div className='flex flex-row py-5 px-5 justify-between md:py-5 md:px-11 lg:flex lg:items-center'> 
                        <div >
                            <h1 className='text-[28px] md:text-5xl md:py-2 lg:text-4xl'>Johen doe</h1>
                        </div>
                        <div>
                            <div className=" w-[100%] h-[95%] md:w-[110%] md:h-[95%] bg-indigo-700 rounded-md flex gap-2 justify-center py-3 px-2 md:py-4 items-center">
                                <div className=''>
                                     <img src="src/assets/Images/plus (2).png" alt="" className='w-[10px] h-[10px]  md:w-[20px] md:h-[20px]'/>
                                </div>
                                <div>
                                    <Link className=' flex justify-center ' to={`/Patientdashboard`}> 
                                    <h1 className=' text-white  whitespace-nowrap md:text-2xl lg:text-[17px]'> <h1>Add Record</h1></h1>
                                    </Link>
                                </div>  
                            </div>
                        </div>
                    </div>

                   
                    <div className='w-[100%] h-auto md:w-[100%] md:h-auto bg-white flex flex-col items-center md:items-center justify-evenly md:justify-evenly space-y-4 md:space-y-4 md:flex md:flex-col md:pl-[40%] md:px-6 py-6'> 
                      
                        {/* content1 */}
                        
                        <div className='bg-indigo-800 w-[90%] h-[45vh] md:w-[100%] md:h-[40vh] md:bg-indigo-800 shadow-md rounded-xl flex flex-col px-4 border-t-2 '>
                        
                            <div className='flex justify-between px-3 py-5 md:px-6 md:py-6 lg:justify-between lg:px-3 lg:py-5'>
                                <div>
                                    <h1 className='font-semibold text-white md:text-2xl lg:text-[19px] lg:font-normal'>Heart Rate</h1>
                                </div>
                                <div>
                                    <img src="src/assets/Images/like.png" alt="" className='w-[4vw] h-[2vh] mt-4 md:w-[4vw] md:h-[3vh] lg:w-[16px] lg:h-[2vh]'/>
                                </div>
                            </div>
                            <div className='px-3 relative font-semibold text-white margin md:text-xl md:px-6 lg:text-[17px] lg:font-normal lg:px-3 lg:flex lg:items-center'>
                                <h1 className='absolute top-0'>75/118</h1>
                            </div>        
                            <div className='mt-6 py-8 md:px-6 md:w-[100%] md:h-[9vh] lg:w-[120%] lg:h-[20vh] lg:py-3 lg:px-1 lg:ml-[-34px] lg:text-[13px]'>
                                <HeartRateChart/>
                            </div>
                        </div>
                    

                        {/* content2 */}      
                        <div className='bg-[whitesmoke] w-[90vw] h-[39vh] md:w-[100%] md:h-[37vh] shadow-md rounded-xl flex flex-col px-5 py-2 justify-evenly border-t-2 '>
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

                            <div className='ml-[-24px] py-8 md:w-[50vw] md:px-2'>
                                <Fever/>
                            </div>
                        </div>
                        
                        {/* content3  */}
                         <div className='bg-[whitesmoke] w-[90%] h-[22vh] md:w-[100%] md:h-[22vh] shadow-md rounded-xl flex flex-col px-6 py-6 justify-evenly border-t-2 '>
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

                        {/* content4 */}
                        <div className='bg-[whitesmoke] w-[90%] h-[14vh] md:w-[100%] md:h-[14vh] shadow-md rounded-xl flex flex-col px-6 py-4 justify-evenly border-t-2'>
                            <div className='flex justify-between'>
                                <h1 className='text-[20px] md:text-xl md:font-semibold'>Bill Due</h1>
                                <img src="src/assets/Images/wallet.png" alt="" className='w-[4vw] h-[18px] md:w-[20px] md:h-[24px]' />
                            </div>
                            <div className='text[18px] font-light md:text-[18px]'>
                                 $214.86
                            </div>
                        </div>

                        {/* content5 */}
                        <div className='bg-[whitesmoke] w-[90%] h-[20vh] md:w-[100%] md:h-[22vh] shadow-md rounded-xl flex flex-col border-t-2 px-6 py-3 justify-evenly'>
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

                        {/* content6 */}
                        <div className='bg-[whitesmoke] w-[90%] h-[14vh] md:w-[100%] md:h-[14vh] shadow-md rounded-xl px-6 py-2 flex flex-col border-t-2 '>
                            <div className='flex flex-row justify-between'>
                                <h1><img src="src/assets/Images/doctor.png" alt="" className='w-8 h-6 mt-6 '/></h1>
                                <div className='py-3 px-1'>
                                    <h1 className='text-[18px] text-blue-600 font-semibold md:text-xl'>Johen Mark</h1> 
                                    <h1 className='float-end px-2 font-light text-gray-500 md:text-[18px]'>My Doctor</h1>    
                                </div>
                            </div>
                        </div>
                        

                        {/* content7 */}
                        <div className='bg-[whitesmoke] w-[90%] h-[37vh] md:w-[100%] md:h-[37vh] shadow-md rounded-xl flex flex-col py-5 md:px-6 md:py-6 space-y-2 border-t-2 px-2 '>
                            <div className='px-4'>
                                <h1 className='text-[20px]'>Heart ECG</h1>
                            </div>            
                            <div className='flex flex-row justify-between px-3'>
                                <div>
                                    <select className='text-black text-[14px] w-36 h-6 md:text-[17px]' name="">
                                        <option value="">1 to 10 Jan'21</option>
                                        <option value="">11 to 31 Jan '21</option>
                                        <option value="">1 to 15 Feb '21</option>
                                        <option value="">16 t0 18 Feb '21</option>
                                    </select>                       
                                </div>  
                                <div className='w-[48%] h-[5vh] md:w-[48%] md:h-[5vh] bg-blue-50 px-3 rounded-md flex justify-between whitespace-nowrap items-center'>
                                    <h1 className='text-blue-600 text-[14px] font-thin md:text-[18px]'>72 bmp </h1> 
                                    <h1 className='text-[14px] font-light md:text-[18px]'>Average</h1>
                                </div>
                            </div>
                            <div className='w-[80%] h-[4vh] md:w-[100%] md:h-[20vh]'>
                                 <HeartECGChart/>
                            </div>
                        </div>

                        {/* content8 */} 
                    <div className='space-y-0 flex flex-col items-center px-7'>           
                        <div className='bg-[whitesmoke] w-[108%] h-[40vh] md:w-[113%] md:h-[34vh] shadow-md rounded-t-lg border-t-2 '>
                            <div className='flex flex-col py-6 space-y-2 place-items-center '>
                                <img src="src/assets/Images/doctor M.jpeg" alt="" className='w-[12vw] h-[6vh] md:w-[12vw] md:h-[9vh] md:rounded-full md:object-cover place-items-center object-cover rounded-full'/>
                                <h1 className='text-[20px] md:text-[23px] md:font-semibold'>Dr. Poul Doe</h1>
                                <h1 className='text-[14px] font-normal md:text-[18px]'>Heart Specialist</h1>
                            </div>

                            <div>
                                <div className=' w-[100%] h-[1px] bg-slate-300'></div>
                            </div>

                            <div className=' flex flex-row px-5 py-8 gap-8 md:px-8 md:flex md:gap-18 md:justify-center'>
                                <div className=' flex gap-3 md:gap-6'>
                                     <img src="src/assets/Images/surgery-room.png" alt="" className='w-[13vw] h-[7vh] md:w-[6vw] md:h-[6vh] md:object-cover'/>
                                    <div className='flex flex-col  '>
                                        <h1 className='text-3xl'>10</h1>
                                        <h1 className='text-[14px] font-thin md:text-xl'>Operation</h1>
                                    </div>
                                </div>
                                <div>
                                    <div className='w-[1px] h-[100%] bg-slate-300'></div>
                                </div>
                                <div className='flex gap-4'>
                                    <img src="src/assets/Images/patient.png" alt=""  className='w-[40%] h-[6vh] md:w-[6vw] md:h-[5vh] '/>
                                    <div className=' flex flex-col'>
                                        <h1 className='text-3xl'>47</h1>
                                        <h1 className='text-[14px] font-thin md:text-xl'>Patients</h1>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        {/* content8a   */}
                        <div className='flex flew-row justify-center w-[108%] h-[7vh] md:w-[113%] md:h-[7vh] bg-[whitesmoke] rounded-b-lg'>
                                <button className='w-[80%] h-[6vh] rounded-lg shadow-md bg-indigo-200  justify-between'>
                                    <div className='flex justify-center gap-2'>
                                        <div className='py-2'> 
                                            <img src="src/assets/Images/message (1).png" alt="" className='w-[3vw] h-[2vh] md:w-[2vw] md:h-[2vh]'/>
                                        </div>
                                        <div className='px-2 text-indigo-700 text-2xl'>
                                            <h1 className='text-[16px] md:text-[25px]'>Messages</h1>
                                        </div>
                                    </div>
                                </button>
                        </div>

                    </div> 

                    {/* section9  */}
                    <div className='gap-0 flex flex-col items-center px-2'>
                    <div className='bg-[whitesmoke] w-[90vw] h-[40vh] md:w-[106%] md:h-[35vh] shadow-md rounded-t-xl flex flex-col py-5 space-y-4 border-t-2'>
                        <div className='flex justify-between px-6'>
                            <h1 className='text-[22px]'>Current Vitals</h1>
                            <div className='w-[23vw] h-[4vh] bg-gray-200 rounded-2xl flex justify-end px-3 py-2'>
                                <img src="src/assets/Images/loupe.png" alt="" className='w-[2vh] h-[2vh]'/>
                            </div>
                        </div>
                        <div>
                            <div className='w-[100%] h-[1px] bg-gray-300'></div>
                        </div>
                        <div className=' flex gap-16 md:justify-between px-6 md:px-7'>
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
                            <div className='w-[100%] h-[1px] bg-gray-300'></div>
                        </div>
                        <div className='flex flex-row'>
                            <div className=' flex px-7 gap-4'>
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
                        <div className='w-[100%] h-[1px] bg-gray-300'></div>
                        <div className='px-5 text-[12px] md:text-[17px]'>
                            <h1>Recorded on 25/05/2020</h1>
                        </div>      
                    </div>
                    {/* secti0n9 a  */}
                    <div className='flex justify-center w-[90vw] rounded-b-lg h-[10vh] md:w-[106%]'>
                    <div className='w-[100%] h-[10vh] bg-indigo-500 rounded-b-lg py-5 px-7 flex gap-2 place-items-center text-white text-[14px]'>
                            <img src="src/assets/Images/cigarette.png"  alt="" className='w-[9vw] h-[4vh] md:w-[5vw] md:h-[2vh]'/>
                            <h1 className='text-white text-[14px] py-3 md:text-[16px] font-semibold'>Smoking Status: current everyday smoker</h1>
                        </div>
                    </div>
                    </div>

                    {/* section10 */}
                    <div className='bg-[whitesmoke] w-[90%] h-[23vh] md:w-[100%] md:h-[19vh] shadow-md rounded-xl border-t-2 px-4 py-5 md:py-8 md:px-7  '>
                        <div className=''>
                            <img src="src/assets/Images/blood.png" alt="" className='w-[2vw] h-[2vh] ml-2 md:w-[1vw] md:h-[12px]' />
                        </div>
                        <div className='w-[14vw] h-[7vh] md:w-[6vh] md:h-[6vh] md:rounded-full md:aspect-auto-1/1 bg-indigo-500 rounded-full '>
                            <div className='pt-2'>
                                <img src="src/assets/Images/record-button.png" alt="" className='w-[1vw] h-[1vh] ml-2 md:w-[4px] md:h-[8px] md:ml-3  '/>
                                <img src="src/assets/Images/hand.png" alt="" className='w-[8vw] h-[4vh] md:w-[6vw] md:h-[4vh]'/>
                            </div>

                            <div className='mt-[-38px] ml-6  md:mt-[-48px] z-10'> 
                                <img src="src/assets/Images/blood-sugar-monitor.png" alt="" className='w-[13vw] h-[5vh] md:w-[9vw] md:h-[4vh] md:ml-1' />
                            </div>
                        </div>
                        <div className='py-2 text-blue-600'>
                            <h1 className=' text-[19px] font-sans md:text-2xl'>Glucose Level </h1>
                            <h1 className='text-[20px]'> 85-89</h1>
                        </div>
                    </div>

                    {/* section11 */}
                    <div className='bg-[whitesmoke] w-[90%] h-[22vh] md:w-[100%] md:h-[18vh] shadow-md rounded-xl flex flex-col py-6 px-5 md:px-7 border-t-2'>
                        <div className='md:h-[6vh] md:w-[6vh] md:rounded-full md:aspect-auto-1/1 object-cover'>
                            <img src="src/assets/Images/blood-test.png" alt="" className='w-[12vw] h-[6vh] ' />
                        </div>
                        <div className='py-2 text-blue-600'>
                            <h1 className='text-[19px] font-sans md:text-2xl'> Blood Count  </h1>
                            <h1 className='text-[20px] md:text-[20px]'>9.456/ml</h1>
                        </div>
                    </div>
    
                    {/* ......     */}
                    </div>
                </div>

                {/* .... */}
                <div className='l'>
                <div className='w-[100%] h-[auto] bg-white md:w-[100%] md:h-[auto]  flex flex-col items-center justify-evenly space-y-4 md:flex md:flex-col md:pl-[40%] md:px-6 g:w-[31%] lg:h-[auto] lg:bg-red-900'>
                    
                    {/* section12 */}
                    <div className='bg-[whitesmoke] w-[90%] h-[19vh] md:w-[100%] md:h-[14vh] shadow-md rounded-xl border-t-2 flex py-9 px-5 gap-3'>
                        <div className='py-1'>
                            <img src="src/assets/Images/doctor f.jpeg" alt="" className='w-[8vh] h-[8vh] rounded-full object-cover aspect-auto-1/1' />
                        </div>
                        <div className='flex flex-col text-blue-600'>
                            <h1 className='text-2xl md:font-semibold'>Dr. Kevin Black</h1>
                            <h1 className='text-[19px] md:text-[23px]'>Cardiologists</h1>
                        </div>
                    </div> 

                    {/* section13 */}
                    <div className='mr-36 whitespace-nowrap md:mr-52'>
                        <h1 className='text-xl md:text-2xl'>Scheduled Appointments</h1>
                    </div>

                    {/* section14 */}
                    <div className='w-[90%] h-v[45vh] md:w-[100%] md:h-[35vh] space-y-0 flex flex-col'> 
                        <div className='bg-[whitesmoke] w-[100%] h-[32vh] border-b-2 md:w-[100%] md:h-[28vh] rounded-t-xl md:rounded-t-xl border-t-2 flex flex-col shadow-md '>
                            <div className='py-5 px-4 gap-3'>
                                <div className='w-[36%] h-[3vh] md:w-[33%] md:h-[3vh] bg-green-100 whitespace-nowrap flex items-center justify-center md:px-1'>
                                    <h1 className='text-[13px] md:text-[17px] px-1 text-green-700'>Routine Checkup</h1>
                                </div>
                                <div className='py-3'>
                                    <h1 className='text-xl md:text-[25px] whitespace-nowrap'>Meculam Deo - Standard Consult</h1>
                                </div>
                                <div className='flex gap-6'>
                                    <h1 className='text-gray-400 text-[16px] md:text-[19px]'>09:15am - 10:45am</h1>
                                    <div className='flex py-1 gap-3'>
                                        <div className=''>
                                            <img src="src/assets/Images/clock (1).png" alt="" className='w-[4vw] h-[2vh] rounded-full md:w-[2vh] md:h-[2vh] md:aspect-auto-1/1' />
                                        </div>
                                            <h1 className='mt-[-2px] text-[14px] text-blue-400 md:text-[19px]'>Starts in 15m</h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='w-[100%] h-[1px] bg-gray-300'></div>
                            </div>
                            <div className=' flex justify-between items-center md:flex md:items-center px-2 md:w-[100%] md:h-[12vh]'>
                                <div className='flex px-4 gap-2'>
                                    <div className=''>
                                        <img src="src/assets/Images/doctor M.jpeg" alt="" className='w-[7vh] h-[7vh]   rounded-full object-cover aspect-auto-1/1 ' />
                                    </div>
                                    <div className=''>
                                        <h1 className='text-[20px] text-blue-500 whitespace-nowrap md:text-[23px]'>Dr. Meculam</h1>
                                        <h1 className='text-[13px] md:text-[15px]'>+1 142 536 7890</h1>
                                    </div>                    
                                </div>
                                <div className='flex py-8 px-3 justify-center items-center md:px-4 md:flex gap-2'>
                                    <div className='  '>
                                        <img src="src/assets/Images/dot.png" alt="" className='w-[10vw] h-[5vh] md:w-[5vw] md:h-[4vh] rounded-full' />
                                    </div>
                                    <h1 className='py-3 ml-[-10px] text-blue-500 text-[14px] md:text-[20px] '>Billed</h1>
                                </div>
                            </div>
                        </div>        
                        <div className='w-[100%] h-[9vh] md:w-[100%] md:h-[9vh] flex justify-end items-center rounded-b-xl bg-[whitesmoke] px-3 md:border-none'>
                            <button className='w-[40%] h-[5vh] bg-gray-200 flex items-center justify-between rounded-lg px-2 py-2 '>          
                                <img src="src/assets/Images/pen.png" alt="" className='w-[4vw]'/>                   
                                <h1 className=' text-[13px] md:text-[17px]'>Edit Consult</h1>              
                            </button>
                        </div>
                    </div>

                    {/* section15 */}
                    <div className='w-[90%] h-v[45vh] md:w-[100%] md:h-[35vh] space-y-0 flex flex-col'> 
                        <div className='bg-[whitesmoke] w-[100%] h-[32vh] border-b-2 md:w-[100%] md:h-[28vh] rounded-t-xl md:rounded-t-xl border-t-2 flex flex-col shadow-md '>
                            <div className='py-5 px-4 gap-3'>
                                <div className='w-[26%] h-[3vh] md:w-[24%] md:h-[3vh] bg-red-100 whitespace-nowrap flex items-center justify-center md:px-1 '>
                                    <h1 className='text-[13px] md:text-[16px] px-1 text-red-700'>Emergency</h1>
                                </div>
                                <div className='py-3'>
                                    <h1 className='text-xl md:text-[25px] whitespace-nowrap'>Meculam Deo - Standard Consult</h1>
                                </div>
                                <div className='flex gap-6'>
                                    <h1 className='text-gray-400 text-[16px] md:text-[19px]'>09:15am - 10:45am</h1>
                                    <div className='flex py-1 gap-3'>
                                        <div className=''>
                                            <img src="src/assets/Images/clock (1).png" alt="" className='w-[4vw] h-[2vh] rounded-full md:w-[2vh] md:h-[2vh] md:aspect-auto-1/1' />
                                        </div>
                                            <h1 className='mt-[-2px] text-[14px] text-blue-400 md:text-[19px]'>Starts in 15m</h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='w-[100%] h-[1px] bg-gray-300'></div>
                            </div>
                            <div className=' flex justify-between items-center md:flex md:items-center px-2 md:w-[100%] md:h-[12vh]'>
                                <div className='flex px-4 gap-2'>
                                    <div className=''>
                                        <img src="src/assets/Images/doctor M.jpeg" alt="" className='w-[7vh] h-[7vh]   rounded-full object-cover aspect-auto-1/1 ' />
                                    </div>
                                    <div className=''>
                                        <h1 className='text-[20px] text-blue-500 whitespace-nowrap md:text-[23px]'>Dr. Meculam</h1>
                                        <h1 className='text-[13px] md:text-[15px]'>+1 142 536 7890</h1>
                                    </div>                    
                                </div>
                                <div className='flex py-8 px-3 justify-center items-center md:px-4 md:flex gap-2'>
                                    <div className='  '>
                                        <img src="src/assets/Images/dot.png" alt="" className='w-[10vw] h-[5vh] md:w-[5vw] md:h-[4vh] rounded-full' />
                                    </div>
                                    <h1 className='py-3 ml-[-10px] text-blue-500 text-[14px] md:text-[20px]'>Billed</h1>
                                </div>
                            </div>

                        </div>        
                        <div className='w-[100%] h-[9vh] md:w-[100%] md:h-[9vh] flex justify-end items-center rounded-b-xl bg-[whitesmoke] px-3 md:border-none'>
                            <button className='w-[40%] h-[5vh] bg-gray-200 flex  items-center justify-between rounded-lg px-2 py-2 '>          
                                <img src="src/assets/Images/pen.png" alt="" className='w-[4vw]'/>                   
                                <h1 className=' text-[13px] md:text-[17px]'>Edit Consult</h1>              
                            </button>
                        </div>
                    </div>

                    {/* section16 */}
                    <div className='w-[90%] h-v[45vh] md:w-[100%] md:h-[35vh] space-y-0 flex flex-col'> 
                        <div className='bg-[whitesmoke] w-[100%] h-[32vh] border-b-2 md:w-[100%] md:h-[28vh] rounded-t-xl md:rounded-t-xl border-t-2 flex flex-col shadow-md '>
                            <div className='py-5 px-4 gap-3'>
                                <div className='w-[26%] h-[3vh] md:w-[24%] md:h-[4vh] bg-blue-100  whitespace-nowrap flex items-center justify-center md:px-1'>
                                    <h1 className='text-[13px] md:text-[16px] px-1 text-blue-700'>Emergency</h1>
                                </div>
                                <div className='py-3'>
                                    <h1 className='text-xl md:text-[25px] whitespace-nowrap'>Meculam Deo - Standard Consult</h1>
                                </div>
                                <div className='flex gap-6'>
                                    <h1 className='text-gray-400 text-[16px] md:text-[19px]'>09:15am - 10:45am</h1>
                                    <div className='flex py-1 gap-3'>
                                        <div className=''>
                                            <img src="src/assets/Images/clock (1).png" alt="" className='w-[4vw] h-[2vh] rounded-full md:w-[2vh] md:h-[2vh] md:aspect-auto-1/1' />
                                        </div>
                                            <h1 className='mt-[-2px] text-[14px] text-blue-400 md:text-[19px]'>Starts in 15m</h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='w-[100%] h-[1px] bg-gray-300'></div>
                            </div>
                            <div className=' flex justify-between items-center md:flex md:items-center px-2 md:w-[100%] md:h-[12vh]'>
                                <div className='flex px-4 gap-2'>
                                    <div className=''>
                                        <img src="src/assets/Images/doctor M.jpeg" alt="" className='w-[7vh] h-[7vh]   rounded-full object-cover aspect-auto-1/1 ' />
                                    </div>
                                    <div className=''>
                                        <h1 className='text-[20px] text-blue-500 whitespace-nowrap md:text-[23px]'>Dr. Meculam</h1>
                                        <h1 className='text-[13px] md:text-[15px]'>+1 142 536 7890</h1>
                                    </div>                    
                                </div>
                                <div className='flex py-8 px-3 justify-center  items-center md:px-4 md:flex gap-2'>
                                    <div className='  '>
                                        <img src="src/assets/Images/dot.png" alt="" className='w-[10vw] h-[5vh] md:w-[5vw] md:h-[4vh] rounded-full' />
                                    </div>
                                    <h1 className='py-3 ml-[-10px] text-blue-500 text-[14px] md:text-[20px] '>Billed</h1>
                                </div>
                            </div>

                        </div>        
                        <div className='w-[100%] h-[9vh] md:w-[101%] md:h-[9vh] flex justify-end items-center rounded-b-xl bg-[whitesmoke] px-3 md:border-none'>
                            <button className='w-[40%] h-[5vh] bg-gray-200 flex  items-center justify-between rounded-lg px-2 py-2 '>          
                                <img src="src/assets/Images/pen.png" alt="" className='w-[4vw]'/>                   
                                <h1 className=' text-[13px] md:text-[17px]'>Edit Consult</h1>              
                            </button>
                        </div>
                    </div>          
                {/* ...... */}
                </div>
            
                </div>
                       
                        
            </div>


                {/* lg-section */}
                
            <div className="hidden lg:flex lg:flex-row lg:space-x-1 lg:w-[80vw] lg:h-[100vh] lg:mt-20">
                <div className='flex flex-col'>
                    <div className='w-[100%] h-auto bg-white lg:w-[55vw] lg:h-[12vh] lg:ml-64'>
                            {/* heading */}
                        <div className='flex flex-row py-5 px-5 justify-between md:py-5 md:px-11 lg:flex lg:items-center'> 
                            <div >
                                <h1 className='text-[28px] md:text-5xl md:py-2 lg:text-4xl'>Johen doe</h1>
                            </div>
                            <div>
                                <div className="  bg-indigo-700 rounded-md flex gap-2 justify-center py-3 px-2 lg:w-[108%] lg:h-[6vh] lg:flex lg:items-center">
                                    <div className='lg:flex lg:items-center'>
                                        <img src="src/assets/Images/plus (2).png" alt="" className='w-[10px] h-[10px]  md:w-[20px] md:h-[20px] lg:w-[10px] lg:h-[10px]'/>
                                    </div>
                                    <div>
                                        <Link className=' flex justify-center ' to={`/Patientdashboard`}> 
                                        <h1 className=' text-white  whitespace-nowrap md:text-2xl lg:text-[17px]'> <h1>Add Record</h1></h1>
                                        </Link>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* section2 */}
                    <div className='w-[55vw] h-[auto] ml-64 flex flex-row flex-wrap py-2 px-4 space-x-4'>
                        <div className='w-[11vw] h-[37vh] bg-blue-700 rounded-lg'>
                            <div className='lg:flex lg:justify-between lg:px-3 lg:py-5'>
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
                            <div className='lg:ml-[-24px] lg:py-4'>
                                <HeartRateChart />
                            </div>
                        </div>

                        {/* section3 */}
                        <div className='w-[13vw] h-[33vh] bg-white border-2 rounded-lg'>
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

                        {/* section4 */}
                        <div className='flex flex-col space-y-4'>
                            <div className='w-[12vw] h-[22vh]'>
                                <div className='lg:w-[12vw] lg:h-[22vh] bg-white rounded-md shadow-md lg:px-4 lg:py-5 lg:space-y-3 lg:border-t-2'>
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
                            </div>

                            {/* section5 */}
                            <div className='w-[12vw] h-[13vh] '>
                                <div className='lg:w-[12vw] lg:h-[13vh] bg-white rounded-lg shadow-md lg:space-y-3 lg:py-4 lg:px-4 lg:border-t-2'>
                                    <div className=' flex justify-between'>
                                        <h1 className='lg:text-[14px]'>Bill Due</h1>
                                        <img src="src/assets/Images/wallet.png" alt="" className='w-[15px] h-[18px] mt-2' />
                                    </div>
                                    <div className='lg:font-light'>
                                        $214.86
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* section6 */}
                        <div className='flex flex-col space-y-4'>
                            <div className='w-[12vw] h-[26vh] '>
                                <div className='lg:w-[12vw] lg:h-[26vh] rounded-lg bg-white shadow-md lg:px-2 lg:py-5 lg:space-y-3 lg:border-t-2' >
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
                            </div>

                            {/* section7 */}
                            <div className='w-[12vw] h-[15vh] '>
                                <div className='lg:w-[12vw] lg:h-[15vh] bg-white rounded-md shadow-md lg:flex lg:px-2 lg:border-t-2'>
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

                        {/* section8 */}
                        <div className='w-[27vw] h-[45vh]  mt-5'>
                            <div className='lg:w-[27vw] lg:h-[45vh] bg-white rounded-lg shadow-md lg:border-t-2 py-4'>
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
                                <div className='w-[350px] h-[6px] px-5 py-6 '>
                                    <HeartECGChart/>
                                </div>
                            </div>
                        </div>

                        {/* section9 */}
                        <div className='w-[22vw] h-[45vh] mt-5'>
                            <div className='lg:w-[22vw] lg:h-[45vh] bg-white rounded-lg shadow-md lg:border-t-2'>
                                <div className='flex flex-col py-4 space-y-2 place-items-center '>
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

                                    {/* section9a */}
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

                        {/* section10 */}
                        <div className='w-[31vw] h-[45vh] mt-5'>
                            <div className='gap-0 flex flex-col items-center px-2'>
                                <div className='bg-[whitesmoke] w-[31vw] h-[40vh] shadow-md rounded-t-xl flex flex-col py-5 space-y-4 border-t-2'>
                                    <div className='flex justify-between px-6'>
                                        <h1 className='text-[22px]'>Current Vitals</h1>
                                        <div className='w-[9vw] h-[4vh] bg-gray-200 rounded-2xl flex justify-end px-3 py-2'>
                                            <img src="src/assets/Images/loupe.png" alt="" className='w-[2vh] h-[2vh]'/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='w-[100%] h-[1px] bg-gray-300'></div>
                                    </div>
                                    <div className=' flex gap-16 md:justify-between px-6 md:px-7'>
                                        <div className='flex flex-col justify-between'>
                                            <h1 className='text-gray-500 text-[15px]'>Patient Name:</h1>
                                            <h1 className='font-bold'>Jonsahn</h1>
                                        </div>
                                        <div className='flex flex-col justify-between'>
                                            <h1 className='text-gray-500 text-[15px]'>Patient Id:</h1>
                                            <h1 className='font-bold'>1254896</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='w-[100%] h-[1px] bg-gray-300'></div>
                                    </div>
                                    <div className='flex flex-row px-2'>
                                        <div className=' flex px-7 gap-4'>
                                            <div className='flex flex-col'>
                                                <img src="src/assets/Images/weighing-machine.png" alt="" className='w-[5vw] h-[4vh]'/>
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
                                                <img src="src/assets/Images/dude.png" alt="" className='w-[10vw] h-[7vh]'/>
                                            </div>
                                            <div className='mt-[-8px] pr-2'> 
                                                <h1 className='text-[12px]'>Height</h1>
                                                <h1 className='text-[19px]'>6'1</h1>
                                            </div>
                                        </div>
                                        <div className='w-[1px] h-[9vh] bg-gray-300'></div>
                                        <div className='flex ml-4'>
                                            <div className=' '>
                                                <img src="src/assets/Images/statistic.png" alt="" className='w=[7vw] h-[4vh]'/>
                                                <h1 className='leading-4 text-[19px]'>30.34</h1>
                                            </div>
                                            <div className='pr-[8px] text-[13px] mt-[-8px]'>BMI</div>
                                        </div>
                                    </div>
                                    <div className='w-[100%] h-[1px] bg-gray-300'></div>
                                    <div className='px-5 text-[14px]'>
                                        <h1>Recorded on 25/05/2020</h1>
                                    </div>      
                                </div>
                                    {/* secti0n10 a  */}
                                    <div className='flex justify-center w-[31vw] rounded-b-lg h-[9vh] '>
                                        <div className='w-[100%] h-[8vh] bg-indigo-500 rounded-b-lg px-7 flex gap-2 py-2 text-white text-[14px]'>
                                            <img src="src/assets/Images/cigarette.png"  alt="" className='w-[2vw] h-[4vh]'/>
                                            <h1 className='text-white text-[14px] mt-2'>Smoking Status: current everyday smoker</h1>
                                        </div>
                                    </div>
                            </div>                   
                        </div>
                        
                        
                        <div className='flex flex-col space-y-3 mt-5'>

                            {/* section11 */}
                            <div className='w-[18vw] h-[23vh] '>
                                <div className='lg:flex lg:flex-col lg:space-y-5 '>
                                    <div className='lg:w-[18vw] lg:h-[23vh] bg-white rounded-lg shadow-md lg:px-5 lg:py-7 lg:border-t-2'>
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
                                </div>
                            </div>

                            {/* section12 */}
                            <div className='w-[18vw] h-[23vh]'>
                                <div className='lg:w-[18vw] lg:h-[23vh] bg-white rounded-lg shadow-md lg:px-5 lg:py-5 lg:border-t-2'>
                                    <div>
                                        <img src="src/assets/Images/blood-test.png" alt="" className='lg:w-[50px] lg:h-[50px] rounded-full' />
                                    </div>
                                    <div className='py-2 text-blue-600'>
                                        <h1 className='lg:text-lg font-light'> Blood Count  </h1>
                                        <h1 className='lg:text-2xl lg:font-light'>9.456/ml</h1>
                                    </div>
                                </div>                 
                            </div>
                        </div>
                    </div>
                </div>

                {/* thirdsection */} 
                <div className='w-[25vw] h-[154vh]  px-2 space-y-4 py-7'>

                     {/* section13 */}
                    <div className='w-[22vw] h-[16vh]'>
                        <div className='lg:w-[22vw] lg:h-[16vh] bg-white rounded-lg shadow-md lg:px-6 lg:py-6 lg:border-t-2 lg:flex lg:space-x-3'>
                            <div className='py-1'>
                                <img src="src/assets/Images/doctor f.jpeg" alt="" className='lg:w-[40px] lg:h-[40px] rounded-full object-cover' />
                            </div>
                            <div className='flex flex-col text-blue-600'>
                                <h1 className='lg:text-2xl'>Dr. Kevin Black</h1>
                                <h1 className='lg:text-lg'>Cardiologists</h1>
                            </div>            
                        </div>
                    </div>

                        {/* section14 */}
                    <div className='w-[22vw] h-[5vh]'>
                        <div className='py-1 text-2xl'>
                            <h1>Schedule Appointments</h1>
                        </div>            
                    </div>

                    <div className='space-y-7'>   
                        {/* section15 */}
                        <div className='w-[22vw] h-[39vh] bg-white rounded-lg shadow-md border-2'>
                            <div className='py-5 px-3 gap-3'>
                                <div className='lg:w-[7vw] lg:h-[3vh] bg-blue-100 rounded-lg lg:flex lg:justify-center'>
                                    <h1 className='text-[13px] px-1 text-blue-700'>Emergency</h1>
                                </div>
                                <div className='py-2'>
                                    <h1 className='lg:text-xl'>Jilmil Deo - Neuro Consult</h1>
                                </div>
                                <div className='flex gap-4'>
                                    <h1 className='text-gray-400 text-[16px] whitespace-nowrap'>09:15am - 10:45am</h1>
                                    <div className='flex py-1 gap-3'>
                                        <img src="src/assets/Images/clock (1).png" alt="" className='lg:w-[1vw] lg:h-[2vh]' />
                                        <h1 className='mt-[-2px] text-[12px] whitespace-nowrap'>Starts in 15m</h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='w-[100%] h-[1px] bg-gray-300 lg:mt-[-8px]'></div>
                            </div>

                            <div className=' bg-white gap-3 '>
                                <div className='flex'>
                                    <div className='flex py-6 px-2 lg:gap-3'>
                                        <div className='lg:w-[50px] lg:h-[50px]'>
                                            <img src="src/assets/Images/doctor M.jpeg" alt="" className=' w-[40px] h-[40px] object-cover rounded-full' />
                                        </div>
                                        <div className=''>
                                            <h1 className='lg:text-xl lg:text-blue-500 lg:whitespace-nowrap'>Dr. Meculam</h1>
                                            <h1 className='lg:text-[13px] lg:whitespace-nowrap'>+1 125 412 0215</h1>
                                        </div>
                                    </div>
                                    <div className='lg:flex lg:py-8 lg:gap-2'>
                                        <div className=' mt-[-3px]'>
                                            <img src="src/assets/Images/dot.png" alt="" className='lg:w-[4vw] lg:h-[6vh]' />
                                        </div>
                                        <h1 className='py-3 ml-[-8px] text-blue-500 text-[14px] lg:mt-[-5px]'>Bulk Billed</h1>
                                    </div>
                                </div>
                                <div>
                                    <div className='lg:w-[100%] h-[1px] bg-gray-300 lg:mt-[-18px]'></div>
                                </div> 

                                <div className='flex justify-end px-3 py-2 '>
                                    <button className='lg:w-[10vw] lg:h-[5vh] bg-gray-200 rounded-md px-2 py-2 mt-3 flex justify-center'>
                                        <img src="src/assets/Images/pen.png" alt="" className='lg:w-[1vw]'/>
                                        <h1 className=' text-[13px] lg:ml-4 '>Edit Consult</h1>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* section16 */}
                        <div className='w-[22vw] h-[39vh] bg-white rounded-lg shadow-md border-2'>
                            <div className='py-5 px-3 gap-3'>
                                <div className='lg:w-[7vw] lg:h-[3vh] bg-blue-100 rounded-lg lg:flex lg:justify-center'>
                                    <h1 className='text-[13px] px-1 text-blue-700'>Emergency</h1>
                                </div>
                                <div className='py-2'>
                                    <h1 className='lg:text-xl'>Jilmil Deo - Neuro Consult</h1>
                                </div>
                                <div className='flex gap-4'>
                                    <h1 className='text-gray-400 text-[16px] whitespace-nowrap'>09:15am - 10:45am</h1>
                                    <div className='flex py-1 gap-3'>
                                        <img src="src/assets/Images/clock (1).png" alt="" className='lg:w-[1vw] lg:h-[2vh]' />
                                        <h1 className='mt-[-2px] text-[12px] whitespace-nowrap'>Starts in 15m</h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='w-[100%] h-[1px] bg-gray-300 lg:mt-[-8px]'></div>
                            </div>

                            <div className=' bg-white gap-3 '>
                                <div className='flex'>
                                    <div className='flex py-6 px-2 lg:gap-3'>
                                        <div className='lg:w-[50px] lg:h-[50px]'>
                                            <img src="src/assets/Images/doctor M.jpeg" alt="" className=' w-[40px] h-[40px] object-cover rounded-full' />
                                        </div>
                                        <div className=''>
                                            <h1 className='lg:text-xl lg:text-blue-500 lg:whitespace-nowrap'>Dr. Meculam</h1>
                                            <h1 className='lg:text-[13px] lg:whitespace-nowrap'>+1 125 412 0215</h1>
                                        </div>
                                    </div>
                                    <div className='lg:flex lg:py-8 lg:gap-2'>
                                        <div className=' mt-[-3px]'>
                                            <img src="src/assets/Images/dot.png" alt="" className='lg:w-[4vw] lg:h-[6vh]' />
                                        </div>
                                        <h1 className='py-3 ml-[-8px] text-blue-500 text-[14px] lg:mt-[-5px]'>Bulk Billed</h1>
                                    </div>
                                </div>
                                <div>
                                    <div className='lg:w-[100%] h-[1px] bg-gray-300 lg:mt-[-18px]'></div>
                                </div> 

                                <div className='flex justify-end px-3 py-2 '>
                                    <button className='lg:w-[10vw] lg:h-[5vh] bg-gray-200 rounded-md px-2 py-2 mt-3 flex justify-center'>
                                        <img src="src/assets/Images/pen.png" alt="" className='lg:w-[1vw]'/>
                                        <h1 className=' text-[13px] lg:ml-4 '>Edit Consult</h1>
                                    </button>
                                </div>
                            </div>
                        </div>

                            {/* section17 */}
                        <div className='w-[22vw] h-[39vh] bg-white rounded-lg shadow-md border-2'>
                            <div className='py-5 px-3 gap-3'>
                                <div className='lg:w-[7vw] lg:h-[3vh] bg-blue-100 rounded-lg lg:flex lg:justify-center'>
                                    <h1 className='text-[13px] px-1 text-blue-700'>Emergency</h1>
                                </div>
                                <div className='py-2'>
                                    <h1 className='lg:text-xl'>Jilmil Deo - Neuro Consult</h1>
                                </div>
                                <div className='flex gap-4'>
                                    <h1 className='text-gray-400 text-[16px] whitespace-nowrap'>09:15am - 10:45am</h1>
                                    <div className='flex py-1 gap-3'>
                                        <img src="src/assets/Images/clock (1).png" alt="" className='lg:w-[1vw] lg:h-[2vh]' />
                                        <h1 className='mt-[-2px] text-[12px] whitespace-nowrap'>Starts in 15m</h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='w-[100%] h-[1px] bg-gray-300 lg:mt-[-8px]'></div>
                            </div>

                            <div className=' bg-white gap-3 '>
                                <div className='flex'>
                                    <div className='flex py-6 px-2 lg:gap-3'>
                                        <div className='lg:w-[50px] lg:h-[50px]'>
                                            <img src="src/assets/Images/doctor M.jpeg" alt="" className=' w-[40px] h-[40px] object-cover rounded-full' />
                                        </div>
                                        <div className=''>
                                            <h1 className='lg:text-xl lg:text-blue-500 lg:whitespace-nowrap'>Dr. Meculam</h1>
                                            <h1 className='lg:text-[13px] lg:whitespace-nowrap'>+1 125 412 0215</h1>
                                        </div>
                                    </div>
                                    <div className='lg:flex lg:py-8 lg:gap-2'>
                                        <div className=' mt-[-3px]'>
                                            <img src="src/assets/Images/dot.png" alt="" className='lg:w-[4vw] lg:h-[6vh]' />
                                        </div>
                                        <h1 className='py-3 ml-[-8px] text-blue-500 text-[14px] lg:mt-[-5px]'>Bulk Billed</h1>
                                    </div>
                                </div>
                                <div>
                                    <div className='lg:w-[100%] h-[1px] bg-gray-300 lg:mt-[-18px]'></div>
                                </div> 

                                <div className='flex justify-end px-3 py-2 '>
                                    <button className='lg:w-[10vw] lg:h-[5vh] bg-gray-200 rounded-md px-2 py-2 mt-3  flex justify-center'>
                                        <img src="src/assets/Images/pen.png" alt="" className='lg:w-[1vw]'/>
                                        <h1 className=' text-[13px] lg:ml-4 '>Edit Consult</h1>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>    
    
  
            
        </>
      );    
}

export default Patientdashboard;


