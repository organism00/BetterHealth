import React, { useState } from "react";
import Navbar from "../../navbar";
import SideBar from "../../sideBar";
import axios from "axios";
import { useToast } from '../../../Loaders/ToastContext';
import WaitingLoader from '../../../Loaders/WaitingLoader';
import "../../../../Style/loader.css";
import { useNavigate } from "react-router-dom";

const NewNurse = () => {
  // States
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [licenseNo, setLicenseNo] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [stateOfOrigin, setStateOfOrigin] = useState("");
  const [nationality, setNationality] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [certification, setCertification] = useState("");
  const [lga, setLga] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  // const navigate = useNavigate();
  const { notifySuccess, notifyError, startWaitingLoader, stopWaitingLoader } = useToast();

  const handleSubmit = async (e) => {
    startWaitingLoader()
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://hms-w4kw.onrender.com/api/Nurse/AddNurse",
        {
          firstname,
          lastname,
          licenseNo,
          specialization,
          phoneNo,
          email,
          address,
          stateOfOrigin,
          nationality,
          joinDate,
          departmentId,
          yearsOfExperience,
          certification,
          lga,
          maritalStatus,
        }
      );

      console.log(response.data);
      notifySuccess(response.data.responseMessage);
      stopWaitingLoader();

      setFirstname("");
      setLastname("");
      setLicenseNo("")
      setSpecialization("");
      setPhoneNo("");
      setEmail("");
      setAddress("");
      setStateOfOrigin("");
      setNationality("");
      setJoinDate("");
      setDepartmentId("");
      setYearsOfExperience("");
      setCertification("");
      setLga("");
      setMaritalStatus("");
    } catch (error) {
      console.error(error);
      notifyError(error.response.data.responseMessage);
      stopWaitingLoader();
    }
  };

  return (
    <>
      <main className="lg:grid lg:grid-cols-[16rem_1fr] z-0">
        <SideBar />
        <Navbar />
        <WaitingLoader/>

        <main className="col-start-2 h-full w-full md:w-screen lg:w-full px-7 lg:mt-0 md:mt-0">
          <form className="flex flex-col my-24" onSubmit={handleSubmit}>
            <div className="w-[100%] mb-10 mt-5 h-auto lg:w-full pt-6  pb-14 md:overflow-x-auto overflow-x-auto  shadow-lg border border-stone-200 rounded-2xl mx-auto px-5">
              <h1 className="text-2xl my-6">{"Nurse's Information"}</h1>
              <div className="lg:grid lg:grid-cols-2  lg:gap-x-12 lg:gap-y-6 flex flex-col gap-y-7 md:grid grid-cols-2 gap-x-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-stone-500 p-2 rounded-md outline-violet-500"
                  required          
                  name={firstname}
                  value={firstname}
                  id="firstname"
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
                  name={lastname}
                  value={lastname}      
                  id="lastname"
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="License Number"
                  className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
                  name={licenseNo}
                  value={licenseNo}
                  id="licenseNo"
                  onChange={(e) => {
                    setLicenseNo(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Specialization"
                  className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
                  name={specialization}
                  value={specialization}
                  id="specialization"
                  onChange={(e) => {
                    setSpecialization(e.target.value);
                  }}
                />

                <input
                  type="text"
                  placeholder="Phone No"
                  className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
                  name={phoneNo}
                  value={phoneNo}
                  id="phoneNo"
                  onChange={(e) => {
                    setPhoneNo(e.target.value);
                  }}
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
                  name={email}
                  value={email}
                  id="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />

                <input
                  type="text"
                  placeholder="Address"
                  className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
                  name={address}
                  value={address}
                  id="address"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />

                <input
                  type="text"
                  placeholder="State Of Origin"
                  className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
                  name={stateOfOrigin}
                  value={stateOfOrigin} 
                  id="stateOfOrigin"
                  onChange={(e) => {
                    setStateOfOrigin(e.target.value);
                  }}
                />

                <input
                  type="text"
                  placeholder="Nationality"
                  className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
                  name={nationality} 
                  value={nationality}     
                  id="nationality"
                  onChange={(e) => {
                    setNationality(e.target.value);
                  }}
                />

                <input
                  type="date"
                  title="Joining Date"
                  className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
                  name={joinDate}
                  value={joinDate}  
                  onChange={(e) => {
                    setJoinDate(e.target.value);
                  }}
                />

                <input
                  type="number"
                  placeholder="Department-Id"
                  className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
                  name={departmentId}
                  value={departmentId}
                  onChange={(e) => {
                    setDepartmentId(e.target.value);
                  }}
                />

                <input
                  type="number"
                  placeholder="Years of experience"
                  className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
                  name={yearsOfExperience}
                  value={yearsOfExperience}
                  id="yearsOfExperience"
                  onChange={(e) => {
                    setYearsOfExperience(e.target.value);
                  }}
                />

                <input
                  type="text"
                  placeholder="Certification"
                  className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
                  name={certification} 
                  value={certification}                
                  id="yearsOfExperience"
                  onChange={(e) => {
                    setCertification(e.target.value);
                  }}
                />

                <input
                  type="text"
                  placeholder="LGA"
                  className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
                  name={lga}
                  value={lga}
                  id="lga"
                  onChange={(e) => {
                    setLga(e.target.value);
                  }}
                />

                <input
                  type="text"
                  placeholder="Marital Status"
                  className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
                  name={maritalStatus}
                  value={maritalStatus}                
                  id="maritalStatus"
                  onChange={(e) => {
                    setMaritalStatus(e.target.value);
                  }}
                />
                <button
                  type="submit"
                  className="bg-violet-500  w-60 lg:w-1/4 p-3 hover:bg-violet-600 text-white rounded-md place-self-end text-xl col-span-2 "
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </main>
      </main>
    </>
  );
};
export default NewNurse;
