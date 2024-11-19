import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import SuperAdminRoute from './Components/AdminDashboard/HomePage/SuperAdminRoute.jsx';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PatientRoutes from './Components/PatientDashboard/HomePages/PatientRoutes.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PatientRoutes/>
      <SuperAdminRoute/>
      <App />
    </BrowserRouter>
  </StrictMode>
);
