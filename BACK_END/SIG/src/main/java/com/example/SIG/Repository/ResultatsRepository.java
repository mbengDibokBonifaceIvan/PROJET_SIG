package com.example.SIG.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.SIG.Model.Resultats;

@Repository
public interface ResultatsRepository extends JpaRepository<Resultats, Long> {
    // Vous pouvez ajouter des méthodes personnalisées de requête ici si nécessaire
}