import React from 'react'
import { GoHome } from "react-icons/go";
import geeimage from '../assets/images/third.png'
// import myimage from '../assets/images/second.png'
import proimage from '../assets/images/first.png'
 

const Home = () => {
  return (
   <>
   <section className='lg:px-4 mt-28 lg:mx-10 my-10'>
        <div className='flex gap-x-5 px-5 lg:px-0 md:px-8 md:ml-64 lg:ml-0'>
            <h1 className="text-2xl">Doctors</h1>
            <div className="flex gap-2 items-center">
                <GoHome />
                <p className="font-thin"> - Doctors</p>
            </div>
        </div>
        <div className='w-full py-5  md:ml-72 lg:ml-0 lg:w-[103%] gap-x-5 md:w-[94.4%] grid grid-cols-1 lg:grid-cols-3 gap-y-10 place-items-center'>
            <div className='w-[90%] h-[70vh] lg:h-72 md:w-[100%] shadow-xl border border-stone-100 rounded-lg'>
                <div className='flex justify-center flex-col items-center text-center space-y-3 text-2xl text-blue-700 font-medium'>
                <img src={proimage} alt="" />
                <p className=''>Dr. Tristan</p>
                <p className='font-medium text-sm text-gray-400'>Gynecologist</p>
                </div>
            </div>
            <div className='w-[90%] h-[70vh] lg:h-72 md:w-[100%] shadow-xl border border-stone-100 rounded-lg'>
            <div className='flex justify-center flex-col items-center text-center space-y-3 text-2xl text-blue-700 font-medium'>
                <img src={proimage} className="h-[]" />
                <p className=''>Dr. Sophia</p>
                <p className='font-medium text-sm text-gray-400 '>Dentist</p>
                </div>
            </div>
            <div className='w-[90%] h-[70vh] lg:h-72 md:w-[100%] shadow-xl border border-stone-100 rounded-lg'>
            <div className='flex justify-center flex-col items-center text-center space-y-3 text-2xl text-blue-700 font-medium'>
                <img src={proimage} />
                <p className=''>Dr. Jacob</p>
                <p className='font-medium text-sm text-gray-400'>Physical Therapy</p>
                </div>
            </div>
            <div className='w-[90%] h-[70vh] lg:h-72 md:w-[100%] shadow-xl border border-stone-100 rounded-lg'>
            <div className='flex justify-center flex-col items-center text-center space-y-3 text-2xl text-blue-700 font-medium'>
                <img src={proimage} />
                <p className=''>Dr. Isabella</p>
                <p className='font-medium text-sm text-gray-400'>Nursing</p>
                </div>  
            </div>
            <div className='w-[90%] h-[70vh] lg:h-72 md:w-[100%] shadow-xl border border-stone-100 rounded-lg'>
            <div className='flex justify-center flex-col items-center text-center space-y-3 text-2xl text-blue-700 font-medium'>
                <img src={proimage} />
                <p className=''>Dr. Emma</p>
                <p className='font-medium text-sm text-gray-400'>Urologist</p>
                </div>
            </div>
            <div className='w-[90%] h-[70vh] lg:h-72 md:w-[100%] shadow-xl border border-stone-100 rounded-lg'>
            <div className='flex justify-center flex-col items-center text-center space-y-3 text-2xl text-blue-700 font-medium'>
                <img src={proimage} />
                <p className=''>Dr. William</p>
                <p className='font-medium text-sm text-gray-400'> Rheumatologist</p>
                </div>
            </div>
            <div className='w-[90%] h-[70vh] lg:h-72 md:w-[100%] shadow-xl border border-stone-100 rounded-lg'>
            <div className='flex justify-center flex-col items-center text-center space-y-3 text-2xl text-blue-700 font-medium'>
                <img src={proimage} />
                <p className=''>Dr. Tristan</p>
                <p className='font-medium text-sm text-gray-400'>Orthopeadic</p>
                </div>
            </div>
            <div className='w-[90%] h-[70vh] lg:h-72 md:w-[100%] shadow-xl border border-stone-100 rounded-lg'>
            <div className='flex justify-center flex-col items-center text-center space-y-3 text-2xl text-blue-700 font-medium'>
                <img src={proimage} />
                <p className=''>Dr. Michael</p>
                <p className='font-medium text-sm text-gray-400'>ENT Specialist</p>
                </div>
            </div>
            <div className='w-[90%] h-[70vh] lg:h-72 md:w-[100%] shadow-xl border border-stone-100 rounded-lg'>
            <div className='flex justify-center flex-col items-center text-center space-y-3 text-2xl text-blue-700 font-medium'>
                <img src={proimage} />
                <p className=''>Dr. Sophia</p>
                <p className='font-medium text-sm text-gray-400'>Vascular specialist</p>
                </div>
            </div>
        </div>
        
   </section>
   </>
  )
}
 
export default Home