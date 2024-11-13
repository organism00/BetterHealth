import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { patientData as initialPatientData } from './PatientData';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../Sidebar'
import Navbar from '../../Navbar';
import { useToast } from '../../../Loaders/ToastContext';
import WaitingLoader from '../../../Loaders/WaitingLoader';

// Icons
import { GoHome } from "react-icons/go";
import { TbArrowsSort } from "react-icons/tb";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import axios from 'axios';

function PatientsList() {
  const navigate = useNavigate()
  const {startWaitingLoader, stopWaitingLoader} = useToast()
  const [patientPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(1);
  const [patients, setPatients] = useState(initialPatientData);
  const [patientsListFromApi, setPatientsListFromApi] = useState([])
  
  const indexOfLastPatient = currentPage * patientPerPage
  const indexOfFirstPatient = indexOfLastPatient - patientPerPage
  const currentPatientList = patients.slice(indexOfFirstPatient, indexOfLastPatient)

  const pageNumber = []
  for (let i = 1; i <= Math.ceil(patients.length / patientPerPage); i++) {
    pageNumber.push(i)
  }

  useEffect(() => {
    const fetchPatient = async () => {
      startWaitingLoader()
      try {
        const res = await axios.get('https://hms-w4kw.onrender.com/api/Patient/GetPatients')
        console.log(res.data.$values)
        setPatientsListFromApi(res.data.$values)
        stopWaitingLoader()
      } catch (error) {
        console.log(error.data)
        stopWaitingLoader()
      }
    }
    fetchPatient()
  }, [])

  const handleDelete = (id) => {
    const newPatients = patients.filter(patient => patient.id !== id)
    setPatients(newPatients)
  }

  const handleEdit = (id) => {
    navigate('/editpatient', {state: id})
  }

  const handleView = (id) => {
    navigate('/admin/patientdetails', {state: id})
  }

  // Edit menu
  const [openEditMenu, setOpenEditMenu] = useState(false);
  const [id, setId] = useState(null);

  const toggleEditMenu = (item) => {
    setOpenEditMenu(!openEditMenu);
    setId(item);
  };

  return (
    <div className='flex'>
      <Sidebar/>
      <div className='w-full'>
        <Navbar />
        <div>
          <div className='m-4 space-y-8 '>
            <div className='flex justify-between'>
              <div className='flex gap-x-5 '>
                <h1 className="text-2xl">Patients</h1>
                <div className="flex gap-2 items-center">
                  <Link to='/admindashboard'><GoHome/></Link>
                  <p className="font-thin"> - Patients</p>
                </div>
              </div>
              <div className='flex gap-2'>
                  <input type="text" className='md:w-[350px] border px-4 rounded' />
                  <button className='bg-[#5156be] text-white px-4 rounded '>Search</button>
              </div>
            </div>

            <div className='flex flex-col items-center '>
              <TableContainer component={Paper} style={{width: '100%'}}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell><div className='flex items-center gap-2 text-[12px] leading-5 font-bold text-primary '>Patient <br /> ID </div></TableCell>
                      <TableCell><div className='flex items-center gap-2 text-[12px] leading-5 font-bold text-primary '> Date<br />Checked In </div></TableCell>
                      <TableCell><div className='flex items-center gap-2 text-[12px] leading-5 font-bold text-primary '>Patient <br /> Name </div></TableCell>
                      <TableCell><div className='flex items-center gap-2 text-[12px] leading-5 font-bold text-primary '>Gender </div></TableCell>
                      <TableCell><div className='flex items-center gap-2 text-[12px] leading-5 font-bold text-primary '>Medical <br />Condition </div></TableCell>
                      <TableCell><div className='flex items-center gap-2 text-[12px] leading-5 font-bold text-primary '>Contact </div></TableCell>
                      <TableCell><div className='flex items-center gap-2 text-[12px] leading-5 font-bold text-primary '>Address</div></TableCell>
                      <TableCell><div className='flex items-center gap-2 text-[12px] leading-5 font-bold text-primary '>Settings </div></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {patientsListFromApi.length > 0 ? patientsListFromApi.map((row) => (
                      <TableRow key={row.$id} className=''>
                        <TableCell><div className='text-[12px]'>{row.$id}</div></TableCell>
                        <TableCell><div className='text-[12px]'>{row.registerDate}</div></TableCell>
                        <TableCell><div className='text-[12px]'>{row.firstname} {row.lastname}</div></TableCell>
                        <TableCell><div className='text-[12px]'>{row.gender}</div></TableCell>
                        <TableCell><div className='text-[12px]'>{row.medicalCondition}</div></TableCell>
                        <TableCell><div className='text-[12px]'>{row.contactNumber}</div></TableCell>
                        <TableCell><div className='text-[12px]'>{row.address}</div></TableCell>
                        <TableCell style={{display: 'flex', gap: 5}} >
                          <div
                            variant="contained"
                            style={{ minWidth: 'unset' }}
                            className='flex items-center justify-center cursor-pointer rounded-full w-[30px] h-[30px] relative '>
                            <HiOutlineDotsHorizontal
                              className="text-[25px] text-[#7e8299] cursor-pointer "
                              onClick={() => toggleEditMenu(row.patientId)}
                            />
                            {id === row.patientId && openEditMenu ? (
                              <div className="shadow-lg px-6 py-4 rounded-lg border absolute right-8 top-4 bg-white text-[14px] text-left grid gap-4 w-[150px] z-50 ">
                                <p onClick={() => handleView(row.patientId) }>View</p>
                                <p onClick={() => handleEdit(row.patientId)}>Edit</p>
                                <p onClick={() => handleDelete(row.patientId)}>Delete</p>
                              </div>
                            ) : null}
                          </div>
                        </TableCell>
                      </TableRow>
                    )) : currentPatientList.map((row) => (
                      <TableRow key={row.id} className=''>
                        <TableCell><div className='text-[12px]'>{row.id}</div></TableCell>
                        <TableCell><div className='text-[12px]'>{row.dateCheckedIn} {row.time}</div></TableCell>
                        <TableCell><div className='text-[12px]'>{row.name}</div></TableCell>
                        <TableCell><div className='text-[12px]'>{row.doctorAssigned}</div></TableCell>
                        <TableCell><div className='text-[12px]'>{row.disease}</div></TableCell>
                        <TableCell><div className='text-[12px]'>{row.status}</div></TableCell>
                        <TableCell><div className='text-[12px]'>{row.roomNo}</div></TableCell>
                        <TableCell style={{display: 'flex', gap: 5}} >
                          <div
                            variant="contained"
                            style={{ minWidth: 'unset' }}
                            className='flex items-center justify-center cursor-pointer rounded-full w-[30px] h-[30px] relative '>
                            <HiOutlineDotsHorizontal
                              className="text-[25px] text-[#7e8299] cursor-pointer "
                              onClick={() => toggleEditMenu(row.id)}
                            />

                            {id === row.id && openEditMenu ? (
                              <div className="shadow-lg px-6 py-4 rounded-lg border absolute right-8 top-4 bg-white text-[14px] text-left grid gap-4 w-[150px] z-50 ">
                                <p onClick={() => handleView(row.id) }>View</p>
                                <p onClick={() => handleEdit(row.id)}>Edit</p>
                                <p onClick={() => handleDelete(row.id)}>Delete</p>
                              </div>
                            ) : null}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              {currentPatientList ? (
                <div className='bg-[#e4e6ef] text-text px-4 py-4 flex justify-between items-center rounded-b-lg text-[12px] w-[100%] '>
                  <p>Showing {currentPage} to {patientPerPage} of {patients.length} enteries</p>

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
                        width: '30px',
                        height: '35px',
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
      </div>
    </div>
  )
}

export default PatientsList