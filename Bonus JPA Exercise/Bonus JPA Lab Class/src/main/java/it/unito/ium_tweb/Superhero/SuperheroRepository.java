package it.unito.ium_tweb.Superhero;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

// Repositories
@Repository
public interface SuperheroRepository extends JpaRepository<Superhero, Long> {
    Optional<Superhero> findByName(String name);

    @Query("SELECT s FROM Superhero s WHERE s.superpowerId = :superpowerId")
    List<Superhero> findBySuperpowerId(Long superpowerId);


}
