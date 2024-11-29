package com.example.SIG.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Entity
public class Candidat {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String nom;

  public Long getId() {
    return id;
  }

  // Getters and setters
}
