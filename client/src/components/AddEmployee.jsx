import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {

  const navigate = useNavigate();

  const [employee,setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value});
  };

  const saveEmployee = (e) => {
    e.preventDefault(); 
    EmployeeService.saveEmployee(employee).then((response) => {
      console.log(response);
      navigate("/employeeList");   
    })
    .catch((error) => {
      console.log(error);
    })

  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    });
  };
  
  return (
    <div className='max-w-xl mx-auto mt-20 shadow border'>

      <div>
        <h3 
          onClick={() => navigate("/employeeList")}
          className='underline p-5 cursor-pointer text-gray-500'> Back to home
        </h3>
      </div>

      <div className='flex flex-col content-center items-center p-8'>

        <div className='font-thin text-2xl tracking-wider'>
          <h1>Add New Employee</h1>
        </div>

        <form onSubmit={saveEmployee}>

          <div className='items-center justify-center h-14  my-6'> 
            <label className='block text-gray-600 text-sm font-normal'>First Name</label>
            <input type='text' name="firstName" value={employee.firstName} onChange={(e) => handleChange(e)} 
            className='h-10 w-96 border mt-2 p-2' required />
          </div>

          <div className='items-center justify-center h-14 my-6'> 
            <label className='block text-gray-600 text-sm font-normal'>Last Name</label>
            <input type='text' 
            name="lastName" 
            value={employee.lastName} 
            onChange={(e) => handleChange(e)} 
            className='h-10 w-96 border mt-2 p-2'
            required />
          </div>

          <div className='items-center justify-center h-14 my-6'> 
            <label className='block text-gray-600 text-sm font-normal'>Email Address</label>
            <input type='email' 
            name="emailId" 
            value={employee.emailId} 
            onChange={(e) => handleChange(e)} 
            className='h-10 w-96 border mt-2 p-2'
            required  />
          </div>

          <div className='items-center justify-center h-14 my-4 space-x-4 pt-4'> 
            <button 
            
            className='rounded text-white font-semibold bg-green-600 py-2 px-6 hover:bg-green-800 active:opacity-70'>Save</button>

            <button 
            onClick={reset}
            className='rounded text-white font-semibold bg-red-600 py-2 px-6 hover:bg-red-800 active:opacity-70'>Clear</button>
          </div>

        </form>

      </div>
    </div>
  )
}

export default AddEmployee