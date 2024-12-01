package com.example.SIG.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Entity
public class Resultat {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  private Session session;

  @ManyToOne
  private Arrondissement arrondissement;

  private int nombreDInscrits;

  private int nombreDeVotants;

  // Constructeur par défaut
  public Resultat() {
    // Vous pouvez initialiser des valeurs par défaut ici si nécessaire
  }


  public Resultat(Long id, Session session, Arrondissement arrondissement, int nombreDInscrits, int nombreDeVotants) {
    this.id = id;
    this.session = session;
    this.arrondissement = arrondissement;
    this.nombreDInscrits = nombreDInscrits;
    this.nombreDeVotants = nombreDeVotants;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Session getSession() {
    return session;
  }

  public void setSession(Session session) {
    this.session = session;
  }

  public Arrondissement getArrondissement() {
    return arrondissement;
  }

  public void setArrondissement(Arrondissement arrondissement) {
    this.arrondissement = arrondissement;
  }

  public int getNombreDInscrits() {
    return nombreDInscrits;
  }

  public void setNombreDInscrits(int nombreDInscrits) {
    this.nombreDInscrits = nombreDInscrits;
  }

  public int getNombreDeVotants() {
    return nombreDeVotants;
  }

  public void setNombreDeVotants(int nombreDeVotants) {
    this.nombreDeVotants = nombreDeVotants;
  }

  
}
