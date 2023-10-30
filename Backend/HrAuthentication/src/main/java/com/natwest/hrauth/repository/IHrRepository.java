package com.natwest.hrauth.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.natwest.hrauth.model.HR;

@Repository
public interface IHrRepository extends JpaRepository<HR, Integer> {

	Optional<HR> findByEmployeeIdAndHrPassword(@Param("employeeId") Integer employeeId, @Param("hrPassword") String hrPassword);
}
