package com.example.shreyas.repository;

import com.example.shreyas.entity.user;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface userrepository extends JpaRepository<user, Long> {
    Optional<user> findByemail(String email);
}