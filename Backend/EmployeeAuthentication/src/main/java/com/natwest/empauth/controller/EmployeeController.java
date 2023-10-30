package com.natwest.empauth.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.natwest.empauth.model.Employee;
import com.natwest.empauth.service.IEmployeeService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.ServletException;

@Tag(name = "employee", description = "employee ms")
//@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/auth/v1")
public class EmployeeController {
	
	private Map<String, Object> map = new HashMap<>();
	
	@Autowired
	private IEmployeeService iemployeeservice;
	
	private ResponseEntity<?> respentity;
	
	@GetMapping("/")
	public String serverStarted() {
		return "Authentication Server Started";
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> doLogin(@RequestBody Employee emp)
	{
		try
		{
			Employee empObj = this.iemployeeservice.validateEmployeeLogin(emp.getEmployeeId(), emp.getEmpPassword());
			String jwtToken = generateToken(emp.getEmployeeId(), emp.getEmpPassword());
			
			map.put("message", "Employee Successfully LoggedIn");
			
			map.put("token", jwtToken);
			map.put("empDetails", empObj);
		}
		catch (Exception e) 
		{
				map.put("message", e.getMessage());
				map.put("token", null);
				return new ResponseEntity<>(map,HttpStatus.UNAUTHORIZED);
		}
		
		return new ResponseEntity<>(map,HttpStatus.OK);
	}
	
	@PutMapping("/updateemployee/{employeeId}")
	public ResponseEntity<?> updateUserDataRequestHandler(@RequestBody Employee empobj, @PathVariable int employeeId)
	{
		Employee dataupdated = this.iemployeeservice.updateEmployee(empobj, employeeId);
		respentity = new ResponseEntity("Data added successfully !!!" + dataupdated,HttpStatus.OK);
		return respentity;	
	}
	
	@DeleteMapping("/deleteemployee/{employeeId}")
	public ResponseEntity<?> deleteUserDataRequestHandler(@PathVariable int employeeId)
	{
		boolean status = this.iemployeeservice.deleteEmployeeById(employeeId);
		respentity = new ResponseEntity("Data deleted successfully !!!",HttpStatus.OK);
		return respentity;
	}
	
	@GetMapping("/getemployees")
	public ResponseEntity<?> getAllUserDataRequestHandler()
	{
		List<Employee> employeesData = this.iemployeeservice.getAllEmployees();
		respentity = new ResponseEntity(employeesData,HttpStatus.OK);
		return respentity;
	}
	
	private String generateToken(Integer employeeId, String empPassword) throws ServletException {
		String jwtToken = "";
		if(employeeId == null || empPassword == null) {
			throw new ServletException("Please send valid employeeid and password");
		}
		//validate user aginst db
		Employee emp= iemployeeservice.validateEmployeeLogin(employeeId, empPassword);
		if(emp == null)
			throw new ServletException("Invalid Credentials");
		else {
			jwtToken = Jwts.builder()
					        .setSubject(String.valueOf(employeeId))
					        .setIssuedAt(new Date())
					        .setExpiration(new Date(System.currentTimeMillis() + 3000000))
					        .signWith(SignatureAlgorithm.HS256, "secret key")
					        .compact();
		}
		return jwtToken;
	}

}
