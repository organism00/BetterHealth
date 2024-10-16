import React, {useState} from 'react'
import Navbar from '../Components/Navbar'
import SideBar from '../Components/SideBar'

const NewDoctor = () => {
  return (
    <>
        <main className="lg:grid lg:grid-cols-[16rem_1fr] z-0">
            <SideBar/>
            <Navbar/>
            <main className="col-start-2 h-full w-full md:w-screen lg:w-full px-7 lg:mt-0 md:mt-0">
                <form className='flex flex-col my-24 '>
                    <div className='w-[100%] mb-10 mt-5 h-auto lg:w-full pt-6  pb-14 md:overflow-x-auto overflow-x-auto  shadow-lg border border-stone-200 rounded-2xl mx-auto px-5'>
                        <h1 className='text-2xl my-6'>Doctor's Information</h1>
                        <form className='lg:grid lg:grid-cols-2  lg:gap-x-12 lg:gap-y-6 flex flex-col gap-y-7 md:grid grid-cols-2 gap-x-2' > 
                            <input type="text" placeholder='First Name' className='border border-stone-500 p-2 rounded-md outline-violet-500' required/>
                            <input type="text" placeholder='Last Name' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                            <input type="text" placeholder='Address' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                            <input type="text" placeholder='Phone' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                            <input type="email" placeholder='Email' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                            <input type="text" placeholder='State Of Origin' className='border border-stone-500 p-2 rounded-md  outline-violet-500 '/>
                            <input type="text" placeholder='LGA' className='border border-stone-500 p-2 rounded-md  outline-violet-500 '/>
                            <input type="text" placeholder='Nationality' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                            <input type="text" placeholder='Marital Status' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                            <input type="text" placeholder='Phone No' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                            <input type="text" placeholder='Specialization' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                            <input type="number" placeholder='License Number' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                            <input type="text" placeholder='Years of experience' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                            <input type="text" placeholder='Department' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                            <input type="date" title='Joining Date'  className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                            <input type="date" title="Enter your age" placeholder='Age' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                            <input type='file' accept="image/*" title="Image" className='flex flex-col border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                            <button className='bg-violet-500 lg:w-1/4 p-3 hover:bg-violet-600 text-white rounded-md place-self-end text-xl col-span-2 '> Submit</button> 
                        </form>
                    </div> 
                </form>
            </main>
        </main>
    </>
  )
}
export default NewDoctor