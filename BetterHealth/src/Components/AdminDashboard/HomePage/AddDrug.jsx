import React from "react";
import Navbar from "../navbar";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";

const AddDrug = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <section className="m-4 space-y-8">
            {/* Page header */}
            <div className="flex gap-x-5 lg:px-0 md:px-8 md:ml-64 lg:ml-0">
              <h1 className="text-2xl">Inventory</h1>
              <div className="flex gap-2 items-center">
                <Link to="/admin/inventory">
                  <GoHome />
                </Link>
                <p className="font-thin"> - Resource & Inventory</p>
              </div>
            </div>
            <form action="submit" className="mt-20 md:mt-28 space-y-2">
              <h1 className="text-2xl font-medium my-10">Add New Drug</h1>
              <div className="lg:grid lg:grid-cols-2  lg:gap-x-12 lg:gap-y-6 flex flex-col gap-y-7 md:grid grid-cols-2 gap-x-2">
                <input
                  type="text"
                  placeholder="Drug Name"
                  className="border border-stone-500 p-2 rounded-md outline-violet-500"
                  required
                  name=""
                  value=""
                  id="drugname"
                />

                <input
                  type="text"
                  placeholder="Quantity"
                  className="border border-stone-500 p-2 rounded-md outline-violet-500"
                  required
                  name=""
                  value=""
                  id="quantity"
                />

                <input
                  type="text"
                  placeholder="Category"
                  className="border border-stone-500 p-2 rounded-md outline-violet-500"
                  required
                  name=""
                  value=""
                  id="category"
                />

                <input
                  type="text"
                  placeholder="Date Added"
                  className="border border-stone-500 p-2 rounded-md outline-violet-500"
                  required
                  name=""
                  value=""
                  id="dateAdded"
                />

                <input
                  type="text"
                  placeholder="Date Withdrawn"
                  className="border border-stone-500 p-2 rounded-md outline-violet-500"
                  required
                  name=""
                  value=""
                  id="Date Withdrawn"
                />

                <input
                  type="text"
                  placeholder="Expiry Date"
                  className="border border-stone-500 p-2 rounded-md outline-violet-500"
                  required
                  name=""
                  value=""
                  id="Expiry Date"
                />

                <button
                  type="submit"
                  className="bg-violet-500  w-60 lg:w-1/4 p-3 hover:bg-violet-600 text-white rounded-md place-self-end text-xl col-span-2 "
                >
                  Submit
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default AddDrug;
