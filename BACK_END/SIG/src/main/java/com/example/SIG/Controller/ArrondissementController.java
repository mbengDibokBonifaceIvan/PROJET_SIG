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
import com.example.SIG.Repository.ArrondissementRepository;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/arrondissements")
public class ArrondissementController {

    @Autowired
    private ArrondissementRepository arrondissementRepository;

    @PostMapping
    public ResponseEntity<Arrondissement> createArrondissement(@RequestBody Arrondissement arrondissement) {
        Arrondissement savedArrondissement = arrondissementRepository.save(arrondissement);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedArrondissement);
    }
}
