import React, { useState } from 'react'
import Navbar from './PatientDashboard/Navbar'
import SideBar from './PatientDashboard/SideBar'
import { Table, TableBody, TableCell,  TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { IoIosCall } from "react-icons/io";
import { AiTwotoneMail } from "react-icons/ai";
import { BsQrCode } from "react-icons/bs";

const labreport = [
  { no: 1, patient_name: 'Cole Palmer', pin: 'PN20240001', test: 'Blood Count', lab: 'Microbiology', handling: 'Johen Doe', coll_by: '5.45pm 11/05', status: 'Result Added', result: 'Result Comment', details: 'View Details' },
  { no: 2, patient_name: 'Alex Jones', pin: 'PN20240002', test: 'CMS', lab: 'Microbiology', handling: 'Johen Doe', coll_by: '5.45pm 11/05', status: 'Result Added', result: 'Result Comment', details: 'View Details' },
  { no: 3, patient_name: 'Santos Ariana', pin: 'PN20240003', test: 'Covid', lab: 'Microbiology', handling: 'Johen Doe', coll_by: '5.45pm 11/05', status: 'Result Added', result: 'Result Comment', details: 'View Details' },
  { no: 4, patient_name: 'Mia Khalifa', pin: 'PN20240004', test: 'Urin', lab: 'Microbiology', handling: 'Johen Doe', coll_by: '5.45pm 11/05', status: 'Result Added', result: 'Result Comment', details: 'View Details' },
  { no: 5, patient_name: 'John Luiz', pin: 'PN20240005', test: 'Blood Count', lab: 'Microbiology', handling: 'Johen Doe', coll_by: '5.45pm 11/05', status: 'Result Added', result: 'Result Comment', details: 'View Details' },
  { no: 6, patient_name: 'Loveth Ark', pin: 'PN20240006', test: 'HD', lab: 'Microbiology', handling: 'Johen Doe', coll_by: '5.45pm 11/05', status: 'Result Added', result: 'Result Comment', details: 'View Details' },
  { no: 7, patient_name: 'Johnny Owens', pin: 'PN20240007', test: 'MD', lab: 'Microbiology', handling: 'Johen Doe', coll_by: '5.45pm 11/05', status: 'Result Added', result: 'Result Comment', details: 'View Details' },

]
const report = [
  { test: 'Swelling Diameter', result: '45 - 1000', Range: '' },
  { test: 'Swelling Diameter', result: '70 - 1200', Range: '' },
  

]
const LabReport = () => {
  const [openResultModal, setOpenResultModal] = useState(false)
  const [openDetailsModal, setOpenDetailsModal] = useState(false)


  const handleDetailsModal = () => {
    setOpenDetailsModal(true)
 }

  const handleResultModal = () => {
    setOpenResultModal(true)
  }
            
    return (
      <>
        <div className="lg:grid lg:grid-cols-[16rem_1fr] z-0">
          <SideBar />
          <main className="col-start-2 h-full w-full md:w-[70%] lg:w-full mt-40 lg:mt-0 md:mt-0">
            <Navbar />
  
            <div className="mt-24 w-full h-full lg:w-full lg:ml-0 md:ml-72 lg:pl-12 lg:pr-5 px-5">
              <div className="flex gap-5">
                <h1 className="text-[20px] font-medium">Lab Reports</h1>
                <div className="flex gap-2 items-center">
                  {/* <GoHome /> */}
                  <p className="font-thin"> - Lab Reports</p>
                </div>
              </div>
              <div className='shadow-xl border border-stone-100 h-[500px] w-[1193px] rounded-lg mt-[20px]  '>
                <h1 className='text-[18px] font-normal px-6 py-5 '>Radiology List</h1>
                <TableContainer component={Paper} className="w-full h-full">
                  <Table className="w-full h-full" aria-label="simple table">
                    <TableHead className="bg-stone-100">
                      <TableRow>
                        <TableCell className="text-[14px] font-normal px-2 py-2">No.</TableCell>
                        <TableCell className="text-[14px] font-normal px-2 py-2">Patient Name</TableCell>
                        <TableCell className="text-[14px] font-normal px-2 py-2">Pin</TableCell>
                        <TableCell className="text-[14px] font-normal px-2 py-2">Test</TableCell>
                        <TableCell className="text-[14px] font-normal px-2 py-2">Lab</TableCell>
                        <TableCell className="text-[14px] font-normal px-2 py-2">Cost</TableCell>
                        <TableCell className="text-[14px] font-normal px-2 py-2">Handling</TableCell>
                        <TableCell className="text-[14px] font-normal px-2 py-2">Coll. by</TableCell>
                        <TableCell className="text-[14px] font-normal px-2 py-2">Status</TableCell>
                        <TableCell className="text-[14px] font-normal px-2 py-2">Details</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {labreport.map((row) => (
                        <TableRow>
                          <TableCell>{row.no}</TableCell>
                          <TableCell>{row.patient_name}</TableCell>
                          <TableCell>{row.pin}</TableCell>
                          <TableCell>{row.test}</TableCell>
                          <TableCell>{row.lab}</TableCell>
                          <TableCell>{row.handling}</TableCell>
                          <TableCell>{row.coll_by}</TableCell>
                          <TableCell><p className='bg-[#4da089] flex items-center justify-center py-1 rounded text-white'>{row.status}</p></TableCell>
                          <TableCell><p className='text-[#3596F7] cursor-pointer' onClick={handleResultModal}>{row.result}</p></TableCell>
                          <TableCell><p className='bg-[#ab5f78] flex items-center justify-center py-1 rounded text-white cursor-pointer'
                            onClick={handleDetailsModal}>{row.details}</p></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>

              
            {openResultModal && (
              <div className='fixed top-0 left-0 z-50 bg-[#08030366] w-[100%] h-[100vh] px-40 flex items-center justify-center '>
                <div className='bg-white p-10 '>
                  <div className='font-semibold text-[25px] text-gray-500 py-7'>Radiology Investigations - Result</div>
                  <div className='font-semibold text-[22px] text-gray-500'>Test Name - Neck Scan</div>
                  <div className='flex justify-evenly mt-[-28px] font-semibold text-[22px] text-gray-500'>Lab Order Id : L0000002821</div>
                  <TableContainer component={Paper} className="w-full h-full">
                    <Table className="w-full h-full" aria-label="simple table">
                      <TableHead className="bg-stone-100">
                        <TableRow>
                          <TableCell className="text-[14px] font-normal px-2 py-2">Test</TableCell>
                          <TableCell className="text-[14px] font-normal px-2 py-2">Result</TableCell>
                          <TableCell className="text-[14px] font-normal px-2 py-2">Range </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {report.map((row) => (
                          <TableRow>
                            <TableCell>{row.test}</TableCell>
                            <TableCell>{row.result}</TableCell>  
                          </TableRow>
                        ))}
                      </TableBody>   
                    </Table>
                  </TableContainer>
                  <div className='font-semibold text-gray-500'>
                    <p className='text-[10px] font-normal text-gray-700 mt-[10px]'>
                    Comment
                    </p>
                    <p className='font-normal px-[48px] mt-[-19px] text-gray-500 '>: Loprem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                  <div>
                    <p className='font-bld py-6 px-8'>Test By</p>
                    <p className='font-bold px-[400px] mt-[-47px]'>Signed By</p>
                  </div>

                  <div className='h-[50px] w-[945px] bg-gray-100 mt-[15px] grid grid-cols-4 px-4 py-4 font-normal'>
                    <p>Donald Jr</p>
                    <p>Time : 11-8-2024 04:22</p>
                    <p>Lous Clark</p>
                    <p>Time : 11-8-2024 04:22</p>
                  </div>  
                  <div className='py-4 flex flex-row justify-end space-x-5 font-semibold'>
                  <p className='h-8 w-[60px] px-[13px] rounded py-[2px]  bg-[#05825F]  text-white   '>Save</p>
                  <p className='h-8 w-[60px] px-[13px] py-[2px] rounded bg-[#3596F7] text-white'>Print</p>
                  <p className='h-8 w-[60px] px-[10px] py-[2px] rounded text-white bg-[#EE3158] cursor-pointer'
                    onClick={() => setOpenResultModal(false)}>Close</p>

                  </div>
                </div>
              </div>
            )}


              {openDetailsModal && (
              <div className='fixed top-0 left-0 z-50 bg-[#08030366] w-[100%] h-[100vh] px-40  flex items-center justify-center hover:overflow-y-auto '>
                <div className='bg-white p-10 '>
                <div className='font-bold '>
                  BETTERHEALTH 
                  <p className='font-bold text-[#2e7bc8] px-[125px] mt-[-24px]'>
                  PATHOLOGY LAB
                  </p>
                </div>

                <div className='font-bold text-[13px]'>
                  <p>Accurate | Caring | Instant</p>
                </div>

                <div>
                    <IoIosCall className='ml-[360px] mt-[-39px]'/>
                    <p className='ml-[380px] mt-[-20px] font-semibold'>011-2232-232 | 112-5545-229</p>      
                </div>

                <div>
                    <AiTwotoneMail  className='ml-[363px]' />
                    <p className='ml-[380px] mt-[-19px] text-[13px] font-semibold px-1'>parblodrugs@gmail.com</p>
                </div>
                <div>
                  <p className='text-[9px] py-4'>105-108, SMART VISION COMPLEX, HEALTHCARE ROAD, OPPOSITE  TO SINDH BANK, KARACHI-223358</p>
                </div>
                <div className='h-[3px] w-[590px] bg-gray-500'></div>
                <div className='mt-[27px]'>
                  <p className='font-bold '>Yash M. Patel</p>
                  <p className='text-[10px] font-normal text-gray-700'> Age: 25</p>
                  <p className='text-[10px] font-normal text-gray-700'>Sex: Male</p>
                  <p className='text-[10px] font-normal text-gray-700'>PID: 555</p>
                  <BsQrCode className='ml-[100px] mt-[-20px]'/>
                </div>

                <div className='px-[190px] mt-[-63px]'>
                  <p className='font-bold'>Sample Collected At:</p>
                  <p className='text-[10px]'>125, Shiven  Complex, <br /> Near 5 Star Hotel, Karachi.</p>
                  <p className='text-[10px]'>Ref. By Dr. Hiren Shah</p>
                </div>
                
                <div className='text-[10px] px-[410px] mt-[-55px]'>
                  <p>Registered on: 02:31 PM 02 Dec.2x</p>
                  <p>Collected on: 02:31 PM 02 Dec.2x</p>
                  <p>Reported on: 02:31 PM 02 Dec.2x</p>
                </div>
                <div className='h-[3px] w-[590px] bg-gray-500 mt-[10px]'></div>
                <p className='font-bold px-[220px]'>Hematorcrit (HCT)</p>
                <div className='h-[3px] w-[590px] bg-gray-500 mt-[10px]'></div>
                <div className='h-[3px] w-[590px] bg-gray-500 mt-[30px]'></div>
                  <div className='flex flex-cols space-x-20 mt-[-30px] font-bold'>
                    <p>Investigation</p>
                    <p>Result</p>
                    <p>Reference Value</p>
                    <p>Unit</p>
                  </div>
                  <div className='text-[10px] py-2'>
                    <p className='py-1'>Primary Sample Type:</p>
                    <p className='font-bold'>Hematocrit(HCT)/</p>
                    <p className='font-bold py-1'>Packed Cell Volume(PCV)</p>
                    <p>HCT / PCV</p>
                  </div>
                  <div className='px-[178px] mt-[-112px] text-[10px]'>
                    <p className='py-7'>Blood</p>
                    <p className='text-red-600 font-semibold'>57</p>
                  </div>
                  <div className='px-[265px] text-[11px] flex flex-cols gap-4 mt-[-14px] font-semibold'>
                    <p className='text-red-600'>High</p>
                    <p>40-50</p>
                  </div>
                  <div className='px-[510px] mt-[-24px]'>%</div>
                  <div>
                    <p className='font-bold text-[15px] py-6'>Comments:</p>
                    <p className='text-[12px] mt-[-23px]'>* A Hematocrit(HCT) Blood Test or packed-cell volume(PCV) Blood lab determines the percentage of the <br /> blood that is composed of Red blood cells(RBCs).RBCs carry oxygen throughout your body. Having too few or <br /> too many red blod cells can be a sign of certain diseases.</p>
                  </div>
                  <div>
                    <p className='font-bold text-[15px] mt-[15px]'>Low HCT / PCV Causes:</p>
                    <p className='text-[12px]'>* Anemia - Fatique, weakness, shortness of breath, dizziness, pale skin</p>
                    <p className='text-[12px]'>* Blood loss - weakness, dizziness, pale skin, rapid heartbeat</p>
                    <p className='text-[12px]'>* Nutritional deficiences - fatique, weakness, shortness of breath, pale skin, britle nails</p>
                    <p className='text-[12px]'>* Kidney disease - Fatique, weakness, shortness of breath, swelling in the legs</p>
                    <p className='text-[12px]'>* Bone marrowd disorders - Fatique, weakness, shortness of breath, swelling in the legs</p>
                    <p className='text-[12px]'>* Chronic inflamation - Fatique, weakness joint pain, fever</p>
                    <p className='text-[12px]'>* Hormonal imbalances - Fatique, weakness, weight gain or loss, dry skin,hair loss</p>
                    <p className='text-[12px]'>* Pregnanacy - Fatique, wekakness, shortness of breath, dizzness, lightheadedness</p>      
                  </div>
                  
                  
                  <div className='h-[3px] w-[590px] bg-gray-500 mt-[7px]'></div>
                  <div className='py-3'>
                    <p className='text-[10px] py-9 mt-[-33px]'>Thanks for Reference</p>
                    <p className='text-[15px] font-bold'>Medical Lab Technician</p>
                    <p className='text-[11px]'>(DMLT,BMLT)</p>
                  </div>
                  <div className='px-[240px] mt-[-135px]'>
                    <p className='text-[10px] py-9'>****End of Report****</p>
                    <p className='text-[15px] font-bold mt-[-3px]'>Dr. Payal Shah</p>
                    <p className='text-[11px]'>(MD.Pathologist)</p>
                  </div>
                  <div className='px-[420px] mt-[-39px] '>
                    <p className='text-[15px] font-bold'>Dr. Vimal Shah</p>
                    <p className='text-[10px]'>(MD.Pathologist)</p>
                  </div>
                  <div className='h-[3px] w-[590px] bg-gray-500 mt-[7px]'></div>
                  <div className='text-[9px] px-[300px]'>Generated on : 02 Oct. 2024 05:00PM</div>
                  <div className='flex flex-cols justify-end gap-4 mt-[-60px]'>
                    <p className='h-8 w-[60px] px-[13px] rounded py-[2px]  bg-[#05825F]  text-white cursor-pointer '>Save</p>
                    <p className='h-8 w-[60px] px-[13px] py-[2px] rounded bg-[#3596F7] text-white cursor-pointer'>Print</p>
                    <p className='h-8 w-[60px] px-[10px] py-[2px] rounded text-white bg-[#EE3158] cursor-pointer ' onClick={() => setOpenDetailsModal(false)}>Close</p>
                </div>
              </div>
            </div>
          )}
          </main>
        </div>
      </>
      );
}
export default LabReport