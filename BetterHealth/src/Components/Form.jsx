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
     <form className='mt-[20px] flex flex-col gap-3 text-[12px]'>
       <input type="text" style={{borderWidth: "none", borderColor:"white", width:"300px", height:"35px", padding:"6px", borderColor:"black", borderRadius:"5px"}}placeholder='Username' value={username} onChange={(e)=>{setUsername(e.target.value)
       }}/> 

       <input type="text" style={{borderWidth: 2, borderColor:"white",width:"300px", height:"35px",padding:"6px" }}placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)  
       }}/> <br /> 
      
       <Tickbox/>
       <SignIn password={password} username={username}/>
       <SignUp/>
       

       
     </form>
    
    
    
    </>
   
  )
}

export default Form;