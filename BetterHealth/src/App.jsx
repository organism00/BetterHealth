import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastProvider } from "./Components/Loaders/ToastContext";
import AdminDashboard from "./Pages/AdminDashboard";
import Login from "./Pages/Login";
import AdminStaff from "./Pages/AdminStaff";
import Doctor from "./Pages/DoctorLogin";
import Nurse from "./Pages/Nurse";
import Staff from "./Pages/Staff";
import PatientsList from "./Components/HospitalDashboard/Patients/PatientsList";
import DoctorList from "./Components/HospitalDashboard/Doctor/DoctorList";
import DoctorAppointment from "./Components/HospitalDashboard/Doctor/DoctorsAppontment";
import NurseList from "./Components/HospitalDashboard/Nurse/NurseList";
import OnboardPatient from "./Components/HospitalDashboard/Patients/OnboardPatient";
import NewDoctor from "./Components/AdminDashboard/HomePage/Doctor/NewDoctor";
import NewNurse from "./Components/AdminDashboard/HomePage/Nurse/NewNurse";
import PatientDetails from "./Components/HospitalDashboard/Patients/PatientDetails";
import DoctorDetails from "./Components/HospitalDashboard/Doctor/DoctorDetails";
import CalendarComponent from "./Components/Appointment/Calendar";
import NurseDetails from "./Components/HospitalDashboard/Nurse/NurseDetails";
// import Docotordashboard from "./Pages/doctorPages/DoctorDashboard.";
import LabReport from "./Components/LabReport";
import DoctorPatientsList from "./Pages/doctorPages/DoctorPatientsList";
import DoctorProfile from "./Pages/doctorPages/DoctorProfile";

import Index from './Components/AdminDashboard/Index';

const App = () => {
  return (
    <>
      <ToastProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/adminstaff" element={<AdminStaff />} />
          <Route path="/nurse" element={<Nurse />} />
          <Route path="/patientlist" element={<PatientsList />} />
          <Route path="/doctorlist" element={<DoctorList />} />
          <Route path="/nurselist" element={<NurseList />} />
          <Route path="/patientdetails" element={<PatientDetails />} />
          <Route path="/staff" element={<Staff />} />

          <Route path="/doctorappointment" element={<DoctorAppointment />} />
          <Route path={"/newpatient"} element={<OnboardPatient/>}></Route>
          <Route path={"newdoctor"} element={<NewDoctor/>}></Route>
          <Route path={"newnurse"} element={<NewNurse/>}></Route>
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/doctordetails" element={<DoctorDetails />} />
          <Route path="/calendar" element={<CalendarComponent />} />
          <Route path="/nursedetails" element={<NurseDetails />} />
          <Route path="/labreport" element={<LabReport />} />
          <Route path="/doctorpatientslist" element={<DoctorPatientsList />} />
          <Route path="/doctorprofile" element={<DoctorProfile/>}/>
          <Route path="/superadmin" element={<Index/>}/>
        </Routes>
      </ToastProvider>
    </>
  );
};

export default App;
