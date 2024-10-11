import React, { useState } from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { GoHome } from "react-icons/go";

const MultiStepForm = () => {
  const [step, setStep] = useState(1); // Tracks the current step
  const [isSubmitted, setIsSubmitted] = useState(false); // Tracks if the form is submitted

  // Function to handle moving to the next step
  const nextStep = () => {
    setStep((prevStep) => (prevStep < 4 ? prevStep + 1 : prevStep));
  };

  // Function to handle moving to the previous step
  const prevStep = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Show the popup when the form is submitted
  };

  // Function to close the popup when the "OK" button is clicked
  const closePopup = () => {
    setIsSubmitted(false); // Hide the popup
  };

  // form steps 
  const renderStepInputs = () => {
    switch (step) {
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* <label htmlFor="">firstname</label> */}
            <input className="border p-2 w-full" type="text" placeholder="First Name" required />
            <input className="border p-2 w-full" type="text" placeholder="Last Name" required />
            <input className="border p-2 w-full" type="email" placeholder="Email Address" required />
            <input className="border p-2 w-full" type="text" placeholder="Phone number" required />
            <input className="border p-2 w-full" type="text" placeholder="Address line 1" required />
            <input className="border p-2 w-full" type="text" placeholder="Address line 2" required />
            <select name="" id="">
                <option value="">Select gender</option>
                <option value="">Male</option>
                <option value="">Female</option>
            </select>
            <select className="border p-2 w-full" required>
              <option value="">Select Country</option>
              <option value="usa">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="nigeria">Nigeria</option>
            </select>
            <input className="border p-2 w-full" type="date" placeholder="Date of Birth" required />
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* <input className="border p-2 w-full" type="password" placeholder="Create a Password" required />
            <input className="border p-2 w-full" type="password" placeholder="Confirm Password" required />
            <select className="border p-2 w-full" required>
              <option value="">Select Country</option>
              <option value="usa">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="nigeria">Nigeria</option>
            </select> */}
            <input className="border p-2 w-full" type="text" placeholder="City" required />
          </div>
        );
      case 3:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* <input className="border p-2 w-full" type="text" placeholder="Phone Number" required />
            <textarea className="border p-2 w-full" placeholder="Address" required /> */}
            <div className="w-full">
              <p className="mb-2">Gender:</p>
              <label className="mr-4">
                <input className="mr-2" type="radio" name="gender" value="male" /> Male
              </label>
              <label>
                <input className="mr-2" type="radio" name="gender" value="female" /> Female
              </label>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="border p-2 w-full" type="text" placeholder="Occupation" required />
            <input className="border p-2 w-full" type="number" placeholder="Years of Experience" required />
            <textarea className="border p-2 w-full" placeholder="Additional Comments" required />
          </div>
        );
      default:
        return null;
    }
  };

  // progress on steps
  const renderProgress = () => {
    const progressSteps = ["1 Patient", "2 Account", "3 Billing", "4 Confirmation"];

    return (
      <div className="lg:w-[70%] lg:flex sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 items-center gap-y-2 flex h-48 lg:h-auto justify-between flex-col lg:flex-row mb-4">
        {progressSteps.map((progressStep, index) => (
          <div key={index} className={`lg:w-48 h-10 p-2 text-center w-[100%] rounded-md transition duration-300 text-stone-500 ${ step > index ? "bg-indigo-700 text-white" : "bg-gray-300" }`}> {progressStep}</div>
        ))}
      </div>
    );
  };

  return (
    <>
        <div className="lg:grid lg:grid-cols-[16rem_1fr] z-0">
            <SideBar />

            <main className="col-start-2 h-full w-full md:w-[70%] lg:w-full mt-40 lg:mt-0 md:mt-0">
              <Navbar />

                <div className="mt-24 w-full h-full lg:w-full lg:ml-0 md:ml-72 lg:pl-12 lg:pr-5 px-5">
                  <div className="flex gap-5">
                    <h1 className="text-2xl">Admin</h1>
                    <div className="flex gap-2 items-center">
                      <GoHome />
                      <p className="font-thin"> - Forms</p>
                      <p> - Add patient</p>
                    </div>
                  </div>

                    <div className="mt-7 w-full border-[1px] border-stone-100 h-[90%] md:h-[90%] lg:h-[90vh] shadow-md rounded-2xl ">
                      <div className="mb-4 rounded-t-2xl border-b-[1px] h-20 flex flex-col justify-center p-6">
                        <h1 className="text-xl ">Client Registration</h1>
                        <a href="#" className="font-thin text-sm">You can find the official website</a>
                      </div>  

                        <div className="w-full mx-auto mt-12 p-4">
                            {/* message */}
                            {isSubmitted && (
                              <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                  <h2 className="text-2xl font-bold mb-4">Form Submitted!</h2>
                                  <p>Thank you for completing the registration.</p>
                                  <button onClick={closePopup} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" > OK</button>
                                </div>
                              </div>
                            )}

                            {/* Progress Bar */}
                            {renderProgress()}

                            {/* Form Inputs */}
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                {renderStepInputs()}

                                <div className="flex justify-between mt-6">
                                    <button type="button" onClick={prevStep} className={`w-1/3 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded ${step === 1 ? "opacity-50 cursor-not-allowed" : "" }`} disabled={step === 1}> Previous</button>

                                    {step < 4 ? (
                                    <button type="button" onClick={nextStep} className="w-1/3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"> Next</button>) : (
                                    <button type="submit" className="w-1/3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>

                    
                    {/* second form */}
                    <div className="mt-7 w-full border-[1px] border-stone-100 h-[90%]  md:h-[90%] lg:h-[90vh] shadow-md rounded-2xl ">
                        <div className="mb-4 rounded-t-2xl border-b-[1px] h-20 flex flex-col justify-center p-6">
                            <h1 className="text-xl ">Client Registration</h1>
                            <a href="#" className="font-thin text-sm">You can find the official website</a>
                        </div>

                        <div className="w-full mx-auto mt-12 p-4">
                            {/* message */}
                            {isSubmitted && (
                                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                        <h2 className="text-2xl font-bold mb-4">Form Submitted!</h2>
                                        <p>Thank you for completing the registration.</p>
                                        <button onClick={closePopup} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" > OK</button>
                                    </div>
                                </div>
                            )}

                            {/* Progress Bar */}
                            {renderProgress()}

                            {/* Form Inputs */}
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                {renderStepInputs()}

                                <div className="flex justify-between mt-6">
                                    
                                    <button type="button" onClick={prevStep} className={`w-1/3 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded ${step === 1 ? "opacity-50 cursor-not-allowed" : "" }`} disabled={step === 1}> Previous</button>

                                    {step < 4 ? (
                                    <button type="button" onClick={nextStep} className="w-1/3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"> Next</button>) : (
                                    <button type="submit" className="w-1/3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>


                    {/* third form */}
                    <div className="mt-7 w-full border-[1px] border-stone-100 h-[90%] md:h-[90%] lg:h-[90vh] shadow-md rounded-2xl ">
                        <div className="mb-4 rounded-t-2xl border-b-[1px] h-20 flex flex-col justify-center p-6">
                            <h1 className="text-xl ">Client Registration</h1>
                            <a href="#" className="font-thin text-sm">You can find the official website</a>
                        </div>

                        <div className="w-full mx-auto mt-12 p-4">
                            {/* message */}
                            {isSubmitted && (
                                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                        <h2 className="text-2xl font-bold mb-4">Form Submitted!</h2>
                                        <p>Thank you for completing the registration.</p>
                                        <button onClick={closePopup} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" > OK</button>
                                    </div>
                                </div>
                            )}

                            {/* Progress Bar */}
                            {renderProgress()}

                            {/* Form Inputs */}
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                {renderStepInputs()}

                                <div className="flex justify-between mt-6">
                                    
                                    <button type="button" onClick={prevStep} className={`w-1/3 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded ${step === 1 ? "opacity-50 cursor-not-allowed" : "" }`} disabled={step === 1}> Previous</button>

                                    {step < 4 ? (
                                    <button type="button" onClick={nextStep} className="w-1/3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"> Next</button>) : (
                                    <button type="submit" className="w-1/3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </>
  );
};

export default MultiStepForm;
