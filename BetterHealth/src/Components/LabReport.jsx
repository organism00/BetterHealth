import React, { useState } from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'
import { Table, TableBody, TableCell,  TableContainer, TableHead, TableRow, Paper } from '@mui/material';

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
  const [openResultModal, setOpenResultModal] = useState(true)

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
                                <TableCell><p className='bg-[#ab5f78] flex items-center justify-center py-1 rounded text-white cursor-pointer'>{row.details}</p></TableCell>
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
                          <p>
                          Comment
                          </p>
                          <p className='font-normal px-20 mt-[-24px] text-gray-500'>: Loprem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div>
                          <p className='font-bold py-6 px-8'>Test By</p>
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
                  
            </main> 
          </div>
        </>
      );
}

export default LabReport