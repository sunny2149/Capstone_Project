package com.natwest.resign.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.natwest.resign.model.Resignation;
import com.natwest.resign.service.IResignService;

import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "resign", description = "resign ms")
//@CrossOrigin("*")
@RestController
@RequestMapping("rapi/v1")
public class ResignController {
	
	@Autowired
	private IResignService iresignservice;
	
	private ResponseEntity<?> respentity;
	
	@PutMapping("/saveresign")
	public ResponseEntity<?> saveResignDataRequestHandler(@RequestBody Resignation resignObj) {
	    Resignation dataadded = this.iresignservice.updateUser(resignObj);

	    if (dataadded != null) {
	        System.out.println("New Resignation Data Added: " + dataadded.toString());
	    } else {
	        System.out.println("Failed to add new resignation data.");
	    }

	    respentity = new ResponseEntity(dataadded, HttpStatus.CREATED);
	    return respentity;
	}
	
	@GetMapping("/getall")
	public ResponseEntity<?> getAllResignDataRequestHandler()
	{
		List<Resignation> resignData = this.iresignservice.getAllUsers();
		respentity = new ResponseEntity(resignData,HttpStatus.OK);
		return respentity;
	}
	
	@GetMapping("/getresignedusers")
	public ResponseEntity<?> getAllResignedUserDataRequestHandler()
	{
		List<Resignation> resignData = this.iresignservice.getAllEmployeesOnNotice();
		respentity = new ResponseEntity(resignData,HttpStatus.OK);
		return respentity;
	}
	
}
