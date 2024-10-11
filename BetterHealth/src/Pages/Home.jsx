import React from 'react'
import Form from '../Components/Form'

const Home = () => {
  return (
    <>
    <form className=' ml-24 mt-9  w-[1100px] h-[650px] bg-slate-100 rounded-3xl flex flex-row justify-between'>
        <div className='flex flex-col px-28 '>
        
            <div className='mt-4'>

                 <img src="src/assets/Images/Animation - 1728548578534.gif" alt="" />

           </div>

           <div className='mt-[15px]'>
  
                 <h1 className='text-[40px] font-bold'>Holla,
                 </h1>
                 <h1 className='text-[40px] font-bold mt-[-15px]'>Welcome Back
                 </h1>
                 <h1 className='text-[12px] text-gray-400'>Hey, welcome back to your special place</h1>
                </div>


                
                <Form/>
        


        </div>

        <div >
            <img src="src/assets/Images/patient.jpeg" alt="" className='w-[450px] h-[650px] rounded-lg' />
        </div>
    </form>
    
    
    </>
  )
}

export default Home
