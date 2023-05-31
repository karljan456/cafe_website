package com.caffeexclusivo.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.caffeexclusivo.server.model.Message;

public interface MessageRepository extends JpaRepository<Message, Long> {

}
