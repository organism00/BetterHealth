import React, {useState, useEffect} from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
// Images
import lab from "../../../assets/Images/laboratory.png";
import patient from "../../../adminDashboardAssets/patients.svg";
import staff from "../../../adminDashboardAssets/Staffs.svg";
import surgery from "../../../adminDashboardAssets/sugery.svg";
import Revenue from "../../../assets/Images/profit-up.png";
import Deathrate from "../../../assets/Images/death-rate.png";
// Components
import PatientStat from "../../HospitalDashboard/PatientStat";
import RecoveryStat from "../../HospitalDashboard/RecoveryStat";
import TotalPatientsStat from "../../HospitalDashboard/TotalPatientsStat";
import Reports from "../../HospitalDashboard/Reports";
import DoctorList from "../../HospitalDashboard/DoctorList";
import AdmittedPatients from "../../HospitalDashboard/AdmittedPatients";
import RecentQuestions from "../../HospitalDashboard/RecentQuestions";



const SuperAdminDashboard = () => {
  const [allPatientData, setAllPatientData] = useState([]);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const res = await axios.get("https://hms-w4kw.onrender.com/api/Patient/GetPatients");
        console.log(res.data.$values);
        // setAllPatientData(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPatient();
  })
  return (
    <>
      <div className="lg:flex">
        <Sidebar />
        <div>
          <Navbar />
          <section className="w-full lg:w-[78vw] h-[120vh] lg:ml-[18vw] z-0 pt-20 lg:pt-28   px-2 lg:px-4">
            <div className="flex flex-col lg:flex-row z-0 gap-y-6 lg:gap-x-8 ">
              {/* Left Section On Main Page Start */}
              <div className="flex lg:w-[65%] flex-col gap-4">
                {/* Summry of numbers 1 */}
                <div className="flex flex-col md:flex-row gap-4 z-0 justify-between">
                  <div className="flex justify-center p-6 rounded-lg bg-white shadow gap-4 border">
                    <img
                      src={patient}
                      alt="patient-image"
                      className="max-w-[110px] h-auto w-auto md:w-[80px] "
                    />
                    <div>
                      <p className="text-[18px] ">Total Patience</p>
                      <h1 className="text-[24px] ">1245</h1>
                    </div>
                  </div>

                  <div className="flex justify-center p-6 rounded-lg bg-white shadow gap-4 border">
                    <img
                      src={staff}
                      alt="staff-image"
                      className="max-w-[110px] h-auto w-auto md:w-[80px] "
                    />
                    <div>
                      <p className="text-[18px] ">Total Staffs</p>
                      <h1 className="text-[24px] ">145</h1>
                    </div>
                  </div>

                  <div className="flex justify-center p-6 rounded-lg bg-white shadow gap-4 border">
                    <img
                      src={surgery}
                      alt="surgery-image"
                      className="max-w-[110px] h-auto w-auto md:w-[80px] "
                    />
                    <div>
                      <p className="text-[18px] ">Recovery Rate</p>
                      <h1 className="text-[24px] ">245</h1>
                    </div>
                  </div>
                </div>

                {/* Summry of numbers 2 */}
                <div className="flex flex-col md:flex-row gap-4 my-4 z-0 justify-between">
                  <div className="flex justify-center p-6 rounded-lg bg-white shadow gap-4 border">
                    <img
                      src={lab}
                      alt="patient-image"
                      className="max-w-[110px] h-auto w-auto md:w-[80px] "
                    />
                    <div>
                      <p className="text-[18px] ">Lab Tests</p>
                      <h1 className="text-[24px] ">1245</h1>
                    </div>
                  </div>

                  <div className="flex justify-center p-6 rounded-lg bg-white shadow gap-4 border">
                    <img
                      src={Deathrate}
                      alt="staff-image"
                      className="max-w-[110px] h-auto w-auto md:w-[80px] "
                    />
                    <div>
                      <p className="text-[18px] ">Death Rate</p>
                      <h1 className="text-[24px] ">15</h1>
                    </div>
                  </div>

                  <div className="flex justify-center p-6 rounded-lg bg-white shadow gap-4 border">
                    <img
                      src={Revenue}
                      alt="surgery-image"
                      className="max-w-[110px] h-auto w-auto md:w-[80px] "
                    />
                    <div>
                      <p className="text-[18px] ">Revenue</p>
                      <h1 className="text-[24px] ">₦100,000,000</h1>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-y-6 z-0 md:gap-x-8 items-center">
                  <RecoveryStat />
                  <TotalPatientsStat />
                </div>
                <div>
                  <AdmittedPatients />
                </div>
                <div className="flex flex-col md:flex-row gap-y-6 z-0 md:gap-x-8 mt-4">
                  <RecentQuestions />
                  <RecentQuestions />
                </div>
              </div>
              {/* Left Section On Main Page End */}

              {/* Right Section On Main Page Start */}
              <div className="flex lg:w-[35%] flex-col z-0 gap-y-4">
                <PatientStat />
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