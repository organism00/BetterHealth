import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastProvider } from '../../../Components/Loaders/ToastContext';

import DoctorDetails from './Doctor/DoctorDetails';
import DoctorList from './Doctor/DoctorList';
import NewDoctor from './Doctor/NewDoctor';

import NurseDetails from './Nurse/NurseDetails';
import NurseList from './Nurse/NurseList';
import NewNurse from './Nurse/NewNurse';

function SuperAdminRoute() {
  return (
    <div>
      <ToastProvider>
        <Routes>
          <Route path="/admin/doctorlist" element={<DoctorList />} />
          <Route path="/admin/doctordetails" element={<DoctorDetails />} />
          <Route path="/admin/newdoctor" element={<NewDoctor />} />

          <Route path="/admin/nurselist" element={<NurseList />} />
          <Route path="/admin/nursedetails" element={<NurseDetails />} />
          <Route path="/admin/newnurse" element={<NewNurse />} />
        </Routes>
      </ToastProvider>
    </div>
  )
}

export default SuperAdminRoute