import React from 'react'
import {Link} from "react-router-dom"

const SignIn = ({username, password}) => {
  return (
    <>
    <div className='w-[28vw] lg:w-[10vw] p-2 bg-[#0073cf] mt-[20px] lg:mt-[-2px] text-center rounded-xl'>
   <Link className='text-white ' to={`/`}>Sign in</Link>

    </div>
  
    </>
  )
}

export default SignIn;