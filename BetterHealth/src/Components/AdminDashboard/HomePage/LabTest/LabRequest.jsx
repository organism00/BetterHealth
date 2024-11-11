import React from 'react'


const LabRequest = () => {
  return (
    <>
     <div className=''>
      <form action="" className='h-[500px]  w-[1200px] shadow-lg border border-stone-200 rounded-2xl ml-[350px] mt-[180px] py-5 '>
        <input type="text" placeholder='Full Name'  className='border border-stone-500 p-2 rounded-md outline-violet-500 ml-[57px] mt-5 w-80'/>
        <input type="text" placeholder='Patient ID'  className='border border-stone-500 p-2 rounded-md outline-violet-500 ml-[57px] mt-5 w-80'/>
        <input type="text" placeholder='Gender'  className='border border-stone-500 p-2 rounded-md outline-violet-500 ml-[57px] mt-5 w-80'/>
        <input type="text" placeholder='Referring Physician Name'  className='border border-stone-500 p-2 rounded-md outline-violet-500 ml-[57px] mt-5 w-80'/>
        <input type="text" placeholder='Physician ID'  className='border border-stone-500 p-2 rounded-md outline-violet-500 ml-[57px] mt-5 w-80'/>
        <input type="text" placeholder='Contact Number'  className='border border-stone-500 p-2 rounded-md outline-violet-500 ml-[57px] mt-5 w-80'/>
        <input type="text" placeholder='Department'  className='border border-stone-500 p-2 rounded-md outline-violet-500 ml-[57px] mt-5 w-80'/>
        <input type="text" placeholder='Date oF Request'  className='border border-stone-500 p-2 rounded-md outline-violet-500 ml-[57px] mt-5 w-80'/>
        <input type="text" placeholder='Test Completion'  className='border border-stone-500 p-2 rounded-md outline-violet-500 ml-[57px] mt-5 w-80'/>

        <select name="Priority Level" id="Priority Level" className='border border-stone-500 p-2 rounded-md outline-violet-500  ml-[57px] mt-5 w-80 text-gray-400'>
          <option value="Priority Level">Priority Level</option>
          <option value="Routine">Routine</option>
          <option value="Urgent">Urgent</option>
          <option value="Stat (immediate)">Stat (immediate)</option>
        </select>

        <select name="Test Type" id="Test Type" className='border border-stone-500 p-2 rounded-md outline-violet-500  ml-[57px] mt-5 w-80 text-gray-400'>
          <option value="Test Type">Test Type</option>
          <option value="Blood Count">Blood Count</option>
          <option value="Blood Tying">Blood Tying</option>
          <option value="Coagulation">Coagulation</option>
          <option value="Others">Others</option>
        </select>

        <select name="Biochemistry" id="Biochemistry" className='border border-stone-500 p-2 rounded-md outline-violet-500  ml-[57px] mt-5 w-80 text-gray-400'>
          <option value="Biochemistry">Biochemistry</option>
          <option value="Blood Glucose">Blood Glucose</option>
          <option value="Lipid Profile">Lipid Profile</option>
          <option value="Liver Test">Liver Test</option>
          <option value="Renal Test">Renal Test</option>
        </select>

        <select name="Microbiology" id="Microbiology" className='border border-stone-500 p-2 rounded-md outline-violet-500  ml-[57px] mt-5 w-80 text-gray-400'>
          <option value="Microbiology">Microbiology</option>
          <option value="Urine Culture">Urine Culture</option>
          <option value="Sperm Culture">Sperm Culture</option>
          <option value="Blood Culture">Blood Culture</option>
          <option value="Others">Others</option>
        </select>

        <select name="Immunology Tests" id="Immunology Tests" className='border border-stone-500 p-2 rounded-md outline-violet-500  ml-[57px] mt-5 w-80 text-gray-400'>
          <option value="Immunology Tests">Immunology Tests</option>
          <option value="Covid-19 PCR">Covid-19 PCR</option>
          <option value="HIV Test">HIV Test</option>
          <option value="Hepatitis Panel">Hepatitis Panel</option>
          <option value="Others">Others</option>
        </select>

        <select name="Sample Type" id="Sample Type" className='border border-stone-500 p-2 rounded-md outline-violet-500  ml-[57px] mt-5 w-80 text-gray-400'>
          <option value="Sample Type">Sample Type</option>
          <option value="Blood">Blood</option>
          <option value="Urine">Urine</option>
          <option value="Stool">Stool</option>
          <option value="Saliva ">Saliva</option>
          <option value="Others">Others</option>
        </select>

        <input type="text" placeholder='Recieved By'  className='border border-stone-500 p-2 rounded-md outline-violet-500 ml-[57px] mt-5 w-80'/>
        <input type="text" placeholder='Date & Time'  className='border border-stone-500 p-2 rounded-md outline-violet-500 ml-[57px] mt-5 w-80'/>
        <input type="text" placeholder='Lab Test Number'  className='border border-stone-500 p-2 rounded-md outline-violet-500 ml-[57px] mt-5 w-80'/>
        <input type="text" placeholder='Additional Notes/Conditions'  className='border border-stone-500 p-2  rounded-md outline-violet-500 ml-[57px] mt-5 w-80'/>
        

        



        
       









      </form>
     </div>
    
    
    
    </>
  )
}

export default LabRequest