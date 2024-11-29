package com.example.SIG.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SIG.Model.Candidat;

public interface CandidatRepository extends JpaRepository<Candidat, Long> {
}
