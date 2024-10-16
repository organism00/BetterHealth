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

    
        <div className='lg:hidden bg-[whitesmoke] w-[100vw] h-[100vh] flex flex-col items-center justify-evenly space-y-4  '>
            <div className='bg-white w-[90vw] h-[22vh] shadow-md rounded-xl flex flex-col px-3 py-2 justify-evenly'>
                <div className='flex justify-between '>
                    <h1>Blood Pre..</h1>
                    <img src="src/assets/Images/heartbeat.png" alt="" className='w-[5vw] h-[4vh]' />
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
                <div>
                    <h1>Johen Mark</h1>
                </div>

                </div>

            </div>

            <div className='bg-white w-[90vw] h-[22vh] shadow-md rounded-xl flex flex-col '>
                <h1>bhbib</h1>

            </div>





        </div>

    
      </>
  )
}

export default Patientdashboard




