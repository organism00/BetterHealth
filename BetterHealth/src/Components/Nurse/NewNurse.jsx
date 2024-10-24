import React, {useState} from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import axios from 'axios';
 
import '../../Style/loader.css'
 
const NewNurse = () => {
    const [loader, setLoader] = useState(false);
    const [firstname, setFirstname] = useState("");
    const [lastname, setlastname] = useState("");
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
 
    const handleSubmit = async (e) => {
        setLoader(true);
        e.preventDefault();
 
        try {
            const response = await axios.post("https://hms-w4kw.onrender.com/api/Nurse/AddNurse", {
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
                maritalStatus
            })
 
            console.log(response.data);
            setLoader(false);
        } catch (error){
            console.error(error);
            setLoader(false);
        }
    }
 
  return (
    <>
        <main className="lg:grid lg:grid-cols-[16rem_1fr] z-0">
            {/* Loader */}
            {loader && (
                <div className='loaderwrapper'>
                <div className="loader"></div>
                </div>
            )}
            <SideBar/>
            <Navbar/>
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
                                id="lastname"
                                onChange={(e) => {
                                    setlastname(e.target.value);
                                }}
                            />
                            <input
                                type="text"
                                placeholder="License Number"
                                className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
                                name={licenseNo}
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
                                onChange={(e) => {
                                    setJoinDate(e.target.value);
                                }}
                            />
           
                            <input
                                type="number"
                                placeholder="Department-Id"
                                className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
                                name={departmentId}
                                onChange={(e) => {
                                    setDepartmentId(e.target.value);
                                }}
                            />
           
                            <input
                                type="number"
                                placeholder="Years of experience"
                                className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
                                name={yearsOfExperience}
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
  )
}
export default NewNurse
