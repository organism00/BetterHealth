import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';


const Tickbox = () => {
    const [checked, setChecked]= useState(false);
  return (
   <>
    <div className='flex justify-between mt-[-30px] lg:mt-[-45px]'>
         <div className=' '>
             <input type="checkbox"
             id="tickbox" 
             className='form-checkbox h-4 w-4 bg-indigo-600'
             checked={checked}
             onChange={()=>setChecked (!checked)}/>
             <label htmlFor='tickbox' className='lg:mt-[-15px] p-1 lg:text-[16px] text-[16px]'>Remember me</label>
        </div>
        <div className=' text-[16px] text-[#0073cf] lg:text-[16px]'>
            <Link to={`/`}>Forgot password?</Link>
        </div>
   </div>
   
   </>
  )
}
export default Tickbox