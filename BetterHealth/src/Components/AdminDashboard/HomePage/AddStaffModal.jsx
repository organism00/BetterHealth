import React,{useState} from "react";
import axios from 'axios';
import { useToast } from "../../../Components/Loaders/ToastContext";
import WaitingLoader from '../../../Components/Loaders/WaitingLoader';

const AddDoctorModal = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [stateOfOrigin, setStateOfOrigin] = useState('');
    const [lga, setLga] = useState('');
    const [nationality, setNationality] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [yearsOfExperience, setYearsOfExperience] = useState('');
    const [joiningDate, setJoiningDate] = useState('');
    const [department, setDepartment] = useState('');

    const { notifySuccess, notifyError, startWaitingLoader, stopWaitingLoader } = useToast();

    const handleAddDoctor = async (e) => {
        startWaitingLoader()
        e.preventDefault();
        const doctor = {firstName, lastName, email, address, stateOfOrigin, lga, nationality, maritalStatus, phoneNo, specialty, licenseNumber, yearsOfExperience, joiningDate, department};

        try {
            const res = await axios.post('https://hms-w4kw.onrender.com/api/Doctor/AddDoctor', doctor);
            console.log(res.data);
            stopWaitingLoader()
            notifySuccess(res.data.responseMessage);

            // Clear form input
            setFirstName('');
            setLastName('');
            setEmail('');
            setAddress('');
            setStateOfOrigin('');
            setLga('');
            setNationality('');
            setMaritalStatus('');
            setPhoneNo('');
            setSpecialty('');
            setLicenseNumber('');
            setYearsOfExperience('');
            setJoiningDate('');
            setDepartment('');
        } catch (error) {
            console.log(error.response);
            stopWaitingLoader()
            notifyError(error.response.data.responseMessage);
        }
    }

  return (
    <>
      <WaitingLoader />
      <form action="submit" className="bg-white space-y-2">
        <div className=" mt-5 h-auto w-[85vw] md:w-[40vw] px-4 md:px-10 md:overflow-x-auto overflow-x-auto rounded-2xl mx-auto">
          <div className="w-[100%] lg:gap-x-12 lg:gap-y-6 flex flex-col gap-y-7 gap-x-2">
            <input
              type="text"
              placeholder="First Name"
              className="border border-stone-500 p-2 rounded-md outline-violet-500"
              required
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Residential Address"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name="address"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder="State Of Origin"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name="stateOfOrigin"
              id="stateOfOrigin"
              value={stateOfOrigin}
              onChange={(e) => setStateOfOrigin(e.target.value)}
            />
            <input
              type="text"
              placeholder="LGA"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name="lga"
              id="lga"
              value={lga}
              onChange={(e) => setLga(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nationality"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name="nationality"
              id="nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            />
            <input
              type="text"
              placeholder="Marital Status"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name="maritalStatus"
              id="maritalStatus"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone No"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name="phoneNo"
              id="phoneNo"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Specialization"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name="speciality"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            />
            <input
              type="text"
              placeholder="License Number"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name="licenseNumber"
              id="licenseNumber"
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
            />
            <input
              type="number"
              placeholder="Years of experience"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name="yearsOfExperience"
              id="yearsOfExperience"
              value={yearsOfExperience}
              onChange={(e) => setYearsOfExperience(e.target.value)}
            />
            <input
              type="date"
              title="Joining Date"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name="joiningDate"
              id="joiningDate"
              value={joiningDate}
              onChange={(e) => setJoiningDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="Department"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name="department"
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
            <button
              className="bg-violet-500 w-60 lg:w-1/4 p-3 hover:bg-violet-600 text-white rounded-md place-self-end text-xl col-span-2"
              type="submit"
            >
              {" "}
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};



const AddNurseModal = () => {
  // States
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [licenseNo, setLicenseNo] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [stateOfOrigin, setStateOfOrigin] = useState("");
  const [nationality, setNationality] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [certification, setCertification] = useState("");
  const [lga, setLga] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  // const navigate = useNavigate();
  const { notifySuccess, notifyError, startWaitingLoader, stopWaitingLoader } = useToast();

  const handleSubmit = async (e) => {
    startWaitingLoader()
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://hms-w4kw.onrender.com/api/Nurse/AddNurse",
        {
          firstname,
          lastname,
          licenseNo,
          specialization,
          phoneNo,
          email,
          address,
          stateOfOrigin,
          nationality,
          joinDate,
          departmentId,
          yearsOfExperience,
          certification,
          lga,
          maritalStatus,
        }
      );

      console.log(response.data);
      notifySuccess(response.data.responseMessage);
      stopWaitingLoader();

      setFirstname("");
      setLastname("");
      setLicenseNo("")
      setSpecialization("");
      setPhoneNo("");
      setEmail("");
      setAddress("");
      setStateOfOrigin("");
      setNationality("");
      setJoinDate("");
      setDepartmentId("");
      setYearsOfExperience("");
      setCertification("");
      setLga("");
      setMaritalStatus("");
    } catch (error) {
      console.error(error);
      notifyError(error.response.data.responseMessage);
      stopWaitingLoader();
    }
  };
  
    return (
      <>
        <WaitingLoader />
        <form action="submit" className="space-y-2">
          <div className="lg:grid lg:grid-cols-2  lg:gap-x-12 lg:gap-y-6 flex flex-col gap-y-7 md:grid grid-cols-2 gap-x-2">
            <input
              type="text"
              placeholder="First Name"
              className="border border-stone-500 p-2 rounded-md outline-violet-500"
              required
              name={firstname}
              value={firstname}
              id="firstname"
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name={lastname}
              value={lastname}
              id="lastname"
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="License Number"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name={licenseNo}
              value={licenseNo}
              id="licenseNo"
              onChange={(e) => {
                setLicenseNo(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Specialization"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name={specialization}
              value={specialization}
              id="specialization"
              onChange={(e) => {
                setSpecialization(e.target.value);
              }}
            />

            <input
              type="text"
              placeholder="Phone No"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name={phoneNo}
              value={phoneNo}
              id="phoneNo"
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }}
            />

            <input
              type="email"
              placeholder="Email"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name={email}
              value={email}
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              type="text"
              placeholder="Address"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name={address}
              value={address}
              id="address"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />

            <input
              type="text"
              placeholder="State Of Origin"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name={stateOfOrigin}
              value={stateOfOrigin}
              id="stateOfOrigin"
              onChange={(e) => {
                setStateOfOrigin(e.target.value);
              }}
            />

            <input
              type="text"
              placeholder="Nationality"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name={nationality}
              value={nationality}
              id="nationality"
              onChange={(e) => {
                setNationality(e.target.value);
              }}
            />

            <input
              type="date"
              title="Joining Date"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name={joinDate}
              value={joinDate}
              onChange={(e) => {
                setJoinDate(e.target.value);
              }}
            />

            <input
              type="number"
              placeholder="Department-Id"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name={departmentId}
              value={departmentId}
              onChange={(e) => {
                setDepartmentId(e.target.value);
              }}
            />

            <input
              type="number"
              placeholder="Years of experience"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name={yearsOfExperience}
              value={yearsOfExperience}
              id="yearsOfExperience"
              onChange={(e) => {
                setYearsOfExperience(e.target.value);
              }}
            />

            <input
              type="text"
              placeholder="Certification"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name={certification}
              value={certification}
              id="yearsOfExperience"
              onChange={(e) => {
                setCertification(e.target.value);
              }}
            />

            <input
              type="text"
              placeholder="LGA"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name={lga}
              value={lga}
              id="lga"
              onChange={(e) => {
                setLga(e.target.value);
              }}
            />

            <input
              type="text"
              placeholder="Marital Status"
              className="border border-stone-500 p-2 rounded-md  outline-violet-500 "
              name={maritalStatus}
              value={maritalStatus}
              id="maritalStatus"
              onChange={(e) => {
                setMaritalStatus(e.target.value);
              }}
            />
            <button
              type="submit"
              className="bg-violet-500  w-60 lg:w-1/4 p-3 hover:bg-violet-600 text-white rounded-md place-self-end text-xl col-span-2 "
            >
              Submit
            </button>
          </div>
        </form>
      </>
    );
}

const AddLabTechniciansModal = () => {
  return (
    <>
      <form action="submit" className="space-y-2">
        <h1 className="text-2xl font-medium">Add New {staffRole}</h1>
        
      </form>
    </>
  );
};


const AddPharmarcistModal = () => {
    return (
      <>
        <form action="submit" className="space-y-2">
          <h1 className="text-2xl font-medium">Add New {staffRole}</h1>
          
        </form>
      </>
    );
}

const AddFrontDeskOfficerModal = () => {
    return (
      <>
        <form action="submit" className="space-y-2">
          <h1 className="text-2xl font-medium">Add New {staffRole}</h1>
          
        </form>
      </>
    );
}






export {AddDoctorModal, AddNurseModal}

