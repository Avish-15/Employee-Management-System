import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployee = () => {
    const {id}=useParams();
    const [employee, setEmployee] = useState({
        id:id,
        firstname:"",
        lastname:"",
        email:"",
    });


  const handleChange=(e)=>{
    const value=e.target.value;
    setEmployee({...employee,[e.target.name]:value});
  };


const navigate=useNavigate();

    const updateEmployee=(e)=>{
        e.preventDefault();
        EmployeeService.updateEmployee(employee,id)
        .then((response)=>{
        navigate("/employeeList");
        }).catch((error)=>{
            console.log(error);
        });
    }

useEffect(() => {
    const fetchData=async()=>{
        
        try {
            const response=await EmployeeService.getEmployeebyId(id);
            setEmployee(response.data);
          } catch (error) {
            console.log(error);
          }
          
      };
    fetchData();
}, []);


  return (
    <div>

        <div className='flex max-w-2xl mx-auto shadow border-b mt-3 bg-gray-50 pl-11'>
      

      <div className='px-8 py-8'>

      
        <div className='font-thin text-2xl tracking-wider'>
            <h1>Update Employee</h1>
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
            <button 
            onClick={updateEmployee}
             className='rounded text-white font-semibold bg-green-400 py-2 px-5 hover:bg-green-800'>Update</button>
           <button onClick={()=>navigate("/employeeList")}
           className='rounded text-white font-semibold bg-red-400 hover:bg-red-800 px-5 py-2'>Cancel</button>
       </div>

      </div>
</div>

      
    </div>
  )
}

export default UpdateEmployee;
