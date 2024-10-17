import React from "react";
import SideBar from "../Components/SideBar";
import Navbar from "../Components/Navbar";
import { GoHome } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { patientData } from "../Components/PatientData";
import "../Style/customScrollbar.css";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaGreaterThan } from "react-icons/fa6";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FaCalendarAlt } from "react-icons/fa";
import { doctorsList } from "../Components/DoctorsData";
import coverImage from '../assets/Images/istockphoto-1 (17).jpg'
import { IoMdTime } from "react-icons/io";
import DoctorAbility from "../Components/DoctorAbility";
import { FaStethoscope } from "react-icons/fa";
import AssignedPatient from "../Components/AssignedPatinet";
import RecentQuestions from "../Components/adminDashboard/RecentQuestions";
import ReviewList from "../Components/ReviewList";



// import { FaPhone } from "react-icons/fa6";
// <FaPhone />;







const DoctorDetails = () => {
  return (
    <div className="flex flex-col gap-2 lg:flex-row py-4  md:px-0">
      <SideBar />

      <Navbar />

      <div className="mt-16 md:px-6 lg:px-0 h-[200vh] md:w-[80vw]">
        <div className="flex my-10 md:my-8 justify-between">
          <div className="flex gap-x-5 px-4 lg:px-0 md:px-8 md:ml-64 lg:ml-0">
            <h1 className="text-2xl">Doctor Details</h1>
            <div className="flex gap-2 items-center">
              <GoHome />
              <p className="font-thin"> - Doctor Details</p>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col pb-20 md:space-x-6 space-y-6 md:space-y-0">
          {/*Doctor Details left Section Start */}
          <div className="flex flex-col space-y-6">
            {/*Today's Patient */}
            <div className="w-[90vw] mx-auto lg:w-[30vw] h-[100%] py-4 border shadow-sm shadow-gray-300 font-[inter]">
              <div className="flex pb-4 items-center px-6 justify-between">
                <p className="text-xl font-[inter]">Your Patients Today</p>

                <NavLink className="flex items-center font-[500] text-sm text-blue-600">
                  All Patients
                  <FaGreaterThan className="ml-2 mt-1" />
                </NavLink>
              </div>
              <hr />

              <div className="scrollable-div h-[320px] md:h-[260px] mt-4 overflow-auto font-[inter]">
                <div className="space-y-4">
                  {patientData.map((patient,index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-between items-center w-[100%] h-[100%] px-6"
                      >
                        <p className="text-[18px] font-[500] font-[inter]">
                          {patient.time}
                        </p>

                        <div className="w-[70%] px-2 bg-gray-100 flex items-center justify-between">
                          <div className="w-[90%] flex items-center space-x-4">
                            <img
                              className="w-8 h-8 rounded-full cursor-pointer"
                              src={patient.img}
                              alt={`{patient.name}'s thumbnail`}
                            />
                            <div className=" py-2  rounded-md flex flex-col justify-between ">
                              <span className="text-lg font-[500]">
                                {patient.name}
                              </span>
                              <p>Diagnosis: {patient.disease}</p>
                            </div>
                          </div>

                          <HiOutlineDotsVertical className="w-[20px] h-[20px] cursor-pointer" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Appointments */}

            <div className="w-[90vw] mx-auto lg:w-[30vw] h-[100%] py-6 border shadow-sm shadow-gray-300 font-[inter]">
              <div className="px-4 pb-4 ">
                <p className="text-xl font-[inter]">Appointments</p>
              </div>
              <hr />

              <div className="flex justify-center my-8">
                <div className="w-[30px] h-[80px] shadow-sm hover:text-white hover:bg-[rgba(0,0,139,0.92)]">
                  <GrFormPrevious className="w-8 h-8 mx-auto my-6" />
                </div>
                <div className="flex font-[inter]">
                  <div className="w-[40px] md:w-[50px] h-[80px] bg-gray-200 shadow-sm hover:text-white hover:bg-[rgba(0,0,139,0.92)] py-4 text-sm text-gray-500 text-center">
                    Sun
                    <p>13th</p>
                  </div>
                  <div className="w-[40px] md:w-[50px] h-[80px] shadow-sm hover:text-white hover:bg-[rgba(0,0,139,0.92)] py-4 text-sm text-gray-500 text-center">
                    Mon
                    <p>14th</p>
                  </div>
                  <div className="w-[100px] md:w-[150px] p-2 h-[80px] text-white bg-[#0f5032f1] hover:bg-[rgba(0,0,139,0.92)]">
                    <FaCalendarAlt className="float-end " />
                    <p className="text-sm text-center mt-4">Tuesday</p>
                    <p className="text-sm text-center">October 15th 2024</p>
                  </div>
                  <div className="w-[40px] md:w-[50px] h-[80px] shadow-sm hover:text-white hover:bg-[rgba(0,0,139,0.92)] py-4 text-sm text-gray-500 text-center">
                    Wed
                    <p>16th</p>
                  </div>
                  <div className="w-[40px] md:w-[50px] h-[80px] shadow-sm hover:text-white hover:bg-[rgba(0,0,139,0.92)] py-4 text-sm text-gray-500 text-center">
                    Thu
                    <p>17th</p>
                  </div>
                </div>

                <div className="w-[30px] h-[80px] shadow-sm hover:text-white hover:bg-[rgba(0,0,139,0.92)]">
                  <MdNavigateNext className="w-8 h-8 mx-auto my-6 " />
                </div>
              </div>

              <div className="scrollable-div h-[280px] mt-4 overflow-auto font-[inter]">
                <div className="space-y-4">
                  {doctorsList.map((doctor) => {
                    return (
                      <div
                        key={doctor.time}
                        className="w-[100%] h-[100%] py-2 px-6 border shadow-sm"
                      >
                        <div className="w-[100%] px-2 flex items-center justify-between">
                          <div className="w-[90%] flex items-center">
                            <img
                              className="w-30 h-20 rounded-full cursor-pointer"
                              src={doctor.thumb}
                              alt={`{doctor.name}'s thumbnail`}
                            />
                            <div className=" py-2  rounded-md flex flex-col justify-between ">
                              <p className="text-lg text-[#2d2d2d] font-[600] leading-6">
                                {doctor.name}
                              </p>

                              <p>{doctor.title}</p>
                            </div>
                          </div>

                          <div className="flex items-center">
                            <HiOutlineDotsVertical className="w-[20px] h-[20px] cursor-pointer" />
                          </div>
                        </div>

                        <div className="flex mt-2 ml-10 items-center space-x-6">
                          <p className="text-[18px] font-[500] font-[inter]">
                            {doctor.time}
                          </p>

                          <p>$30</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Doctor Ability */}
            <div className="w-[90vw] mx-auto lg:w-[30vw] h-[100%] py-6 border shadow-sm shadow-gray-300 font-[inter]">
              <div className="px-4 pb-4 ">
                <p className="text-xl font-[inter]">Doctor Ability</p>
              </div>
              <hr />

              <div>
                <DoctorAbility />
              </div>
            </div>

            {/* Recovery Rate */}
            <div className="w-[90vw] mx-auto lg:w-[30vw] h-[100%] py-6 border shadow-sm shadow-gray-300 font-[inter]">
              <div className="px-4 pb-4 ">
                <p className="text-xl font-[inter]">Recovery rate</p>
              </div>
              <hr />

              <div className="flex flex-col space-y-4 p-4">
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <p className="text-xl">80 %</p>
                    <p className="text-lg">Cold</p>
                  </div>

                  <p className="w-[100%] h-2 bg-[#E9ECEF] rounded-r-full">
                    <p className="w-[80%] h-2 bg-[#5156BE] rounded-l-full"></p>
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <p className="text-xl">24 %</p>
                    <p className="text-lg">Fracture</p>
                  </div>

                  <p className="w-[100%] h-2 bg-[#E9ECEF] rounded-r-full">
                    <p className="w-[24%] h-2 bg-[#05825F] rounded-l-full"></p>
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <p className="text-xl">91 %</p>
                    <p className="text-lg">Ache</p>
                  </div>

                  <p className="w-[100%] h-2 bg-[#E9ECEF] rounded-r-full">
                    <p className="w-[91%] h-2 bg-[#3596F7] rounded-l-full"></p>
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <p className="text-xl">50 %</p>
                    <p className="text-lg">Hematoma</p>
                  </div>

                  <p className="w-[100%] h-2 bg-[#E9ECEF] rounded-r-full">
                    <p className="w-[50%] h-2 bg-[#EE3158] rounded-l-full"></p>
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <p className="text-xl">72 %</p>
                    <p className="text-lg">Caries</p>
                  </div>

                  <p className="w-[100%] h-2 bg-[#E9ECEF] rounded-r-full">
                    <p className="w-[72%] h-2 bg-[#FFA800] rounded-l-full"></p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          

          {/* Doctor Details Right section starts Here */}
          <div className="flex flex-col space-y-6">
            {/* Profile Card start*/}
            <div className="w-[90vw] mx-auto lg:w-[50vw] pb-8  border shadow-sm shadow-gray-300 font-[inter]">
              <div className="w-[100%] h-[20vh] rounded-b-[20px] bg-gray-200 z-0 bg-cover bg-center"></div>
              <div className="flex justify-between px-4 md:px-8">
                <div className=" -mt-16 z-30">
                  <img
                    className="w-32 h-32 md:w-44 md:h-48"
                    src={coverImage}
                    alt="coverImage"
                  />

                  <div>
                    <p className="text-xl">Dr. Johen Doe</p>
                    <div className="flex items-center space-x-1 text-gray-700">
                      <IoMdTime className="w-8 h-8 md:w-4 md:h-4" />
                      <p>Join on 15 May 2019, 10:00 AM</p>
                    </div>
                  </div>
                </div>
                <div className="w-[90%] md:w-40 h-12 px-2 -mt-[145px] flex items-center space-x-2 justify-center text-lg rounded-[10px] text-white bg-green-600">
                  <FaStethoscope />
                  <p>ENT Specialist</p>
                </div>
              </div>

              <div className="mt-10 md:mt-16 px-8 space-y-5">
                <p className="text-2xl text-gray-800 ">Biography</p>
                <div className="space-y-2 text-[16px] leading-6 text-gray-500">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugit repellat cum vel ipsum quis mollitia eaque ullam
                    perferendis architecto minima dicta assumenda, sint quam,
                    quia tenetur blanditiis in amet atque suscipit, est minus
                    unde. Pariatur officiis assumenda, iusto placeat dolor porro
                    corrupti rerum fugit in culpa reiciendis nemo? Vitae, iure.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi tempora molestiae nulla. Est hic error ratione officiis
                    fugit nihil reprehenderit at facere doloribus earum quas
                    nemo, impedit nesciunt pariatur officia, qui dignissimos
                    totam iusto, ad eius. Blanditiis eum commodi molestiae
                    tempore animi vero doloribus cumque, officiis, ea obcaecati
                    inventore ipsam!
                  </p>
                </div>
              </div>
            </div>

            {/* Assigned Patient */}

            <div className="w-[90vw] mx-auto lg:w-[50vw] py-4 border shadow-sm shadow-gray-300 font-[inter]">
              <div className="px-4 pb-4 ">
                <p className="text-xl font-[inter]">Assigned Patient</p>
              </div>
              <hr />

              <div>
                <AssignedPatient />
              </div>
            </div>

            {/* Recent Review */}
            <div className="w-[90vw] mx-auto lg:w-[50vw] py-4 border shadow-sm shadow-gray-300 font-[inter]">
              <ReviewList />
            </div>

            {/* Recent Questions and Laboratory Tests */}
            <div className="w-[90vw] flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 mx-auto lg:w-[50vw] py-4 border shadow-sm shadow-gray-300 font-[inter]">
              <RecentQuestions />
              <RecentQuestions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;