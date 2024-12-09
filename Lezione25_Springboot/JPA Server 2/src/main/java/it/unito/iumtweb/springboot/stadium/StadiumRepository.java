package it.unito.iumtweb.springboot.stadium;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StadiumRepository extends JpaRepository<Stadium, String> {
    @Query("SELECT s FROM Stadium s WHERE s.name IN :stadiumNames")
    List<Stadium> findAllByNames(List<String> stadiumNames);
}
