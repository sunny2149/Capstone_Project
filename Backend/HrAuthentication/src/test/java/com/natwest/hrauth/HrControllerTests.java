package com.natwest.hrauth;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.natwest.hrauth.model.HR;
import com.natwest.hrauth.service.IHrService;

import jakarta.servlet.ServletException;

@SpringBootTest
@AutoConfigureMockMvc
public class HrControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private IHrService hrService;

    @Test
    public void testValidLogin() throws Exception {
        HR validHR = new HR();
        validHR.setEmployeeId(1);
        validHR.setHrPassword("validPassword");

        when(hrService.validateHrLogin(1, "validPassword")).thenReturn(validHR);

        mockMvc.perform(post("/auth/v1/login")
                .contentType("application/json")
                .content("{\"employeeId\": 1, \"hrPassword\": \"validPassword\"}")
        )
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.message").value("HR Successfully LoggedIn"))
                .andExpect(jsonPath("$.token").isString())
                .andExpect(jsonPath("$.hrDetails").isMap());
    }

    @Test
    public void testServerError() throws Exception {
        when(hrService.validateHrLogin(3, "errorPassword")).thenThrow(new RuntimeException("Test error"));

        mockMvc.perform(post("/auth/v1/login")
                .contentType("application/json")
                .content("{\"employeeId\": 3, \"hrPassword\": \"errorPassword\"}")
        )
                .andExpect(status().isUnauthorized())
                .andExpect(jsonPath("$.message").value("Test error"))
                .andExpect(jsonPath("$.token").doesNotExist())
                .andExpect(jsonPath("$.hrDetails").doesNotExist());
    }
}
