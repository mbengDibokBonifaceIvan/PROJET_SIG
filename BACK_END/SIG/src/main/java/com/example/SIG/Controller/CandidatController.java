package com.example.SIG.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SIG.Model.Candidat;
import com.example.SIG.Repository.CandidatRepository;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/candidat")
public class CandidatController {

    @Autowired
    private CandidatRepository candidatRepository;

    @PostMapping
    public ResponseEntity<Candidat> createCandidat(@RequestBody Candidat candidat) {
        Candidat savedCandidat = candidatRepository.save(candidat);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedCandidat);
    }
}