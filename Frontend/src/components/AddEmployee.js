import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

    const AddEmployee = () => {

     const navigate= useNavigate();

  const [employee, setEmployee] = useState({
    id:"",
    firstname:"",
    lastname:"",
    email:"",
  });
 const [message, setMessage] = useState({
    text: "",
    type: "",
  });

  const saveEmployee = (e) => {
    e.preventDefault();

    EmployeeService.saveEmployee(employee)
      .then((response) => {
        setMessage({
          text: "Employee saved successfully!",
          type: "success"
        });
        console.log(response);
      })
      .catch((error) => {
        setMessage({
          text: "Failed to save employee!",
          type: "error"
        });
        
          console.log(error);
      });
  };
  const clearEmployee=()=>{
    setEmployee({
    id:"",
    firstname:"",
    lastname:"",
    email:"",
    });
  };

  const handleChange=(e)=>{
    const value=e.target.value;
    setEmployee({...employee,[e.target.name]:value});
  };

  return (
   <div>
    
    <div className=' max-w-2xl mx-auto mt-7'>
      <button 
      onClick={()=>{navigate("/employeeList")}}
      className="rounded px-6 py-2 text-white font-semibold bg-slate-500">
        Employee List</button>
      </div>
   <div className='flex max-w-2xl mx-auto shadow border-b mt-3 bg-gray-50 pl-11'>
      

      <div className='px-8 py-8'>

        {message.text && (
          <h3
            className={
              message.type === "success"
                ? "text-green-500 font-bold mb-2 "
                : "text-red-500 font-bold mb-2"
            }
          >
            {message.text}
          </h3>
        )}

        <div className='font-thin text-2xl tracking-wider'>
            <h1>Add New Employee</h1>
        </div>
        
        <div className='items-center justify-content-center h-14 w-full my-4'>
            <label className='block text-gray-600 text-sm font-font-normal'>First Name</label>
            <input type='text' 
            className='h-10 w-96 border mt-2 px-2 py-2 '
            name="firstname"
            value={employee.firstname}
            onChange={(e)=>handleChange(e)}
             required></input>
        </div>

         <div className='items-center justify-content-center h-14 w-full my-4'>
            <label className='block text-gray-600 text-sm font-font-normal'>Last Name</label>
            <input type='text' 
            className='h-10 w-96 border mt-2 px-2 py-2 '
            name="lastname"
            value={employee.lastname}
            onChange={(e)=>handleChange(e)}
            required></input>
        </div>

        <div className='items-center justify-content-center h-14 w-full my-4'>
            <label className='block text-gray-600 text-sm font-font-normal'> Email</label>
            <input type='email' 
            className='h-10 w-96 border mt-2 px-2 py-2 '
            name="email"
            value={employee.email}
            onChange={(e)=>handleChange(e)}
            required></input>
        </div>

        <div className='items-center justify-content-center h-14 w-full my-4 space-x-4 pt-4'>
            <button onClick={saveEmployee}
             className='rounded text-white font-semibold bg-green-400 py-2 px-5 hover:bg-green-800'>Save</button>
           <button onClick={clearEmployee}
           className='rounded text-white font-semibold bg-red-400 hover:bg-red-800 px-5 py-2'>Clear</button>
       </div>

      </div>
</div>
    </div>
    
  )
}

export default AddEmployee;
