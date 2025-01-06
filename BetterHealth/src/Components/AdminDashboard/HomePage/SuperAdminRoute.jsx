import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastProvider } from '../../../Components/Loaders/ToastContext';

import DoctorDetails from './Doctor/DoctorDetails';
import DoctorList from './Doctor/DoctorList';
import NewDoctor from './Doctor/NewDoctor';

import NurseDetails from './Nurse/NurseDetails';
import NurseList from './Nurse/NurseList';
import NewNurse from './Nurse/NewNurse';
import SuperAdminDashboard from './SuperAdminDashboard';
import StaffManagement from './StaffManagement';
import Index from '../Index';
import Inventory from './Inventory';
import AddDrug from './AddDrug';
import PatientsList from './Patient/PatientsList';
import PatientDetails from './Patient/PatientDetails';
import LabTest from './Lab/LabTest';
import Payment from './Payment';

function SuperAdminRoute() {
  return (
    <div>
      <ToastProvider>
        <Routes>
          <Route path="/admin/superadmin" element={<Index />} />
          <Route
            path="/admin/superadmindashboard"
            element={<SuperAdminDashboard />}
          />
          <Route path="/admin/doctorlist" element={<DoctorList />} />
          <Route path="/admin/doctordetails" element={<DoctorDetails />} />
          <Route path="/admin/newdoctor" element={<NewDoctor />} />

          <Route path="/admin/nurselist" element={<NurseList />} />
          <Route path="/admin/nursedetails" element={<NurseDetails />} />
          <Route path="/admin/newnurse" element={<NewNurse />} />
          <Route path='/admin/labreport' element={<LabTest/>}/>
          <Route path="/admin/inPatientsList" element={<PatientsList />} />
          <Route path="/admin/patientdetails" element={<PatientDetails />} />

          <Route path="/admin/staffManagement" element={<StaffManagement />} />
          <Route path="/admin/inventory" element={<Inventory />} />
          <Route path="/admin/addDrug" element={<AddDrug />} />
          <Route path="/admin/payment" element={<Payment />} />
        </Routes>
      </ToastProvider>
    </div>
  );
}

export default SuperAdminRoute