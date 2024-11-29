package com.example.SIG.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.extern.slf4j.Slf4j;


@Slf4j
@Entity
public class Vote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Resultat resultat;

    @ManyToOne
    private Candidat candidat;

    public void setResultat(Resultat resultat) {
        this.resultat = resultat;
    }

    public void setCandidat(Candidat candidat) {
        this.candidat = candidat;
    }

    public Resultat getResultat() {
        return resultat;
    }

    public Candidat getCandidat() {
        return candidat;
    }

    public Long getId() {
        return id;
    }

}