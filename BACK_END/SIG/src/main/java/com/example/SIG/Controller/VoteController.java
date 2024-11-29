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
import com.example.SIG.Model.Resultat;
import com.example.SIG.Model.Vote;
import com.example.SIG.Repository.CandidatRepository;
import com.example.SIG.Repository.ResultatsRepository;
import com.example.SIG.Repository.VoteRepository;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/votes")
public class VoteController {

    @Autowired
    private VoteRepository voteRepository;
    @Autowired
    private ResultatsRepository resultatsRepository;
    @Autowired
    private CandidatRepository candidatRepository;

    @PostMapping
    public ResponseEntity<Vote> createVote(@RequestBody Vote vote) {
        Resultat resultats = resultatsRepository.findById(vote.getResultat().getId()).orElseThrow();
        Candidat candidat = candidatRepository.findById(vote.getCandidat().getId()).orElseThrow();
        vote.setResultat(resultats);
        vote.setCandidat(candidat);
        Vote savedVote = voteRepository.save(vote);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedVote);
    }
}
