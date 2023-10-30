package com.natwest.resign.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.natwest.resign.model.Resignation;

@Repository
public interface IResignRepository extends JpaRepository<Resignation, Integer> {

    @Query("SELECT r FROM Resignation r WHERE r.onNotice = true")
    List<Resignation> findAllOnNoticeEmployees();

}
