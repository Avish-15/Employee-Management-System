package com.system.employee.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee {

	public long id;
	public String firstname;
	public String lastname;
	public String email;
	
}
