import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { patientData as initialPatientData } from "../../HospitalDashboard/Patients/PatientData";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// Icons
import { GoHome } from "react-icons/go";
import { TbArrowsSort } from "react-icons/tb";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoFilter } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import {AddDoctorModal} from "./AddStaffModal";


const StaffManagement = () => {
  const navigate = useNavigate();

  // Fetch all staff data
  const [allStaffData, setAllStaffData] = useState([]);
  
  console.log(allStaffData);
  useEffect(() => {
    const fetchMultipleData = async () => {
      try {
        const [doctorRes, nurseRes, pharmacistRes, staffRes] = await Promise.all([
          axios.get('https://hms-w4kw.onrender.com/api/Doctor/GetDoctors'),
          axios.get('https://hms-w4kw.onrender.com/api/Nurse/GetAllNurses'),
          axios.get('https://hms-w4kw.onrender.com/api/Pharmacist/GetPharmacists'),
          axios.get('https://hms-w4kw.onrender.com/api/Staff/GetAllStaffs')
        ]);

        setAllStaffData([...doctorRes.data.$values, ...nurseRes.data.data.$values, ...pharmacistRes.data.$values, ...staffRes.data.$values]);
      } catch (error) {
          console.error("Error fetching data:", error);
      }
    };
    
    fetchMultipleData();  
  }, []);

  // Pagination
  const [staffPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [allStaff, setAllStaff] = useState(initialPatientData);

  const indexOfLastPatient = currentPage * staffPerPage;
  const indexOfFirstPatient = indexOfLastPatient - staffPerPage;
  const currentPatientList = allStaff.slice(
    indexOfFirstPatient,
    indexOfLastPatient
  );

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(allStaff.length / staffPerPage); i++) {
    pageNumber.push(i);
  }

  const [openFrontDeskOfficerModal, setOpenFrontDeskOfficerModal] = useState(false);
  const [openDoctorModal, setOpenDoctorModal] = useState(false);
  const [openNurseModal, setOpenNurseModal] = useState(false);
  const [openLabTechniciansModal, setOpenLabTechniciansModal] = useState(false);
  const [openPharmarcistModal, setOpenPharmarcistModal] = useState(false);
  const [staffRole, setStaffRole] = useState("Doctor");


  const handleEditModal = (role) => {
    setStaffRole(role)
    if(role === "Doctor") {
      setOpenDoctorModal(true)
    } 
    else if(role === "Nurse") {
      setOpenNurseModal(true)
    } 
    else if (role === "Lab technician") {
      setOpenLabTechniciansModal(true);
    } else if (role === "Pharmarcist") {
      setOpenPharmarcistModal(true);
    } else if (role === "Front desk officer") {
      setOpenFrontDeskOfficerModal(true);
    }
    console.log(role)
  }


  const handleDelete = (id) => {
    const newPatients = allStaff.filter((patient) => patient.id !== id);
    setAllStaff(newPatients);
  };

  const handleEdit = (id) => {
    navigate("/editpatient", { state: id });
  };

  const handleView = (id) => {
    navigate("/patientdetails", { state: id });
  };

  // Edit menu
  const [openEditMenu, setOpenEditMenu] = useState(false);
  const [id, setId] = useState(null);

  const toggleEditMenu = (item) => {
    setOpenEditMenu(!openEditMenu);
    setId(item);
  };

  return (
    <>
      <div className="lg:flex">
        <Sidebar />

        <Navbar />
        <section className="w-full lg:w-[78vw] lg:ml-[18vw] z-0 md:pt-20 pb-12 lg:py-8 px-4 lg:px-4">
          <div className="mt-20">
            <div className="flex my-10 justify-between">
              <div className="flex gap-x-5 lg:px-0 md:px-8 md:ml-64 lg:ml-0">
                <h1 className="text-2xl">Staffs</h1>
                <div className="flex gap-2 items-center">
                  <Link to="/admin/staffManagement">
                    <GoHome />
                  </Link>
                  <p className="font-thin"> - Staff Management</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col space-y-5 lg:flex-row md:items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <p className="text-[14px] font-semibold">Add New Staff</p>
                  <select
                    name=""
                    id=""
                    onChange={(role) => handleEditModal(role.target.value)}
                    className="border px-4 py-2"
                  >
                    <option value="Select role" disabled defaultValue>
                      Select Staff Role
                    </option>
                    <option value="Doctor">Doctor</option>
                    <option value="Nurse">Nurse</option>
                    <option value="Pharmacist">Pharmacist</option>
                    <option value="Lab technician">Lab Technicians</option>
                    <option value="Front desk officer">
                      Front Desk Officer
                    </option>
                  </select>
                </div>

                {/* Modal for Doctor */}
                {openDoctorModal && (
                  <div className="fixed overflow-auto top-0 left-0 w-[100%] h-[100%] flex pt-[113vw] lg:pt-[35vw] items-center justify-center z-50 bg-[#00000066] ">
                    <div className="relative bg-white p-4">
                      <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-medium">
                          Add New {staffRole}
                        </h1>

                        <button
                          className="bg-primary rounded-xl text-white p-2 text-[30px] shadow-lg right-4 top-4 "
                          onClick={() => setOpenDoctorModal(false)}
                        >
                          <IoMdCloseCircleOutline />
                        </button>
                      </div>

                      <AddDoctorModal />
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <input
                    type="text"
                    className=" w-[78vw] md:w-[350px] text-[14px] border py-2 px-4 rounded"
                    placeholder="Search"
                  />
                  <button className="bg-[#5156be] text-white px-4 rounded ">
                    <FaSearch />
                  </button>
                </div>
              </div>

              <div className="cursor-pointer my-6 md:my-6 flex justify-end">
                <div className="flex gap-x-4 items-center">
                  <form action="">
                    <select
                      name=""
                      id=""
                      className="border py-1 px-2 text-[14px] rounded-md "
                    >
                      <option value="filter" disabled defaultValue>Filter by role</option>
                      <option value="doctor">Doctor</option>
                      <option value="nurse">Nurse</option>
                      <option value="pharmacist">Pharmacist</option>
                      <option value="labtechnician">Lab Technicians</option>
                      <option value="frontdeskoficer">Front Desk Officer</option>
                    </select>
                  </form>
                  <div className="text-[20px]">
                    <IoFilter />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <TableContainer component={Paper} style={{ width: "100%" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-2 text-[12px] leading-5 font-bold text-primary ">
                          Patient <br /> ID <TbArrowsSort />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-[12px] leading-5 font-bold text-primary ">
                          {" "}
                          Date
                          <br />
                          Checked In <TbArrowsSort />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-[12px] leading-5 font-bold text-primary ">
                          Patient <br /> Name <TbArrowsSort />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-[12px] leading-5 font-bold text-primary ">
                          Doctor <br /> Assigned <TbArrowsSort />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-[12px] leading-5 font-bold text-primary ">
                          Disease <TbArrowsSort />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-[12px] leading-5 font-bold text-primary ">
                          Status <TbArrowsSort />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-[12px] leading-5 font-bold text-primary ">
                          Room <br />
                          No <TbArrowsSort />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-[12px] leading-5 font-bold text-primary ">
                          Settings <TbArrowsSort />
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {currentPatientList.map((row) => (
                      <TableRow key={row.id} className="">
                        <TableCell>
                          <div className="text-[12px]">{row.id}</div>
                        </TableCell>
                        <TableCell>
                          <div className="text-[12px]">
                            {row.dateCheckedIn} {row.time}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-[12px]">{row.name}</div>
                        </TableCell>
                        <TableCell>
                          <div className="text-[12px]">
                            {row.doctorAssigned}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-[12px]">{row.disease}</div>
                        </TableCell>
                        <TableCell>
                          <div className="text-[12px]">{row.status}</div>
                        </TableCell>
                        <TableCell>
                          <div className="text-[12px]">{row.roomNo}</div>
                        </TableCell>
                        <TableCell style={{ display: "flex", gap: 5 }}>
                          <div
                            variant="contained"
                            style={{ minWidth: "unset" }}
                            className="flex items-center justify-center cursor-pointer rounded-full w-[30px] h-[30px] relative "
                          >
                            <HiOutlineDotsHorizontal
                              className="text-[25px] text-[#7e8299] cursor-pointer "
                              onClick={() => toggleEditMenu(row.id)}
                            />

                            {id === row.id && openEditMenu ? (
                              <div className="shadow-lg px-6 py-4 rounded-lg border absolute right-8 top-4 bg-white text-[14px] text-left grid gap-4 w-[150px] z-50 ">
                                <p onClick={() => handleView(row.id)}>View</p>
                                <p onClick={() => handleEdit(row.id)}>Edit</p>
                                <p onClick={() => handleDelete(row.id)}>
                                  Delete
                                </p>
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
                <div className="bg-[#e4e6ef] text-text px-4 py-4 flex justify-between items-center rounded-b-lg text-[12px] w-[100%] ">
                  <p>
                    Showing {currentPage} to {staffPerPage} of{" "}
                    {allStaff.length} enteries
                  </p>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`${
                        currentPage === 1 ? "opacity-40" : "opacity-100"
                      }`}
                    >
                      Previous
                    </button>
                    {pageNumber.map((number, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPage(number)}
                        style={
                          currentPage === number
                            ? {
                                borderRadius: "5px",
                                color: "white",
                                fontWeight: "bold",
                                width: "30px",
                                height: "35px",
                                backgroundColor: "#5156be",
                                transition: "all 0.6s ease",
                              }
                            : null
                        }
                      >
                        {number}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === pageNumber.length}
                      className={`${
                        currentPage === pageNumber.length
                          ? "opacity-40"
                          : "opacity-100"
                      }`}
                    >
                      Next
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StaffManagement;
