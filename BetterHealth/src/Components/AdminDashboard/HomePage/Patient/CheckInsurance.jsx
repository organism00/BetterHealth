import React from 'react'

function CheckInsurance() {
  return (
    <form action="submit" className='space-y-4 py-4'>
      <h1 className='text-xl font-medium'>Check Patients Insurance</h1>
      <input type="text" placeholder='Enter patient Identification Number' className='border p-3 rounded-lg w-[100%] ' />
      <input type="text" placeholder='Enter Insurance Number' className='border p-3 rounded-lg w-[100%] ' />              
      <button className='w-[100%] bg-primary text-white font-medium p-3 rounded-lg mt-4 hover:bg-primaryhover transition-all'>Check Insurance</button>
    </form>
  )
}

export default CheckInsurance