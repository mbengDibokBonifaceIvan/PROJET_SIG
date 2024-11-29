package com.example.SIG.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SIG.Model.Resultat;

public interface ResultatsRepository extends JpaRepository<Resultat, Long> {
}
