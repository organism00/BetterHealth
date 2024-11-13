import React, { useState } from 'react';
import axios from 'axios';
import SideBar from '../../SideBar';
import Navbar from '../../Navbar';
import { useToast } from '../../Loaders/ToastContext';
import WaitingLoader from '../../Loaders/WaitingLoader';

function OnboardPatient() {
  const {startWaitingLoader, stopWaitingLoader, notifyError, notifySuccess} = useToast();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [genotype, setGenotype] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [registerDate, setRegisterDate] = useState('');
  const [password, setPassword] = useState('');

  const registerPatient = async (e) => {
    e.preventDefault()
    startWaitingLoader()

    try{
      const res = await axios.post('https://hms-w4kw.onrender.com/api/Patient/PatientOnboarding', {
        firstname, lastname, address, gender, phone, bloodGroup, genotype, email, age, contactNumber, emergencyContact, registerDate, password
      })
      console.log(res.data)
      stopWaitingLoader()
      // notifySuccess(res.data)
    } catch(error){
      console.log(error.response.data.title || error.response.data.responseMessage)
      notifyError(error.response.data.title || error.response.data.responseMessage)
      stopWaitingLoader()
    }
  }

  return (
    <div className="lg:grid lg:grid-cols-[16rem_1fr] z-0">
      <WaitingLoader/>
      <SideBar />
      <main className="col-start-2 h-full w-full md:w-screen lg:w-full lg:mt-0 md:mt-0">
        <Navbar />
        <main className="col-start-2 h-full w-full md:w-screen lg:w-full lg:mt-0 md:mt-0">
          <form className='flex flex-col my-24 ' action="submit" onSubmit={registerPatient}>
            <div className='w-[100%] mb-10 mt-5 h-auto lg:w-full pt-6  pb-14 md:overflow-x-auto overflow-x-auto  shadow-lg border border-stone-200 rounded-2xl mx-auto px-5 space-y-4'>
              <h1 className='text-2xl my-6'>{"Enter Patient's Information"}</h1>
              <div className='lg:grid lg:grid-cols-2  lg:gap-x-6 lg:gap-y-6 flex flex-col gap-y-7 md:grid grid-cols-2 gap-x-2' > 
                <input type="text" placeholder='First Name' className='border border-stone-500 p-2 rounded-md outline-violet-500'
                  required onChange={(e) => setFirstname(e.target.value)}/>
                <input type="text" placeholder='Last Name' className='border border-stone-500 p-2 rounded-md  outline-violet-500 '
                  required onChange={(e) => setLastname(e.target.value)}/>
                <input type="text" placeholder='Address' className='border border-stone-500 p-2 rounded-md  outline-violet-500 '
                  required onChange={(e) => setAddress(e.target.value)}/>
                <select name="gender" id="gender" className='border border-stone-500 p-2 rounded-md  outline-violet-500'
                  onChange={(e) => setGender(e.target.value)}>
                  <option value="Select Gender" selected disabled>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <input type="text" placeholder='Phone' className='border border-stone-500 p-2 rounded-md  outline-violet-500 '
                  onChange={(e) => setPhone(e.target.value)}/>
                <select name="bloodGroup" id="bloodGroup" className='border border-stone-500 p-2 rounded-md  outline-violet-500 '
                  required onChange={(e) => setBloodGroup(e.target.value)}>
                  <option value="Select Blood Group" selected disabled>Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
                <select name="genotype" id="genotype" className='border border-stone-500 p-2 rounded-md  outline-violet-500 '
                  required onChange={(e) => setGenotype(e.target.value)}>
                  <option value="Select Genotype" selected disabled>Select Genotype</option>
                  <option value="AA">AA</option>
                  <option value="AB">AB</option>
                  <option value="AO">AO</option>
                  <option value="BB">BB</option>
                  <option value="BO">BO</option>
                  <option value="OO">OO</option>
                </select>
                <input type="email" placeholder='Email' className='border border-stone-500 p-2 rounded-md  outline-violet-500 '
                  required onChange={(e) => setEmail(e.target.value)}/>
                <input type="number" placeholder='Age' className='border border-stone-500 p-2 rounded-md  outline-violet-500 '
                  required onChange={(e) => setAge(e.target.value)}/>
                <input type="text" placeholder='Contact Number' className='border border-stone-500 p-2 rounded-md  outline-violet-500 '
                  required onChange={(e) => setContactNumber(e.target.value)}/>
                <input type="text" placeholder='Emergency Contact Number' className='border border-stone-500 p-2 rounded-md  outline-violet-500 '
                  required onChange={(e) => setEmergencyContact(e.target.value)}/>
                <input type="date" placeholder='Register Date' className='border border-stone-500 p-2 rounded-md  outline-violet-500 '
                  required onChange={(e) => setRegisterDate(e.target.value)}/>
                <input type="password" placeholder='Password' className='border border-stone-500 p-2 rounded-md  outline-violet-500 '
                  required autoComplete='password' onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <button type='submit' className='bg-violet-500 w-60 lg:w-1/4 p-4 mb-4 text-white rounded-md self-end text-xl'>Register Patient</button>
            </div>
          </form>
        </main>
      </main>
    </div>
  )
}

export default OnboardPatient