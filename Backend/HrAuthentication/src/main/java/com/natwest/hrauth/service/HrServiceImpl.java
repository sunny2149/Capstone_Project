package com.natwest.hrauth.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.natwest.hrauth.model.HR;
import com.natwest.hrauth.repository.IHrRepository;

@Service
public class HrServiceImpl implements IHrService {
	
	@Autowired
	private IHrRepository ihrrepo;

	@Override
	public HR validateHrLogin(Integer employeeid, String password) {
		
		Optional<HR> hrOptional = this.ihrrepo.findByEmployeeIdAndHrPassword(employeeid, password);
		if(hrOptional.isPresent())
		{
			System.out.println(hrOptional.get());
			return hrOptional.get();
		}
		
		return hrOptional.get();
	}

}
