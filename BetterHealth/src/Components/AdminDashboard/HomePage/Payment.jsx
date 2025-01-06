import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import Sidebar from '../sidebar';
import Navbar from '../navbar';
import { Link } from 'react-router-dom';
import { GoHome } from "react-icons/go";

const Payment = () => {

   const [formData, setFormData] = useState({
     name: "",
     contact: "",
     insuranceDetails: "",
     visitType: "",
   });
   const navigate = useNavigate();

   const handleInputChange = (e) => {
     const { name, value } = e.target;
     setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     // Save the data (e.g., API call to backend)
     console.log("Patient Registered:", formData);
     navigate("/service-provision");
   };


  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <section className="m-4 space-y-8 ">
            {/* Page header */}
            <div className="flex gap-x-5 lg:px-0 md:px-8 md:ml-64 lg:ml-0">
              <h1 className="text-2xl">Payment</h1>
              <div className="flex gap-2 items-center">
                <Link to="/admin/payment">
                  <GoHome />
                </Link>
                <p className="font-thin"> - Payment</p>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
              <h2 className="text-2xl font-bold mb-4">Patient Registration</h2>
              <form onSubmit={handleSubmit}>
                <label className="block mb-2">Name:</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 border rounded mb-4"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <label className="block mb-2">Contact:</label>
                <input
                  type="text"
                  name="contact"
                  className="w-full p-2 border rounded mb-4"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                />
                <label className="block mb-2">Insurance Details:</label>
                <input
                  type="text"
                  name="insuranceDetails"
                  className="w-full p-2 border rounded mb-4"
                  value={formData.insuranceDetails}
                  onChange={handleInputChange}
                />
                <label className="block mb-2">Visit Type:</label>
                <select
                  name="visitType"
                  className="w-full p-2 border rounded mb-4"
                  value={formData.visitType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Outpatient">Outpatient</option>
                  <option value="Inpatient">Inpatient</option>
                  <option value="Emergency">Emergency</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded"
                >
                  Register
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Payment