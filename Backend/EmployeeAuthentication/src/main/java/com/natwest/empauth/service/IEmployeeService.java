package com.natwest.empauth.service;

import java.util.List;

import com.natwest.empauth.model.Employee;

public interface IEmployeeService {
	
	public Employee validateEmployeeLogin(Integer employeeid, String password);
	
	public Employee updateEmployee(Employee empObj,int employeeid);
	
	public boolean deleteEmployeeById(int employeeId);
	
	public List<Employee> getAllEmployees();

}
