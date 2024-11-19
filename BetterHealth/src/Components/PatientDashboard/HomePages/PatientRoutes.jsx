import React from "react";
import { ToastProvider } from "../../Loaders/ToastContext";
import { Route, Routes } from "react-router-dom";
import Patientdashboard from "./Patientdashboard";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

const PatientRoutes = () => {
  return (
    <div>
      <ToastProvider>
        <Routes>
          <Route path="/patient/patientdashboard" element={<Patientdashboard/>} />
          <Route path="/patient/signin" element={<SignIn/>} />
          <Route path="/patient/signup" element={<SignUp/>} />
        </Routes>
      </ToastProvider>
    </div>
  );
};

export default PatientRoutes;
