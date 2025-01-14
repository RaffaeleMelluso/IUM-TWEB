package it.unito.ium_tweb.Superpower;

import it.unito.ium_tweb.Superhero.Superhero;
import it.unito.ium_tweb.Superhero.SuperheroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SuperpowerService {
    @Autowired
    private SuperpowerRepository superpowerRepository;

    @Autowired
    private SuperheroRepository superheroRepository;

    public Superpower addSuperpower(Superpower superpower) {
        return superpowerRepository.save(superpower);
    }

    public List<Superpower> getAllSuperpowers() {
        return superpowerRepository.findAll();
    }

    public List<Superhero> getSuperheroesBySuperpower(Long superpowerId) {
        return superheroRepository.findBySuperpowerId(superpowerId);
    }
}
