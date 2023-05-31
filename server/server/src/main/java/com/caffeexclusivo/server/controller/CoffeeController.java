package com.caffeexclusivo.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.caffeexclusivo.server.model.Coffee;
import com.caffeexclusivo.server.repository.CoffeeRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class CoffeeController {
	
	@Autowired
	CoffeeRepository coffeeRepository;
	
	@GetMapping("/getallcoffee")
	List<Coffee> getAllCoffee(){
		
		return coffeeRepository.findAll();
		
	}

}
