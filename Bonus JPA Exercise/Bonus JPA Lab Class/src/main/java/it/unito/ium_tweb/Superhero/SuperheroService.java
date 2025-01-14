package it.unito.ium_tweb.Superhero;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SuperheroService {
    @Autowired
    private SuperheroRepository superheroRepository;

    public Superhero addSuperhero(Superhero superhero) {
        return superheroRepository.save(superhero);
    }

    public List<Superhero> getAllSuperheroes() {
        return superheroRepository.findAll();
    }

    public Optional<Superhero> getSuperheroByName(String name) {
        return superheroRepository.findByName(name);
    }

    public Superhero assignSuperpower(Long superheroId, Long superpowerId) {
        Superhero superhero = superheroRepository.findById(superheroId)
            .orElseThrow(() -> new RuntimeException("Superhero not found"));
        superhero.setSuperpowerId(superpowerId);
        return superheroRepository.save(superhero);
    }
}
