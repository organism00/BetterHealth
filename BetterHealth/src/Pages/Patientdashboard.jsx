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

    
        <div className='lg:hidden bg-[whitesmoke] w-[100vw] h-[100vh] flex flex-col items-center justify-evenly gap-3  '>
            <div className='bg-white w-[80vw] h-[22vh] shadow-md rounded-xl flex flex-col px-3 py-2 justify-evenly'>
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

            <div className='bg-white w-[80vw] h-[22vh] shadow-md rounded-xl flex flex-col px-3 py-2 justify-evenly'>
                <div>
                    <h1>Bill Due</h1>
                    <img src="" alt="" />
                </div>
                <div>
                    $214.86
                </div>
            </div>

            <div className='bg-white w-[80vw] h-[22vh] shadow-md rounded-xl flex flex-col  px-3 py-2 justify-evenly'>
                <h1>
                    Fever History
                </h1>
                <select className='text-red-500' name="1 to 10 Jan'21">
                    <option className='text-red-400' value="11 to 31 '21"></option>
                    <option value="1 to 15 Feb '21"></option>
                    <option value="16 t0 18 Feb '21"></option>

                </select>

            </div>

            <div className='bg-white w-[80vw] h-[22vh] shadow-md rounded-xl flex flex-col '>
                <h1>bhbib</h1>

            </div>

            <div className='bg-white w-[80vw] h-[22vh] shadow-md rounded-xl flex flex-col '>
                <h1>bhbib</h1>

            </div>





        </div>

    
      </>
  )
}

export default Patientdashboard




