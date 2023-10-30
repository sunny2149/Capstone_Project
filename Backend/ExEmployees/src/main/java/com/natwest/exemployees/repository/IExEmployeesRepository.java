package com.natwest.exemployees.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.natwest.exemployees.model.ExEmployees;

@Repository
public interface IExEmployeesRepository extends JpaRepository<ExEmployees, Integer> {

}
