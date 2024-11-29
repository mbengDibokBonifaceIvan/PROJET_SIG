package com.example.SIG.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SIG.Model.Session;
import com.example.SIG.Repository.SessionRepository;


@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/sessions")
public class SessionController {

    @Autowired
    private SessionRepository sessionRepository;

    @PostMapping
    public ResponseEntity<Session> createSession(@RequestBody Session session) {
        Session savedSession = sessionRepository.save(session);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedSession);
    }
}
