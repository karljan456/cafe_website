package com.caffeexclusivo.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.caffeexclusivo.server.model.Cookie;

public interface CookieRepository extends JpaRepository<Cookie, Long> {

}
