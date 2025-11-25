import React from 'react'
import { useNavigate } from 'react-router-dom';

const Employee = ({employee,deleteEmployee}) => {

const navigate=useNavigate();


  const editEmployee=(e,id)=>{
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  }
  return (
     <tr key={employee.id} className="odd:bg-white even:bg-gray-100 hover:odd:bg-gray-200 hover:even:bg-blue-50 ">
                    <td className='text-left px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-500'>{employee.firstname}</div>
                        </td>
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-500'>{employee.lastname}</div>
                        </td>
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-500'>{employee.email}</div>
                        </td>
                        <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
                            <a 
                            onClick={(e,id)=>editEmployee(e,employee.id)}
                            className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>Edit</a>
                            <a 
                             onClick={(e,id)=>deleteEmployee(e,employee.id)}
                            className='text-indigo-600 hover:text-indigo-800 hover:cursor-pointer'>Delete</a>
                        </td>
                </tr>              
  )
};

export default Employee;
