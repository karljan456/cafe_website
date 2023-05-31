package com.caffeexclusivo.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.caffeexclusivo.server.model.Coffee;

public interface CoffeeRepository extends JpaRepository<Coffee, Long> {

}
