import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./Pages/AdminDashboard";
import Login from "./Pages/Login";
import AdminStaff from "./Pages/AdminStaff";
import Doctor from "./Pages/DoctorLogin";
import Nurse from "./Pages/Nurse";
import Staff from "./Pages/Staff";
import PatientsList from "./Pages/PatientsList";
import DoctorList from "./Pages/DoctorList";
import NurseList from "./Pages/NurseList";
import DoctorDetails from "./Pages/DoctorDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/adminstaff" element={<AdminStaff />} />
        <Route path="/nurse" element={<Nurse />} />
        <Route path="/patientlist" element={<PatientsList />} />
        <Route path="/doctorlist" element={<DoctorList />} />
        <Route path="/nurselist" element={<NurseList />} />
        <Route path="/" element={<Staff />} />

        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/doctordetails" element={<DoctorDetails />} />
      </Routes>
    </>
  );
};

export default App;
