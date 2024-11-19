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
                  placeholder="Generic Name"
                  className="border border-stone-500 p-2 rounded-md outline-violet-500"
                  required
                  name=""
                  value=""
                  id="namegeneric"
                />
                <input
                  type="text"
                  placeholder="Drug Category"
                  className="border border-stone-500 p-2 rounded-md outline-violet-500"
                  required
                  name=""
                  value=""
                  id="drugcategory"
                />
                <input
                  type="text"
                  placeholder="Dosage Form"
                  className="border border-stone-500 p-2 rounded-md outline-violet-500"
                  required
                  name=""
                  value=""
                  id="dosageform"
                />
                <input
                  type="text"
                  placeholder="Syrup"
                  className="border border-stone-500 p-2 rounded-md outline-violet-500"
                  required
                  name=""
                  value=""
                  id="syrup"
                />
                <input
                  type="text"
                  placeholder="Manufacturer Information"
                  className="border border-stone-500 p-2 rounded-md outline-violet-500"
                  required
                  name=""
                  value=""
                  id="manufacurerinformation"
                />

                <input
                  type="text"
                  placeholder="Supplier"
                  className="border border-stone-500 p-2 rounded-md outline-violet-500"
                  required
                  name=""
                  value=""
                  id="Supplier"
                />

                <input
                  type="text"
                  placeholder="Supplier Information"
                  className="border border-stone-500 p-2 rounded-md outline-violet-500"
                  required
                  name=""
                  value=""
                  id="Supplier Information"
                />

                <input
                  type="text"
                  placeholder="Batch Number"
                  className="border border-stone-500 p-2 rounded-md outline-violet-500"
                  required
                  name=""
                  value=""
                  id="Batch Number"
                />

                <input
                  type="text"
                  placeholder="Manufacturing Date"
                  className="border border-stone-500 p-2 rounded-md outline-violet-500"
                  required
                  name=""
                  value=""
                  id="Manufacturing Date"
                />

                <input
                  type="text"
                  placeholder="Expiration Date"
                  className="border border-stone-500 p-2 rounded-md outline-violet-500"
                  required
                  name=""
                  value=""
                  id="Expiration Date"
                />

                <input
                  type="text"
                  placeholder="Stock Status"
                  className="border border-stone-500 p-2 rounded-md outline-violet-500"
                  required
                  name=""
                  value=""
                  id="Stock Status"
                />

                <input
                  type="text"
                  placeholder="Purchase Order Number"
                  className="border border-stone-500 p-2 rounded-md outline-violet-500"
                  required
                  name=""
                  value=""
                  id="Purchase Order Number"
                />

                <input
                  type="text"
                  placeholder="Date of Order"
                  className="border border-stone-500 p-2 rounded-md outline-violet-500"
                  required
                  name=""
                  value=""
                  id="Date of Order"
                />

                <input
                  type="text"
                  placeholder="Quantity Order"
                  className="border border-stone-500 p-2 rounded-md outline-violet-500"
                  required
                  name=""
                  value=""
                  id="Quantity Order"
                />

                <input
                  type="text"
                  placeholder="Cost Per Unit"
                  className="border border-stone-500 p-2 rounded-md outline-violet-500"
                  required
                  name=""
                  value=""
                  id="Cost Per Unit"
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
