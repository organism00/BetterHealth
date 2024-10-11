import React from 'react'
import Form from '../Components/Form'

const Home = () => {
  return (
    <>
    <form className=' w-[100vw] h-[100vh] lg:w-[100vw] lg:h-[100vh] bg-slate-100 lg:rounded-3xl lg:flex lg:flex-row lg:justify-between'>
        <div className='lg:flex lg:flex-col lg:px-28 px-6 py-6'>
        
            <div className='ml-4 pt-5 lg:w-36 lg:h-36 w-14 h-14 rounded-[360px] bg-[#483d8b]'>

                <div className='lg:ml-2 ml-1'>
                 <img className="rounded-full lg:w-32 lg:h-32 w-12 h-12 mt-[-20px]" src="src/assets/Images/Animation - 1728548578534.gif" 
                 data-aos="fade-up"
                 alt="" 
                 />

                </div>


           </div>

                 <div className='mt-[19px] lg:mt-12'>
  
                 <h1 className='text-[35px] lg:text-[30px] font-bold'>Holla,
                 </h1>
                 <h1 className='text-[35px] lg:text-[30px] font-bold mt-[-10px]'>Welcome Back
                 </h1>
                 <h1 className='text-[14px] lg:text-[15px]  text-gray-400'>Hey, welcome back to your special place</h1>
                </div>


                
                <Form/>
        


        </div>

        <div className='hidden lg:block' >
            <img src="src/assets/Images/patient.jpeg" alt="" className='lg:w-[45vw] h-[100vh] rounded-lg' />
        </div>
    </form>
    
    
    </>
  )
}

export default Home
