import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Sidebar from "../sidebar";
// Images
import lab from "../../../assets/Images/laboratory.png";
import patient from "../../../adminDashboardAssets/patients.svg";
import staff from "../../../adminDashboardAssets/Staffs.svg";
import surgery from "../../../adminDashboardAssets/sugery.svg";
import Deathrate from "../../../assets/Images/death-rate.png";

// Components
// import PatientStat from "../../HospitalDashboard/PatientStat";
import RecoveryStat from "../../HospitalDashboard/RecoveryStat";
import TotalPatientsStat from "../../HospitalDashboard/TotalPatientsStat";
import Reports from "../../HospitalDashboard/Reports";
import DoctorList from "../../HospitalDashboard/DoctorList";
import AdmittedPatients from "../../HospitalDashboard/AdmittedPatients";
import RecentQuestions from "../../HospitalDashboard/RecentQuestions";
import NurseList from "../../HospitalDashboard/NurseList";

// Icons
import { FaChartBar } from "react-icons/fa";


const SuperAdminDashboard = () => {
  const [allPatientData, setAllPatientData] = useState([]);
  const [allStaffData, setAllStaffData] = useState([]);
  // console.log(allPatientData.length);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const res = await axios.get("https://hms-w4kw.onrender.com/api/Patient/GetPatients");
        // console.log(res.data.$values);
        setAllPatientData(res.data.$values);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPatient();
  }, []);

  useEffect(() => {
    const fetchAllStaffData = async () => {
      try {
        const [doctorRes, nurseRes, pharmacistRes, staffRes] =
          await Promise.all([
            axios.get("https://hms-w4kw.onrender.com/api/Doctor/GetDoctors"),
            axios.get("https://hms-w4kw.onrender.com/api/Nurse/GetAllNurses"),
            axios.get(
              "https://hms-w4kw.onrender.com/api/Pharmacist/GetPharmacists"
            ),
            axios.get("https://hms-w4kw.onrender.com/api/Staff/GetAllStaffs"),
          ]);

        setAllStaffData([
          ...doctorRes.data.$values,
          ...nurseRes.data.data.$values,
          ...pharmacistRes.data.$values,
          ...staffRes.data.$values,
        ]);
      } catch (error) {
        console.error("Error fetching data:", error.data);
      }
    };

    fetchAllStaffData();
  }, []);

  return (
    <>
      <div className="lg:flex">
        <Sidebar />
        <div className="w-full ">
          <Navbar />
          <section className="grid bg-white my-4 ">
            <div className="flex flex-col lg:flex-row lg:gap-x-2 p-1 ">
              {/* Left Section On Main Page Start */}
              <div className="flex flex-col gap-4">
                {/* Summry of numbers 1 */}
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex justify-center p-6 rounded-lg bg-white shadow gap-4 border">
                    <img
                      src={patient}
                      alt="patient-image"
                      className="max-w-[100px] h-auto w-auto md:w-[70px] "
                    />
                    <div>
                      <p className="text-[14px] font-medium ">Total Patience</p>
                      <h1 className="text-[24px] ">{allPatientData.length}</h1>
                    </div>
                  </div>

                  <div className="flex justify-center p-6 rounded-lg bg-white shadow gap-4 border">
                    <img
                      src={staff}
                      alt="staff-image"
                      className="max-w-[110px] h-auto w-auto md:w-[70px] "
                    />
                    <div>
                      <p className="text-[14px] font-medium ">Total Staffs</p>
                      <h1 className="text-[24px] ">{allStaffData.length}</h1>
                    </div>
                  </div>

                  <div className="flex justify-center p-6 rounded-lg bg-white shadow gap-4 border">
                    <img
                      src={surgery}
                      alt="surgery-image"
                      className="max-w-[110px] h-auto w-auto md:w-[70px] "
                    />
                    <div>
                      <p className="text-[14px] font-medium ">Recovery Rate</p>
                      <h1 className="text-[24px] ">245</h1>
                    </div>
                  </div>
                </div>

                {/* Summry of numbers 2 */}
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex justify-center p-6 rounded-lg bg-white shadow gap-4 border">
                    <img
                      src={lab}
                      alt="patient-image"
                      className="max-w-[100px] h-auto w-auto md:w-[70px] "
                    />
                    <div>
                      <p className="text-[14px] font-medium ">Lab Request</p>
                      <h1 className="text-[24px] ">1245</h1>
                    </div>
                  </div>

                  <div className="flex justify-center p-6 rounded-lg bg-white shadow gap-4 border">
                    <FaChartBar className=" text-primary max-w-[100px] h-auto w-auto md:w-[70px]" />
                    <div>
                      <p className="text-[14px] font-medium ">Lab Report</p>
                      <h1 className="text-[24px] ">1,000</h1>
                    </div>
                  </div>

                  <div className="flex justify-center p-6 rounded-lg bg-white shadow gap-4 border">
                    <img
                      src={Deathrate}
                      alt="staff-image"
                      className="max-w-[100px] h-auto w-auto md:w-[70px] "
                    />
                    <div>
                      <p className="text-[14px] font-medium ">Death Rate</p>
                      <h1 className="text-[24px] ">15</h1>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:gap-x-2 items-center">
                  <RecoveryStat />
                  <TotalPatientsStat />
                </div>
                <div>
                  <AdmittedPatients />
                </div>
              </div>
              {/* Left Section On Main Page End */}

              {/* Right Section On Main Page Start */}
              <div className="flex flex-col gap-y-4">
                <NurseList />
                <DoctorList />
                <Reports />
              </div>
              {/* Right Section On Main Page End */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SuperAdminDashboard;
