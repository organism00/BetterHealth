import React from 'react';

// Images
import heart from '../adminDashboardAssets/heart.svg';
import patient from '../adminDashboardAssets/patients.svg';
import staff from '../adminDashboardAssets/Staffs.svg';
import surgery from '../adminDashboardAssets/sugery.svg';

// Components
import PatientStat from '../Components/adminDashboard/PatientStat';
import RecoveryStat from '../Components/adminDashboard/RecoveryStat';
import TotalPatientsStat from '../Components/adminDashboard/TotalPatientsStat';
import Reports from '../Components/adminDashboard/Reports';
import DoctorList from '../Components/adminDashboard/DoctorList';
import AdmittedPatients from '../Components/adminDashboard/AdmittedPatients';
import RecentQuestions from '../Components/adminDashboard/RecentQuestions';

function AdminDashboard() {
  return (
    <div className="flex flex-col gap-4 md:flex-row px-8 py-4 md:px-0 ">
      <div className='hidden md:block w-[250px] h-[100vh] bg-[green] sticky top-0 ' ></div>

      <div>
        <div className='bg-white border-lg text-[#172b4c] shadow flex flex-col md:flex-row p-4 items-center justify-center gap-2 rounded-lg border '>
          <img src={heart} alt='img' className='max-w-[135px] w-auto' />
          <div>
            <h1 className='text-[24px] leading-7 '>Today - 20% Discount on Lung Examinations</h1>
            <p className='text-[14px] '>The Package price includes: consultation of a pulmonolgist, spirogrphy, cardiogram</p>
          </div>
          <div className='w-[112px] h-[42px] '>
            <button className='bg-[#5156be] text-white w-[112px] h-[42px] rounded-md '>Know More</button>
          </div>
        </div>

        {/* Summry of numbers */}
        <div className='flex flex-col md:flex-row gap-4 mt-4 justify-between'>
          <div className='flex justify-center p-6 rounded-lg bg-white shadow gap-4 border'>
            <img src={patient} alt='' className='max-w-[110px] h-auto w-auto md:w-[80px] ' />
            <div>
              <p className='text-[18px] '>Total Patience</p>
              <h1 className='text-[24px] '>1245</h1>
            </div>
          </div>

          <div className='flex justify-center p-6 rounded-lg bg-white shadow gap-4 border'>
            <img src={staff} alt='' className='max-w-[110px] h-auto w-auto md:w-[80px] ' />
            <div>
              <p className='text-[18px] '>Total Staffs</p>
              <h1 className='text-[24px] '>145</h1>
            </div>
          </div>

          <div className='flex justify-center p-6 rounded-lg bg-white shadow gap-4 border'>
            <img src={surgery} alt='' className='max-w-[110px] h-auto w-auto md:w-[80px] ' /> 
            <div>
              <p className='text-[18px] '>Total Surgery</p>
              <h1 className='text-[24px] '>245</h1>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className='flex flex-col md:flex-row mt-4 justify-between'>
          <PatientStat/>
          <RecoveryStat/>
        </div>

        <AdmittedPatients/>

        <div className='mt-4 flex justify-between'>
          <RecentQuestions/>
          <RecentQuestions/>
        </div>

      </div>
      <div className='grid gap-4'>
        <TotalPatientsStat/>
        <Reports/>
        <DoctorList/>
      </div>
    </div>
  );
}

export default AdminDashboard;
