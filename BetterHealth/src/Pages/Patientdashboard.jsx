import React from 'react'
import { Link } from 'react-router-dom'

const Patientdashboard = () => {
  return (
    <>
    {/* <button
        className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}
      >
        {children}
      </button> */}

    
        <div className='lg:hidden bg-[whitesmoke] w-auto h-auto flex flex-col items-center justify-evenly space-y-4  '>
            <div className='bg-white w-[90vw] h-[22vh] shadow-md rounded-xl flex flex-col px-3 py-2 justify-evenly'>
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


                    <div className='w-[40vw] h-[12vw] bg-blue-50 mt-[-15px] px-3 rounded-md flex justify-between leading-10'>
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
                        <div className='flex justify-center'>
                            <img src="src/assets/Images/message (1).png" alt="" className='w-[4vw] h-[2vh] my-2 '/>
                        <div className='px-2 text-indigo-400 text-2xl'>
                             <h1>Messages</h1>
                        </div>
                        </div>
                    </button>

                </div>

                
               {/* <div className='w-[80vw] h-[7vh] rounded-lg bg-indigo-200 mx-5 '>
                <div className='flex justify-center py-3 '>
                <img src="src/assets/Images/message (1).png" alt="" className='w-[8vw] h-[4vh] '/>
                Messages

                </div>

               </div> */}

            </div>
             {/* <div className='bg-white w-[90vw] h-[22vh] shadow-md rounded-xl flex flex-col py-5 space-y-4 '>

            </div>
             <div className='bg-white w-[90vw] h-[22vh] shadow-md rounded-xl flex flex-col py-5 space-y-4 '>

            </div> */}
          





        </div>

    
      </>
  )
}

export default Patientdashboard




