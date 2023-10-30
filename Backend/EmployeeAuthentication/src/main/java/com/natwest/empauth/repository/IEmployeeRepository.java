package com.natwest.empauth.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.natwest.empauth.model.Employee;

@Repository
public interface IEmployeeRepository extends JpaRepository<Employee, Integer> {
	
	Optional<Employee> findByEmployeeIdAndEmpPassword(@Param("employeeId") Integer employeeId, @Param("empPassword") String empPassword);
}
