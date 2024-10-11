import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';


const Tickbox = () => {
    const [checked, setChecked]= useState(false);
  return (
   <>
    <div className='flex flex-row justify-between'>
         <div className=' mt-[-35px]'>
             <input type="checkbox"
             id="tickbox" 
             className='form-checkbox h-3 w-3 bg-indigo-600'
             checked={checked}
             onChange={()=>setChecked (!checked)}/>
             <label htmlFor='tickbox' className='p-1 text-[11px] mt-[-10px]'>Remember me</label>
        </div>
        <div className='mt-[-30px] text-[11px] '>
            <Link to={`/`}>Forgot password?</Link>
        </div>
   </div>
   
   </>
  )
}
export default Tickbox