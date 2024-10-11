import AdminStaff from './Pages/AdminStaff';
import Doctor from './Pages/Doctor';
import Login from './Pages/Login'
import { Route, Routes } from 'react-router-dom'
import Nurse from './Pages/Nurse';
import Staff from './Pages/Staff';




function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/adminstaff" element={<AdminStaff />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/nurse" element={<Nurse />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>

      
    </>
  );
}

export default App
