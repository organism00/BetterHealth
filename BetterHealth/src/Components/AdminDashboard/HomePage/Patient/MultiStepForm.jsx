import React from "react";
import SideBar from "../SideBar";
import Navbar from "../Navbar";
import { GoHome } from "react-icons/go";

const MultiStepForm = () => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-[16rem_1fr] z-0">
        <SideBar />

        <main className="col-start-2 h-full w-full md:w-[65%] lg:w-full mt-40 lg:mt-0 md:mt-0">
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

            <div className="my-7 w-full border-[1px] border-stone-100 h-[90%] lg:h-[109vh]  shadow-md rounded-2xl ">
              <div className="mb-4 rounded-t-2xl border-b-[1px] h-20 flex flex-col justify-center p-6">
                <h1 className="text-xl ">Client Registration</h1>
                <a href="#" className="font-thin text-sm">
                  You can find the official website
                </a>
              </div>
              <div className="bg-indigo-500 w-56 mx-4 h-10 rounded-lg pt-1">
                <h1 className="text-center text-xl text-stone-300">
                  Patient Information
                </h1>
              </div>

              <div className="w-full mx-auto mt-5 p-4">
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      className="border p-2 w-full"
                      type="text"
                      placeholder="First Name"
                      required
                    />
                    <input
                      className="border p-2 w-full"
                      type="text"
                      placeholder="Last Name"
                      required
                    />
                    <input
                      className="border p-2 w-full"
                      type="email"
                      placeholder="Email Address"
                      required
                    />
                    <input
                      className="border p-2 w-full"
                      type="text"
                      placeholder="Phone number"
                      required
                    />
                    <input
                      className="border p-2 w-full"
                      type="text"
                      placeholder="Address line 1"
                      required
                    />
                    <input
                      className="border p-2 w-full"
                      type="text"
                      placeholder="Address line 2"
                      required
                    />
                    <select name="" id="" className="border p-2 w-full">
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
                    <input
                      className="border p-2 w-full"
                      type="date"
                      placeholder="Date of Birth"
                      required
                    />
                    <select name="" id="" className="border p-2 w-full">
                      <option value="">Select blood group</option>
                      <option value="">A</option>
                      <option value="">B</option>
                      <option value="">AB</option>
                      <option value="">0</option>
                    </select>
                    <select name="" id="" className="border p-2 w-full h-10">
                      <option value="">Select genotype</option>
                      <option value="">AA</option>
                      <option value="">AS</option>
                      <option value="">SS</option>
                      <option value="">AC</option>
                      <option value="">SC</option>
                      <option value="">CC</option>
                    </select>
                    <input
                      type="text"
                      name="text"
                      id=""
                      className="border p-2 w-full"
                      placeholder="contact number"
                    />
                    <input
                      type="text"
                      name="text"
                      id=""
                      className="border p-2 w-full"
                      placeholder="Emergency number"
                    />
                    <input
                      type="text"
                      name="text"
                      id=""
                      className="border p-2 w-full"
                      placeholder="Has ulcer"
                    />
                    {/* <div className="flex justify-end mt-16">
                                <button type="submit" className="w-1/3 mt-10 justify-self-end col-span-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Save</button>
                              </div> */}
                  </div>
                  <div className="flex justify-end mt-5 lg:mt-12 ">
                    <button
                      type="submit"
                      className="w-1/3 justify-self-end col-span-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Save
                    </button>
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
