import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./Pages/AdminDashboard";
import Login from "./Pages/Login";
import AdminStaff from "./Pages/AdminStaff";
import Doctor from "./Pages/DoctorLogin";
import Nurse from "./Pages/Nurse";
import Staff from "./Pages/Staff";
import PatientsList from "./Components/Patients/PatientsList";
import DoctorList from "./Components/Doctor/DoctorList";
import DoctorAppointment from "./Components/Doctor/DoctorsAppontment";
import NurseList from "./Components/Nurse/NurseList";
import NewPatients from "./Pages/NewPatient";
import NewDoctor from "./Components/Doctor/NewDoctor";
import NewNurse from "./Components/Nurse/NewNurse";
import PatientDetails from "./Components/Patients/PatientDetails";
import DoctorDetails from "./Components/Doctor/DoctorDetails";
import CalendarComponent from "./Components/Appointment/Calendar";
import NurseDetails from "./Components/Nurse/NurseDetails";
import Doctordashboard from "./Pages/doctorPages/DoctorDashboard.";
import DoctorPatientsList from "./Pages/doctorPages/DoctorPatientsList";
import DoctorProfile from "./Pages/doctorPages/DoctorProfile";

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
        <Route path="/patientdetails" element={<PatientDetails />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/doctordashboard" element={<Doctordashboard />}></Route>
        <Route path="/doctorappointment" element={<DoctorAppointment />} />
        <Route path={"/newpatient"} element={<NewPatients />}></Route>
        <Route path={"newdoctor"} element={<NewDoctor />}></Route>
        <Route path={"newnurse"} element={<NewNurse />}></Route>
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/doctordetails" element={<DoctorDetails />} />
        <Route path="/calendar" element={<CalendarComponent />} />
        <Route path="/nursedetails" element={<NurseDetails />} />
        <Route path="/doctorpatientslist" element={<DoctorPatientsList />} />
        <Route path="/doctorprofile" element={<DoctorProfile/>}/>
      </Routes>
    </>
  );
};

export default App;
