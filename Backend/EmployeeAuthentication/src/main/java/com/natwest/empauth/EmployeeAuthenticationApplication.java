package com.natwest.empauth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class EmployeeAuthenticationApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeAuthenticationApplication.class, args);
	}

}
