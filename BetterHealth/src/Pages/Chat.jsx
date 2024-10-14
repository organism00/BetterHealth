import React from 'react'
import { FaCamera } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const Chat = () => {
  return (
    <>
        <div className=' w-full h-[100px] flex justify-end items-end bg-fixed z-30 ' >
     <div className='bg-white shadow-md w-[50px] h-[80px] flex flex-col space-y-4 justify-center  items-center  '>
      
      <div className='mt-4' ><FaCamera  className='w-6 h-6 text-green-900 '/></div>
      <div><IoChatboxEllipsesOutline className='w-6 h-6 text-pink-700 ' /></div>
      </div>
      </div>  
    </>
  )
}

export default Chat