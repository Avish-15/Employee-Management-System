import axios from "axios";

const Employee_url="http://localhost:8080/employees";
    
class EmployeeService{
    saveEmployee(employee){
        return axios.post(Employee_url,employee);
    }

    getAllEmployee(){
        return axios.get(Employee_url);
    }

    deleteEmployee(id){
        return axios.delete(Employee_url+"/"+id);
    }
    getEmployeebyId(id){
        return axios.get(Employee_url+"/"+id);
    }

    updateEmployee(employee,id){
        return axios.put(Employee_url+"/"+id,employee);
    }
}

export default new EmployeeService;