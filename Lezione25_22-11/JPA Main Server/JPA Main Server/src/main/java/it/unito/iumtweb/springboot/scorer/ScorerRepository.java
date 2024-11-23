package it.unito.iumtweb.springboot.scorer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ScorerRepository extends JpaRepository<Scorer, Long> {
    @Query(value = "SELECT DISTINCT g.stadium " +
            "FROM scorer s " +
            "JOIN game g ON s.game_id = g.id " +
            "WHERE s.scorer = :scorer " +
            "AND g.date BETWEEN :startDate AND :endDate", nativeQuery = true)
    List<String> findByScorerAndDateBetween(String scorer, LocalDate startDate, LocalDate endDate);
}
