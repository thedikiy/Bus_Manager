package com.tdk.edu;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EntityScan(basePackageClasses = {BusManagerApplication.class})
public class BusManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(BusManagerApplication.class, args);
	}
}
