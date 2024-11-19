import React from "react";
import { ToastProvider } from "../../Loaders/ToastContext";
import { Route, Routes } from "react-router-dom";
import Patientdashboard from "./Patientdashboard";

const PatientRoutes = () => {
  return (
    <div>
      <ToastProvider>
        <Routes>
          <Route path="/patient/patientdashboard" element={<Patientdashboard/>} />
        </Routes>
      </ToastProvider>
    </div>
  );
};

export default PatientRoutes;
