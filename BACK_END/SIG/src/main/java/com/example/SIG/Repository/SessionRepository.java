package com.example.SIG.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SIG.Model.Session;

public interface SessionRepository extends JpaRepository<Session, Long> {
}
