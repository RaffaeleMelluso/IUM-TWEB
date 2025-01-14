package it.unito.ium_tweb.Superhero;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/superheroes")
public class SuperheroController {
    @Autowired
    private SuperheroService superheroService;

    @PostMapping("/")
    public Superhero createSuperhero(@RequestBody Superhero superhero) {
        return superheroService.addSuperhero(superhero);
    }

    @GetMapping("/")
    public List<Superhero> getAllSuperheroes() {
        return superheroService.getAllSuperheroes();
    }

    @GetMapping("/{name}")
    public Optional<Superhero> getSuperheroByName(@PathVariable String name) {
        return superheroService.getSuperheroByName(name);
    }

    @PostMapping("/assign-power")
    public Superhero assignSuperpower(@RequestBody Map<String, Long> payload) {
        Long superheroId = payload.get("superheroId");
        Long superpowerId = payload.get("superpowerId");
        return superheroService.assignSuperpower(superheroId, superpowerId);

    }
}
