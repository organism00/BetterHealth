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

    
        <div className='lg:hidden bg-[whitesmoke] w-auto overflow-auto h-auto flex flex-col items-center justify-evenly space-y-4  '>
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

            <div className='bg-white w-[90vw] h-[45vh] shadow-md rounded-xl flex flex-col py-5 space-y-4 '>
                <div className='mt-36 w-auto h-[1px] bg-slate-300'></div>
                <h1></h1>

            </div>
             <div className='bg-white w-[90vw] h-[22vh] shadow-md rounded-xl flex flex-col py-5 space-y-4 '>

            </div>
             <div className='bg-white w-[90vw] h-[22vh] shadow-md rounded-xl flex flex-col py-5 space-y-4 '>

            </div>
          





        </div>

    
      </>
  )
}

export default Patientdashboard




