package com.system.employee.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.system.employee.entity.EmployeeEntity;
import com.system.employee.model.Employee;
import com.system.employee.repository.EmployeeRepository;

@Service
public class EmployeeServiceImp implements EmployeeService{

	@Autowired
	public EmployeeRepository emprepo;

	@Override
	public Employee createEmployee(Employee employee) {
		EmployeeEntity empoyeeEntity=new EmployeeEntity();
		BeanUtils.copyProperties(employee, empoyeeEntity);
		emprepo.save(empoyeeEntity);
		return employee;
	}

	@Override
	public List<Employee> getAllEmployees() {
        List<EmployeeEntity> employeeEntity=emprepo.findAll();
        
        List<Employee> employees=employeeEntity
        		.stream()
        		.map(emp-> new Employee(
        				emp.getId(),
        				emp.getFirstname(),
        				emp.getLastname(),
        				emp.getEmail()))
        		.collect(Collectors.toList());
		return employees;
	}

	@Override
	public boolean deleteEmployee(Long id) {

		EmployeeEntity employee=emprepo.findById(id).get();
		emprepo.delete(employee);
		return true;
	}

	@Override
	public Employee getEmployee(Long id) {

		EmployeeEntity employeeEntity=emprepo.findById(id).get();
		Employee employee=new Employee();
		BeanUtils.copyProperties(employeeEntity, employee);
		return employee;
	}

	@Override
	public Employee updateEmployee(Long id, Employee employee) {

		EmployeeEntity employeeEntity=emprepo.findById(id).get();
		
		employeeEntity.setEmail(employee.getEmail());
		employeeEntity.setFirstname(employee.getFirstname());
		employeeEntity.setLastname(employee.getLastname());
		
		emprepo.save(employeeEntity);
		return employee;
	}

	
	
	
}
