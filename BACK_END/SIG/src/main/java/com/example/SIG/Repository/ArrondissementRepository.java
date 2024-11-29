package com.example.SIG.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SIG.Model.Arrondissement;

public interface ArrondissementRepository extends JpaRepository<Arrondissement, Long> {
}
