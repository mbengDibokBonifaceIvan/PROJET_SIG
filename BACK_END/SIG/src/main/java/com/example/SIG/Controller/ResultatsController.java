package com.example.SIG.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SIG.Model.Arrondissement;
import com.example.SIG.Model.Resultat;
import com.example.SIG.Model.Session;
import com.example.SIG.Repository.ArrondissementRepository;
import com.example.SIG.Repository.ResultatsRepository;
import com.example.SIG.Repository.SessionRepository;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/resultats")
public class ResultatsController {

    @Autowired
    private ResultatsRepository resultatsRepository;
    @Autowired
    private SessionRepository sessionRepository;
    @Autowired
    private ArrondissementRepository arrondissementRepository;

    @PostMapping
    public ResponseEntity<Resultat> createResultats(@RequestBody Resultat resultats) {
        Session session = sessionRepository.findById(resultats.getSession().getId()).orElseThrow();
        Arrondissement arrondissement = arrondissementRepository.findById(resultats.getArrondissement().getId())
                .orElseThrow();
        resultats.setSession(session);
        resultats.setArrondissement(arrondissement);
        Resultat savedResultats = resultatsRepository.save(resultats);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedResultats);
    }
}
