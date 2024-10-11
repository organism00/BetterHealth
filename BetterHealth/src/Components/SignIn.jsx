import React from 'react'
import {Link} from "react-router-dom"

const SignIn = ({username, password}) => {
  return (
    <>
    <div className='w-[28vw] lg:w-[10vw] p-2 bg-blue-600 mt-[20px] lg:mt-[-2px] text-center rounded-xl'>
   <Link className='text-white ' to={`/`}>Sign in</Link>

    </div>
   


    {/* <button className=' mt-5 w-28 h-10 bg-violet-600 text-gray-400 rounded-lg text-[13px] font-semibold'onClick={()=>{alert(``)
    }}>Sign in</button> */}
    </>
  )
}

export default SignIn;