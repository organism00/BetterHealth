import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { DrugList } from "./DrugList";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";


const Inventory = () => {
  const [drugPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(1);
  const [drugs] = useState(DrugList);

  const indexOfLastDrug = currentPage * drugPerPage;
  const indexOfFirstDrug = indexOfLastDrug - drugPerPage;
  const currentDrugList = drugs.slice(indexOfFirstDrug, indexOfLastDrug);

  const totalPages = Math.ceil(drugs.length / drugPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="lg:flex">
      <Sidebar />
      <div>
        <Navbar />
        <section className="w-full lg:w-[78vw] h-auto lg:ml-[18vw] z-0 py-20 lg:pt-28 px-4">
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

          {/* Stats */}
          <div className="flex mt-8 md:flex-row flex-col items-center gap-y-6 md:gap-x-4">
            {/* Your stats components */}
          </div>

          {/* Inventory list header */}
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-between mt-8">
            <p>Inventory List ({drugs.length})</p>
            <div className="flex items-center gap-x-2">
              <input
                type="text"
                className=" w-[78vw] md:w-[350px] text-[14px] border py-2 px-4 rounded"
                placeholder="Search"
              />
              <button className="bg-[#5156be] text-white px-4 h-10 rounded">
                <IoIosSearch className="text-xl" />
              </button>
            </div>
          </div>

          <div className="cursor-pointer my-6 flex justify-end">
            <div className="flex gap-x-4 items-center">
              <form action="">
                <select name="" id="" className="border py-1 px-2 text-[14px]">
                  <option value="filter">Filter</option>
                  <option value="name">Name</option>
                  <option value="role">Role</option>
                </select>
              </form>
              <div className="text-[20px]">
                <IoFilter />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="mt-10 overflow-x-auto">
            <table className="table-auto w-full text-sm lg:text-base">
              <thead>
                <tr>
                  <th className="px-2 py-1 lg:px-8 lg:py-2 text-blue-600 font-[400] bg-gray-200 border text-center">
                    Drug Name
                  </th>
                  <th className="px-2 py-1 lg:px-8 lg:py-2 text-blue-600 font-[400] bg-gray-200 border text-center">
                    Quantity
                  </th>
                  <th className="px-2 py-1 lg:px-8 lg:py-2 text-blue-600 font-[400] bg-gray-200 border text-center">
                    Category
                  </th>
                  <th className="px-2 py-1 lg:px-8 lg:py-2 text-blue-600 font-[400] bg-gray-200 border text-center">
                    Date Added
                  </th>
                  <th className="px-2 py-1 lg:px-8 lg:py-2 text-blue-600 font-[400] bg-gray-200 border text-center">
                    Date Withdrawn
                  </th>
                  <th className="px-2 py-1 lg:px-8 lg:py-2 text-blue-600 font-[400] bg-gray-200 border text-center">
                    Expiry Date
                  </th>
                  <th className="px-2 py-1 lg:px-8 lg:py-2 text-blue-600 font-[400] bg-gray-200 border text-center">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentDrugList.map((item, index) => (
                  <tr key={index} className="text-xs sm:text-sm lg:text-base">
                    <td className="px-2 text-gray-700 py-4 border text-center">
                      {item.drugName}
                    </td>
                    <td className="px-2 text-gray-700 py-4 border text-center">
                      {item.quantity}
                    </td>
                    <td className="px-2 text-gray-700 py-4 border text-center">
                      {item.category}
                    </td>
                    <td className="px-2 text-gray-700 py-4 border text-center">
                      {item.lastAdded}
                    </td>
                    <td className="px-2 text-gray-700 py-4 border text-center">
                      {item.lastWithdrawn}
                    </td>
                    <td className="px-2 text-gray-700 py-4 border text-center">
                      {item.expiryDate}
                    </td>
                    <td className="px-2 text-gray-700 py-4 border text-center">
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination controls */}
          <div className="bg-[#e4e6ef] text-text px-4 py-4 flex justify-between items-center rounded-b-lg text-[12px] w-full">
            <p>
              Showing {indexOfFirstDrug + 1} to{" "}
              {Math.min(indexOfLastDrug, drugs.length)} of {drugs.length}{" "}
              entries
            </p>

            <div className="flex gap-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`${
                  currentPage === 1 ? "opacity-40" : "opacity-100"
                }`}
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`${
                  currentPage === totalPages ? "opacity-40" : "opacity-100"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Inventory;
