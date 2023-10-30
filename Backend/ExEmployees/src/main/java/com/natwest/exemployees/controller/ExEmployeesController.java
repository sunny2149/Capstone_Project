package com.natwest.exemployees.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.natwest.exemployees.model.ExEmployees;
import com.natwest.exemployees.service.IExEmployeesService;

import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "exemployee", description = "exemployee ms")
//@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/eauth/v1")
public class ExEmployeesController {
	
	@Autowired
	private IExEmployeesService iexemployeesservice;
	
	private ResponseEntity<?> respentity;
	
	@GetMapping("/")
	public String serverStarted() {
		return "Authentication Server Started";
	}
	
	@GetMapping("/getexemployees")
	public ResponseEntity<?> getAllUserDataRequestHandler()
	{
		List<ExEmployees> exemployeesData = this.iexemployeesservice.getAllExEmployees();
		respentity = new ResponseEntity(exemployeesData,HttpStatus.OK);
		return respentity;
	}
}
