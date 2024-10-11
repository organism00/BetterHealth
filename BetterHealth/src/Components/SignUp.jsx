import React from "react";
import {Link} from "react-router-dom"



const SignUp = ({username, password}) => {
  return (
    <>
    <div className="flex gap-1">
      <h1>Don't have an account? </h1>
        
    <Link className="text-[#0073cf]" to={`/`}>Sign Up</Link>
    </div>

  
    </> 
  )
}
export default SignUp;