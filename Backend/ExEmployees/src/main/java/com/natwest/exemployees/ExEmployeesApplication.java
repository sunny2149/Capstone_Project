package com.natwest.exemployees;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ExEmployeesApplication {

	public static void main(String[] args) {
		SpringApplication.run(ExEmployeesApplication.class, args);
	}

}
