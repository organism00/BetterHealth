import React, { useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { patientData } from '../Components/PatientData'
// Icons
import { RiEdit2Fill } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";

function PatientsList() {
  const [patientPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)
  // const [patientList, setPatientList] = useState(patientData)
  // const [search, setSearch] = useState('')
  
  const indexOfLastPatient = currentPage * patientPerPage
  const indexOfFirstPatient = indexOfLastPatient - patientPerPage
  const currentPatientList = patientData.slice(indexOfFirstPatient, indexOfLastPatient)
  // console.log(currentPatientList)

  const pageNumber = []
  for (let i = 1; i <= Math.ceil(patientData.length / patientPerPage); i++) {
    pageNumber.push(i)
  }

  return (
    <div>
      <div>
        <h1>Patients</h1>

        <div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow className='bg-[#cce5ff] '>
                  <TableCell style={{fontSize: '14px', fontWeight: 'bold', color: '#3596f7'}}>Patient ID</TableCell>
                  <TableCell style={{fontSize: '14px', fontWeight: 'bold', color: '#3596f7'}}>Date Checked In</TableCell>
                  <TableCell style={{fontSize: '14px', fontWeight: 'bold', color: '#3596f7'}}>Patient Name</TableCell>
                  <TableCell style={{fontSize: '14px', fontWeight: 'bold', color: '#3596f7'}}>Doctor Assigned</TableCell>
                  <TableCell style={{fontSize: '14px', fontWeight: 'bold', color: '#3596f7'}}>Disease</TableCell>
                  <TableCell style={{fontSize: '14px', fontWeight: 'bold', color: '#3596f7'}}>Status</TableCell>
                  <TableCell style={{fontSize: '14px', fontWeight: 'bold', color: '#3596f7'}}>Room No</TableCell>
                  <TableCell style={{fontSize: '14px', fontWeight: 'bold', color: '#3596f7'}}>Settings</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentPatientList.map((row) => (
                  <TableRow key={row.id} className=''>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.dateCheckedIn} {row.time}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.doctorAssigned}</TableCell>
                    <TableCell>{row.disease}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.roomNo}</TableCell>
                    <TableCell style={{display: 'flex', gap: 5}} >
                      <div
                        variant="contained"
                        style={{ minWidth: 'unset' }}
                        className='flex items-center justify-center cursor-pointer rounded-full w-[30px] h-[30px] bg-[green] '>
                        <RiEdit2Fill className='text-[16px] text-white '/>
                      </div>
                      <div
                        variant="contained"
                        style={{ minWidth: 'unset' }}
                        className='flex items-center justify-center cursor-pointer rounded-full w-[30px] h-[30px] bg-[red] '>
                        <RiDeleteBin6Line className='text-[16px] text-white '/>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {currentPatientList ? (
            <div className='bg-[#e4e6ef] text-text px-4 py-4 flex justify-between items-center rounded-b-lg '>
              <p>Showing {currentPage} to {patientPerPage} of {patientData.length} enteries</p>

              <div className='flex gap-4'>
                <button onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`${currentPage === 1 ? 'opacity-40' : 'opacity-100'}`}>Previous</button>
                {pageNumber.map((number, index) => (
                  <button key={index} onClick={() => setCurrentPage(number)}
                  style={currentPage === number ? {
                    borderRadius: '5px',
                    color: 'white',
                    fontWeight: 'bold',
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#5156be',
                    transition: 'all 0.6s ease'
                  } : null}>{number}</button>
                ))}
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === pageNumber.length}
                  className={`${currentPage === pageNumber.length ? 'opacity-40' : 'opacity-100'}`}>Next</button>
              </div>
            </div>
          ) : null}
        </div>
        
      </div>
    </div>
  )
}

export default PatientsList