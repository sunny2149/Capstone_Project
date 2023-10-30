package com.natwest.exemployees.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.natwest.exemployees.model.ExEmployees;
import com.natwest.exemployees.repository.IExEmployeesRepository;

@Service
public class ExEmployeesService implements IExEmployeesService {
	
	@Autowired
	private IExEmployeesRepository iexemployeesrepo;

	@Override
	public List<ExEmployees> getAllExEmployees() {
		
		return this.iexemployeesrepo.findAll();
	}

}
