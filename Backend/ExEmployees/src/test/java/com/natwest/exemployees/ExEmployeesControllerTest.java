package com.natwest.exemployees;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.natwest.exemployees.controller.ExEmployeesController;
import com.natwest.exemployees.model.ExEmployees;
import com.natwest.exemployees.service.ExEmployeesService;

public class ExEmployeesControllerTest {

    @InjectMocks
    private ExEmployeesController exEmployeesController;

    @Mock
    private ExEmployeesService exEmployeesService;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testGetAllUserDataRequestHandler() {
        List<ExEmployees> mockList = new ArrayList<>();
        ExEmployees exEmployee1 = new ExEmployees();
        exEmployee1.setEmployeeId(1);
        exEmployee1.setFirstName("John");
        exEmployee1.setLastName("Doe");
        exEmployee1.setEmail("johndoe@example.com");
        exEmployee1.setLastWorkingDay(new Date());
        exEmployee1.setOnNotice(false);
        mockList.add(exEmployee1);

        when(exEmployeesService.getAllExEmployees()).thenReturn(mockList);

        ResponseEntity<?> response = exEmployeesController.getAllUserDataRequestHandler();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(1, ((List<ExEmployees>) response.getBody()).size());
    }

    @Test
    public void testGetAllExEmployeesService() {
        List<ExEmployees> mockList = new ArrayList<>();
        ExEmployees exEmployee1 = new ExEmployees();
        exEmployee1.setEmployeeId(1);
        exEmployee1.setFirstName("John");
        exEmployee1.setLastName("Doe");
        exEmployee1.setEmail("johndoe@example.com");
        exEmployee1.setLastWorkingDay(new Date());
        exEmployee1.setOnNotice(false);
        mockList.add(exEmployee1);

        when(exEmployeesService.getAllExEmployees()).thenReturn(mockList);

        List<ExEmployees> response = exEmployeesService.getAllExEmployees();

        assertEquals(1, response.size());
    }
}
