import React, { useState } from "react";
import SideBar from "./SideBar";
import Navbar from "./Navbar";

import { GoHome } from "react-icons/go";
import Home from "./Home";

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

                <Home/>
            </main>
        </div>
    </>
  );
};

export default MultiStepForm;
