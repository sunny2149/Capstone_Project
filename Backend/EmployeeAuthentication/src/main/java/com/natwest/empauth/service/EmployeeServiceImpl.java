package com.natwest.empauth.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.natwest.empauth.model.Employee;
import com.natwest.empauth.repository.IEmployeeRepository;

@Service
public class EmployeeServiceImpl implements IEmployeeService {
	
	@Autowired
	private IEmployeeRepository iemployeerepo;

	@Override
	public Employee validateEmployeeLogin(Integer employeeid, String password) {

		Optional<Employee> empOptional = this.iemployeerepo.findByEmployeeIdAndEmpPassword(employeeid, password);
		
		if(empOptional.isPresent())
		{
			System.out.println(empOptional.get());
			return empOptional.get();
		}
		return null;
	}
	
	@Override
	public Employee updateEmployee(Employee employeeObj, int employeeId) {
		
		Optional<Employee> empOptional = this.iemployeerepo.findById(employeeId);
		
		Employee empObj = null;
		Employee updatedemployee = null;
		
		if(empOptional.isPresent())
		{
			empObj = empOptional.get();
			
			empObj.setFirstName(employeeObj.getFirstName());
			empObj.setPhoneNo(employeeObj.getPhoneNo());
			empObj.setAddress(employeeObj.getAddress());
			
			updatedemployee = this.iemployeerepo.save(empObj);
		}
		else
		{
			System.out.println("Employee does not exist...");
		}
		
		return updatedemployee;
	}

	@Override
	public boolean deleteEmployeeById(int employeeId) {

		Optional<Employee> empOptional = this.iemployeerepo.findById(employeeId);
		
		boolean status = false;
		
		if(empOptional.isPresent())
		{
			this.iemployeerepo.delete(empOptional.get());
			status = true;
		}
		else
		{
			System.out.println("Employee does not Exists !!!! ");
		}
		
		return status;
	}
	

	@Override
	public List<Employee> getAllEmployees() {

		return this.iemployeerepo.findAll();
	}

}
