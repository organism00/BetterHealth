import React from 'react'
//import { Link } from 'react-router-dom'
import SideBar from '../Components/SideBar'
import Navbar from '../Components/Navbar'
import Chart from '../Components/Chart'



const Patientdashboard = () => {
    return (
        <>
          <div className="lg:grid lg:grid-cols-[16rem_1fr] z-0">
            <SideBar />
            <main className="col-start-2  h-full w-full md:w-[70%] lg:w-full mt-12 lg:mt-0 md:mt-0">
              <Navbar />
    
            <div className="mt-24 w-full h-full lg:w-full lg:ml-0 md:ml-72 lg:pl-12 lg:pr-5 px-5 space-y-4">
                  <div className="flex gap-5 ">
                    <h1 className="text-3xl">Johen Doe</h1>
                    <div className="flex gap-2 items-center">
                      {/* <GoHome /> */}
                      <p className="font-thin"> - Patients form</p>
                    </div>
                  </div>

<div className='lg: flex lg:flex-row lg:bg-black lg:w-[100vw] lg:h-[100vh]'>
    <div className='lg:w-[50vw] lg:h-screen lg:bg-red-400'>

        

    </div>
    <div className='lg:w-[30vw] lg:h-[100vh] lg:bg-green-500'>

    </div>

</div>
               
        <div className='lg:hidden bg-white w-auto h-auto lg:w-[60vw] lg:h-[100vh] lg:space-x-4 lg:items-start flex flex-col items-center justify-evenly space-y-4 lg:py-2 lg:px-2 lg:gap-5 '>
            
        <div className='bg-white w-[90vw] h-[22vh] lg:w-[10vw] lg:h-[40vh] shadow-md rounded-xl flex flex-col px-3 py-2 justify-evenly ' >
            {/* <Chart/> */}

        </div> 
             
        <div className='bg-white w-[90vw] h-[22vh]  shadow-md rounded-xl flex flex-col px-3 py-2 justify-evenly' >
            {/* <Chart/> */}

        </div>     
            
            
        <div className='lg:flex lg:flex-col'>   
            
             <div className='bg-white w-[90vw] h-[22vh] lg:h-[25vh] lg:w-[10vw] shadow-md rounded-xl flex flex-col px-3 py-2 justify-evenly '>
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

            <div className='bg-white w-[90vw] h-[22vh] shadow-md rounded-xl flex flex-col px-3 py-2 justify-evenly'>
                <div>
                    <h1>Bill Due</h1>
                    <img src="" alt="" />
                </div>
                <div>
                    $214.86
                </div>
            </div>
        </div> 
            <div className='bg-white w-[90vw] h-[22vh] shadow-md rounded-xl flex flex-col  px-3 py-2 justify-evenly'>
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
                        <h1 className='text-[12px]  leading-6 font-bold '>+12%</h1>

                    </div>

                    <div>

                    <h1>Yesterday</h1>
                    </div>
                </div>

            </div>

            <div className='bg-white w-[90vw] h-[22vh] shadow-md rounded-xl px-3 py-2 flex flex-col  '>
                <div className='flex flex-row justify-between'>
                        <h1><img src="src/assets/Images/doctor.png" alt="" className='w-8 h-6 mt-6 '/></h1>
                    <div className='py-6 px-1'>
                        <h1 className='text-[20px] text-blue-600 font-semibold'>Johen Mark</h1> 
                        <h1 className='float-end px-2 '>My Doctor</h1>    
                    </div>
                </div>

            </div>
           
            <div className='bg-white w-[90vw] h-[22vh] shadow-md rounded-xl flex flex-col py-5 space-y-4 '>
                <div className='px-4'>
                    <h1>Heart ECG</h1>
                </div>


             
                <div className='flex flex-row justify-between px-3 '>
                    <div>
                     <select className='text-black text-[18px] w-36  h-6' name="">
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

          

            </div>

            <div className=' bg-white w-[90vw] h-[57vh] shadow-md rounded-xl '>
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

                <div className=' flex flew-row justify-center  '>
                    <button className='w-[80vw] h-[7vh] rounded-lg shadow-md bg-indigo-200  justify-between'>
                        <div className='flex justify-center gap-3 '>
                            <img src="src/assets/Images/message (1).png" alt="" className='w-[4vw] h-[2vh] my-2 '/>
                        <div className='px-2 text-indigo-400 text-2xl'>
                             <h1 className='text-[18px]'>Messages</h1>
                        </div>
                        </div>
                    </button>

                </div>
            </div> 

            <div className='bg-white w-[90vw] h-[53vh] shadow-md rounded-xl flex flex-col py-5 space-y-4'>
                <div className='flex justify-between px-4'>
                    <h1 className='text-[22px]'>Current Vitals</h1>
                    <div className='w-[23vw] h-[4vh] bg-gray-200 rounded-2xl flex justify-end px-3 py-2'>
                        <img src="src/assets/Images/loupe.png" alt="" className='w-[2vh] h-[2vh]'/>
                    </div>
                </div>
                <div className='w[70vw] h-[1px] bg-gray-300'></div>
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
                <div className='w-[90vw] h-[1px] bg-gray-300'></div>
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
                <div className='w-[90vw] h-[1px] bg-red-500'></div>
                <div className='px-5 text-[12px]'>
                    <h1>Recorded on 25/05/2020</h1>
                </div>
                <div className='w-[90vw] h-[13vh] bg-indigo-500 rounded-lg py-5 px-7 flex gap-2 text-white text-[14px]'>
                    <img src="src/assets/Images/cigarette.png"  alt="" className='w-[9vw] h-[4vh]'/>
                    <h1 className='text-white text-[14px] py-3 font-semibold'>Smoking Status: current everyday smoker</h1>
                </div>
            </div> 
            <div className='bg-white w-[90vw] h-[22vh] shadow-md rounded-xl  px-4 py-4 '>
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

            <div className='bg-white w-[90vw] h-[22vh] shadow-md rounded-xl flex flex-col py-6 px-5 '>
                <div>
                    <img src="src/assets/Images/blood-test.png" alt="" className='w-[12vw] h-[6vh]' />
                </div>
                <div className='py-2 text-blue-600'>
                <h1 className='text-[19px] font-sans'> Blood Count  </h1>
                <h1 className='text-2xl'>9.456/ml</h1>
                </div>
            </div>

            <div className='bg-white w-[90vw] h-[19vh] shadow-md rounded-xl  flex py-9 px-5 gap-3'>
                <div className='py-1'>
                    <img src="src/assets/Images/doctor f.jpeg" alt="" className='w-[16vw] h-[8vh] rounded-full' />
                </div>
                <div className='flex flex-col text-blue-600'>
                    <h1 className='text-3xl'>Dr. Kevin Black</h1>
                    <h1 className='text-[20px]'>Cardiologists</h1>
                </div>
            </div>  
            <div className='py-2 float-left mr-32 text-xl'>
                <h1>Scheduled Appointments</h1>
            </div>

            <div className='bg-white w-[90vw] h-[45vh] shadow-md rounded-xl flex flex-col  '>
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
                             <img src="src/assets/Images/doctor M.jpeg" alt="" className='w-[16vw] h-[8vh] rounded-full' />
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

                <div className='flex justify-end px-3 py-6 '>
                     <button className='w-[40vw] h-[5vh] bg-gray-200 rounded-lg px-2 py-2 '>          
                       <img src="src/assets/Images/pen.png" alt="" className='w-[4vw]'/>                   
                       <h1 className='mt-[-20px] text-[13px] '>Edit Consult</h1>              
                     </button>

                </div>
               
                
            </div>

            <div className='bg-white w-[90vw] h-[45vh] shadow-md rounded-xl flex flex-col  '>
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

                <div className='flex justify-end px-3 py-6 '>
                     <button className='w-[40vw] h-[5vh] bg-gray-200 rounded-lg px-2 py-2 '>          
                       <img src="src/assets/Images/pen.png" alt="" className='w-[4vw]'/>                   
                       <h1 className='mt-[-20px] text-[13px] '>Edit Consult</h1>              
                     </button>

                </div>
               
                
            </div>


            <div className='bg-white w-[90vw] h-[45vh] shadow-md rounded-xl flex flex-col  '>
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

                <div className='flex justify-end px-3 py-6 '>
                     <button className='w-[40vw] h-[5vh] bg-gray-200 rounded-lg px-2 py-2 '>          
                       <img src="src/assets/Images/pen.png" alt="" className='w-[4vw]'/>                   
                       <h1 className='mt-[-20px] text-[13px] '>Edit Consult</h1>              
                     </button>

                </div>
               
                
            </div>
            
            
            
               
        </div>
                </div>

                <div className='lg:w-[30%] lg:h-auto  lg:bg-red-600'>
                    <div className='lg:w-[20vw] '></div>
                </div>
            </main>
          </div>
        </>
      );    
}

export default Patientdashboard




