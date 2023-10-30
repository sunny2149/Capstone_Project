package com.natwest.resign;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ResignationDetailsApplication {

	public static void main(String[] args) {
		SpringApplication.run(ResignationDetailsApplication.class, args);
	}

}
