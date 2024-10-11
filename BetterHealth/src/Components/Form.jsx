import React from 'react'
import { useState } from 'react'
import SignUp from './SignUp'
import Tickbox from '../Pages/Tickbox'
import SignIn from './SignIn'




const Form = () => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  return (
    <>
     <form className='mt-[25px] flex flex-col gap-3 text-[18px] lg:text-[25px] '>
       <input type="text"  className='w-[87vw] p-3  lg:w-[40vw] rounded-lg' placeholder='Username' /> 

       <input type="text" className='w-[87vw] p-3  lg:w-[40vw] rounded-lg' placeholder='Password'/> <br /> 
      
       <Tickbox/>
       <SignIn password={password} username={username}/>
       <SignUp/>
       

       
     </form>
    
    
    
    </>
   
  )
}

export default Form;