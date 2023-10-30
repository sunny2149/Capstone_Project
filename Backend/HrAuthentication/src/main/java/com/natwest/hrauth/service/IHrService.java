package com.natwest.hrauth.service;

import com.natwest.hrauth.model.HR;

public interface IHrService {

	public HR validateHrLogin(Integer employeeid, String password);
	
}
