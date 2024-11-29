package com.example.SIG.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.SIG.Model.Vote;

public interface VoteRepository extends JpaRepository<Vote, Long> { }
