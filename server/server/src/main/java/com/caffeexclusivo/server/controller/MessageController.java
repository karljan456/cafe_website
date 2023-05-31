package com.caffeexclusivo.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.caffeexclusivo.server.model.Message;
import com.caffeexclusivo.server.repository.MessageRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class MessageController {
	
	@Autowired
	MessageRepository messageRepository;
	
	@PostMapping("/message")
	Message addMessage(@RequestBody Message message) {
		
		return messageRepository.save(message);
		
	}

}
