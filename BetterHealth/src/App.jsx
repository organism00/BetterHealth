import React from 'react'
import {Routes,Route } from 'react-router-dom'
import AdminDashboard from './Pages/AdminDashboard'
import Login from './Pages/Login'
import AdminStaff from './Pages/AdminStaff'
import Doctor from './Pages/Doctor'
import Nurse from './Pages/Nurse'
import Staff from './Pages/Staff'
import PatientsList from './Pages/PatientsList';
import DoctorList from './Pages/DoctorList'

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
        <Route path="/" element={<Staff />} />

        <Route path="/admindashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App