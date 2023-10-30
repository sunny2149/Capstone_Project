package com.natwest.resign.service;

import java.util.List;

import com.natwest.resign.model.Resignation;

public interface IResignService {
	
	public Resignation saveUser(Resignation resignObj);
	
	public Resignation updateUser(Resignation resignObj);
	
	public Resignation getUserById(int employeeId);
	
	public boolean deleteUserById(int employeeId);
	
	public List<Resignation> getAllUsers();
	public List<Resignation> getAllEmployeesOnNotice();

}
