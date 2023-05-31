package com.caffeexclusivo.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.caffeexclusivo.server.model.Coffee;
import com.caffeexclusivo.server.model.Cookie;
import com.caffeexclusivo.server.model.Message;
import com.caffeexclusivo.server.repository.CoffeeRepository;
import com.caffeexclusivo.server.repository.CookieRepository;
import com.caffeexclusivo.server.repository.MessageRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class CafeController {
	
	@Autowired
	MessageRepository messageRepository;
	
	@Autowired
	CookieRepository cookieRepository;
	
	@Autowired
	CoffeeRepository coffeeRepository;
	
	@PostMapping("/message")
	Message addMessage(@RequestBody Message message) {
		
		return messageRepository.save(message);
		
	}
	
	@GetMapping("/getallcookies")
	List<Cookie> getAllCookies(){
		return cookieRepository.findAll();
	}
	
	
	@GetMapping("/getallcoffee")
	List<Coffee> getAllCoffee(){
		
		return coffeeRepository.findAll();
		
	}

	
}
