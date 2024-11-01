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

            <div className="flex flex-col md:flex md:flex-col py-8 md:py-20 ">
                <div className='w-[100vw] h-auto bg-yellow-900 md:bg-red-600 '>
                    {/* heading */}
                    <div className='flex flex-row py-5 px-5 justify-between md:py-5 md:px-11'> 
                        <div >
                            <h1 className='text-[28px] md:text-5xl md:py-2 '>Johen doe</h1>
                        </div>
                        <div>
                            <div className=" w-[100%] h-[95%] md:w-[110%] md:h-[95%] bg-indigo-700 rounded-md flex gap-2 justify-center py-3 px-2 md:py-4">
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

                   
                    <div className='w-[100%] h-auto md:w-[100%] md:h-auto bg-red-300 flex flex-col items-center justify-evenly space-y-4 md:flex md:flex-col md:pl-[40%] md:px-6'>
                        {/* content1 */}

                        <div className='bg-indigo-800 w-[87%] h-[45vh] md:w-[100%] md:h-[40vh] md:bg-indigo-800 shadow-md rounded-xl flex flex-col px-4 border-t-2 ' >
                            <div className='flex justify-between px-3 py-5 md:px-6 md:py-6'>
                                <div>
                                    <h1 className='font-semibold text-white md:text-2xl'>Heart Rate</h1>
                                </div>
                                <div>
                                    <img src="src/assets/Images/like.png" alt="" className='w-[4vw] h-[2vh] mt-4 md:w-[4vw] md:h-[3vh]'/>
                                </div>
                            </div>
                            <div className='px-3 relative font-semibold text-white margin md:text-xl md:px-6'>
                                <h1 className='absolute top-0'>75/118</h1>
                            </div>        
                            <div className='mt-6 py-8 md:px-6 md:w-[100%] md:h-[9vh]'>
                                <HeartRateChart/>
                            </div>
                        </div>

                        {/* content2 */}
                        <div className='bg-white w-[90%] h-[39vh] md:w-[100%] md:h-[37vh] shadow-md rounded-xl flex flex-col px-5 py-2 justify-evenly border-t-2'>
                            <div className='flex justify-between px-3 py-5'>
                                <div>
                                    <h1 className='font-semibold md:text-2xl'>Fever</h1>
                                </div>
                                <div>
                                    <img src="src/assets/Images/like (1).png" alt="" className='w-[4vw] h-[2vh] mt-4 md:w-[4vw] md:h-[3vh]'/>
                                </div>
                            </div>

                            <div className='px-3 font-semibold '>
                                <h1 className='sup text-sm md:text-xl'>100.8 <span>&#176;</span>F</h1>
                            </div>

                            <div className=' py-8 md:w-[97%] md:px-2'>
                                <Fever/>
                            </div>
                        </div>

                        {/* content3  */}
                        <div className='bg-white w-[90%] h-[22vh] md:w-[100%] md:h-[22vh] shadow-md rounded-xl flex flex-col px-6 py-6 justify-evenly border-t-2'>
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
                        <div className='bg-white w-[90%] h-[14vh] md:w-[100%] md:h-[14vh] shadow-md rounded-xl flex flex-col px-6 py-4 justify-evenly border-t-2'>
                            <div className='flex justify-between'>
                                <h1 className='text-[20px] md:text-xl md:font-semibold'>Bill Due</h1>
                                <img src="src/assets/Images/wallet.png" alt="" className='w-[4vw] h-[18px] md:w-[20px] md:h-[24px]' />
                            </div>
                            <div className='text[18px] font-light md:text-[18px]'>
                                 $214.86
                            </div>
                        </div>

                        {/* content5 */}
                        <div className='bg-white w-[90%] h-[20vh] md:w-[100%] md:h-[22vh] shadow-md rounded-xl flex flex-col border-t-2 px-6 py-3 justify-evenly'>
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
                        <div className='bg-white w-[90%] h-[14vh] md:w-[100%] md:h-[14vh] shadow-md rounded-xl px-6 py-2 flex flex-col border-t-2 '>
                            <div className='flex flex-row justify-between'>
                                <h1><img src="src/assets/Images/doctor.png" alt="" className='w-8 h-6 mt-6 '/></h1>
                                <div className='py-3 px-1'>
                                    <h1 className='text-[18px] text-blue-600 font-semibold md:text-xl'>Johen Mark</h1> 
                                    <h1 className='float-end px-2 font-light text-gray-500 md:text-[18px]'>My Doctor</h1>    
                                </div>
                            </div>
                        </div>

                        {/* content7 */}
                        <div className='bg-white w-[90%] h-[37vh] md:w-[100%] md:h-[37vh] shadow-md rounded-xl flex flex-col py-5 md:px-6 md:py-6 space-y-2 border-t-2 px-2 '>
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
                    <div className='space-y-0 md:pr-7'>           
                        <div className='bg-white w-[100%] h-[42vh] md:w-[108%] md:h-[34vh] shadow-md rounded-t-lg border-t-2 '>
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
                                    <img src="src/assets/Images/patient.png" alt=""  className='w-[30%] h-[8vh] md:w-[6vw] md:h-[5vh] '/>
                                    <div className=' flex flex-col'>
                                        <h1 className='text-3xl'>47</h1>
                                        <h1 className='text-[14px] font-thin md:text-xl'>Patients</h1>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        {/* content9   */}
                        <div className='flex flew-row justify-center md:w-[108%] h-[7vh] bg-white rounded-b-lg'>
                                <button className='w-[90%] h-[6vh] rounded-lg shadow-md bg-indigo-200  justify-between'>
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

                    {/* section10  */}

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
          <div>
               <div className='w-[1px] h-[9vh] bg-gray-300'></div>
          </div>
          <div className='flex'>
              <div className='px-2 '>
                  <img src="src/assets/Images/statistic.png" alt="" className='w=[9vw] h-[5vh]'/>
                  <h1 className='leading-4 text-[19px]'>30.34</h1>
              </div>
          <div className='pr-[4px] text-[13px] mt-[-8px]'>BMI</div>
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
 </div> 

                        
                    ......    
                    </div>
                </div>
                       
                        
            </div>
            
    
  
            
        </>
      );    
}

export default Patientdashboard;


