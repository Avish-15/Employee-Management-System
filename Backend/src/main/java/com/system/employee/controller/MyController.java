package com.system.employee.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.system.employee.model.Employee;
import com.system.employee.services.EmployeeServiceImp;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MyController {

	@Autowired
	public EmployeeServiceImp empsrv;
	
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		
		return empsrv.createEmployee(employee);
	}
	
	@GetMapping("/employees")
	public List<Employee> getEmployess(){
		
		return empsrv.getAllEmployees();
	}						
		
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable Long id){
		boolean deleted=false;
		deleted=empsrv.deleteEmployee(id);
		Map<String,Boolean>response=new HashMap<>();
		response.put("deleted",deleted);
		return ResponseEntity.ok(response);
	}

	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployee(@PathVariable Long id){
		
		Employee employee=null;
		employee=empsrv.getEmployee(id);
		
		return ResponseEntity.ok(employee);
	}
	
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee employee ){
		
		employee=empsrv.updateEmployee(id,employee);
		return ResponseEntity.ok(employee);
	}
}
