import React, {useState} from 'react'
import Navbar from '../Components/Navbar'
import SideBar from '../Components/SideBar'

const NewPatients = () => {
    // const [step, setStep] = useState(1); // Tracks the current step
    // const [isSubmitted, setIsSubmitted] = useState(false); // Tracks if the form is submitted

    // // Function to handle moving to the next step
    // const nextStep = () => {
    //     setStep((prevStep) => (prevStep < 3 ? prevStep + 1 : prevStep));
    // };

    // // Function to handle moving to the previous step
    // const prevStep = () => {
    //     setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
    // };
    // const renderStepInputs = () => {
    //     switch (step) {
    //       case 1:
    //         return <div>
                
    //         </div>;
    //       case 2:
    //         return <div>
    //             <form action="" className='lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-6 flex flex-col gap-y-7 md:grid grid-cols-2 gap-x-2'>
    //                 <input type="text" placeholder='Name' className='border border-stone-500 p-2 rounded-lg outline-violet-500' />
    //                 <input type="text" placeholder='Relationship to patient' className='border border-stone-500 p-2 rounded-lg  outline-violet-500 ' />
    //                 <input type="text" placeholder='Phone number' className='border border-stone-500 p-2 rounded-lg  outline-violet-500 ' />
    //                 <input type="text" placeholder='Email Address' className='border border-stone-500 p-2 rounded-lg  outline-violet-500 ' />
    //                 <input type="email" placeholder='Address' className='border border-stone-500 p-2 rounded-lg  outline-violet-500 ' />
                    
    //             </form>
    //         </div>;
    //       case 3:
    //         return <input className="border p-2 w-full" type="password" placeholder="Create a password" />;
    //       case 4:
    //         return <input className="border p-2 w-full" type="text" placeholder="Enter your phone number" />;
    //       default:
    //         return null;
    //     }
    //   };
    //   const renderProgress = () => {
    //     const progressSteps = ["Personal Information", "Contact", "Insurance"]; // Simple array of strings
      
    //     return (
    //       <div className="flex justify-between mb-4">
    //         {progressSteps.map((stepName, index) => (
    //           <div key={index} className={`h-10 w-1/4 rounded transition duration-300 text-white flex items-center justify-center ${step > index ? "bg-green-900" : "bg-gray-300"}`}>
    //             <p>{stepName}</p>
    //           </div>
    //         ))}
    //       </div>
    //     );
    //   };

  return (
    <>
        <main className="lg:grid lg:grid-cols-[16rem_1fr] z-0">
            <SideBar/>
            <Navbar/>
            <main className="col-start-2 h-full w-full md:w-screen lg:w-full px-7 lg:mt-0 md:mt-0">
            <form className='flex flex-col my-24 '>
                <div className='w-[100%] mb-10 mt-5 h-auto lg:w-full pt-6  pb-14 md:overflow-x-auto overflow-x-auto  shadow-lg border border-stone-200 rounded-2xl mx-auto px-5'>
                    {/* <div className='bg-violet-500 my-6 lg:w-1/4 p-2 rounded-xl place-self-end col-span-2 w-44 text-2xl'> */}
                        <h1 className='text-2xl my-6'>Personal Information</h1>
                    {/* </div> */}
                    <form className='lg:grid lg:grid-cols-2  lg:gap-x-12 lg:gap-y-6 flex flex-col gap-y-7 md:grid grid-cols-2 gap-x-2' > 
                        <input type="text" placeholder='First Name' className='border border-stone-500 p-2 rounded-md outline-violet-500' required/>
                        <input type="text" placeholder='Last Name' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="text" placeholder='Address' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="text" placeholder='Phone' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="email" placeholder='Email' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="text" placeholder='Emergency Contact' className='border border-stone-500 p-2 rounded-md  outline-violet-500 '/>
                        <input type="text" placeholder='Contact Number' className='border border-stone-500 p-2 rounded-md  outline-violet-500 '/>
                        <input type="text" placeholder='Contact Address' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="email" placeholder='Contact Email' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="text" placeholder='Contact Relationship' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="date" title="Enter your age" placeholder='Age' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <select className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' >
                            <option value="Select Gender"selected disabled>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <select className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' >
                            <option value="Select Gender"selected disabled>Genotype</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <select className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' >
                            <option value="Select Gender"selected disabled>Blood Group</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <select className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' >
                            <option value="Select Gender"selected disabled>Has Ulcer</option>
                            <option value="Male">Yes</option>
                            <option value="Female">No</option>
                        </select>
                        <input type='file' accept="image/*" title="Image" className='flex flex-col border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        {/* <button className='bg-violet-500 lg:w-1/4 p-2 rounded-xl place-self-end col-span-2 w-44'> Add patient</button> */}
                    </form>
                </div>
                <div className='w-[100%] mb-10 mt-5 h-auto pt-6  pb-14 md:overflow-x-auto overflow-x-auto md:w-full shadow-lg border border-stone-200 rounded-2xl mx-auto px-5'>
                    {/* <div className='bg-violet-500 my-6 lg:w-1/4 p-2 rounded-xl place-self-end col-span-2 w-44 text-2xl'> */}
                        <h1  className='text-2xl my-6'> Contact</h1>
                    {/* </div> */}
                    <form className='lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-6 flex flex-col gap-y-7 md:grid grid-cols-2 gap-x-2'>
                        <input type="text" placeholder='First Name' className='border border-stone-500 p-2 rounded-md outline-violet-500' />
                        <input type="text" placeholder='Last Name' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="text" placeholder='Address' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="text" placeholder='Phone' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="email" placeholder='Email' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="text" placeholder='Emergency Contact' className='border border-stone-500 p-2 rounded-md  outline-violet-500 '/>
                    </form>
                </div>
                <div className='w-[100%] mb-10 mt-5 h-auto  pt-6  pb-14 md:overflow-x-auto overflow-x-auto md:w-full shadow-lg border border-stone-200 rounded-2xl mx-auto px-5'>
                    {/* <div className='bg-violet-500 my-6 lg:w-1/4 p-2 rounded-xl place-self-end col-span-2 w-44 text-2xl'> */}
                        <h1  className='text-2xl my-6'> Insurance</h1>
                    {/* </div> */}
                    <form className='lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-6 flex flex-col gap-y-7 md:grid grid-cols-2 gap-x-2'>
                        <input type="text" placeholder='Insurance Provider Name' className='border border-stone-500 p-2 rounded-md outline-violet-500' />
                        <input type="text" placeholder='Insurance Policy Number' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="text" placeholder='Group Number' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' />
                        <input type="text" placeholder='Provide Contact Information' className='border border-stone-500 p-2 rounded-md  outline-violet-500 ' required/>
                    </form>
                </div>
                <button className='bg-violet-500 lg:w-1/4 p-4 text-white rounded-md self-end text-xl'> Add patient</button>
            </form>
            </main>
            
            
        </main>
       
    </>
  )
}
export default NewPatients