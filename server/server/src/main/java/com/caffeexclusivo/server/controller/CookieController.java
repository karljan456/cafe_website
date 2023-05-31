package com.caffeexclusivo.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.caffeexclusivo.server.model.Cookie;
import com.caffeexclusivo.server.repository.CookieRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class CookieController {
	
	@Autowired
	CookieRepository cookieRepository;
	
	@GetMapping("/getallcookies")
	List<Cookie> getAllCookies(){
		return cookieRepository.findAll();
	}

}
