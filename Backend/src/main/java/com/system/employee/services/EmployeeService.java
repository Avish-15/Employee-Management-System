package com.system.employee.services;

import java.util.List;

import com.system.employee.model.Employee;

public interface EmployeeService {

	public Employee createEmployee(Employee employee);
	
	public List<Employee> getAllEmployees();
	
	public boolean deleteEmployee(Long id);
	
	public Employee getEmployee(Long id);
	
	public Employee updateEmployee(Long id, Employee employee);
	
}
