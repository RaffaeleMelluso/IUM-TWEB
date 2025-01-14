package it.unito.ium_tweb.Superpower;


import it.unito.ium_tweb.Superhero.Superhero;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/powers")
public class SuperpowerController {
    @Autowired
    private SuperpowerService superpowerService;

    @PostMapping("/")
    public Superpower createSuperpower(@RequestBody Superpower superpower) {
        return superpowerService.addSuperpower(superpower);
    }

    @GetMapping("/")
    public List<Superpower> getAllSuperpowers() {
        return superpowerService.getAllSuperpowers();
    }

    @GetMapping("/{id}/superheroes")
    public List<Superhero> getSuperheroesBySuperpower(@PathVariable Long id) {
        return superpowerService.getSuperheroesBySuperpower(id);
    }
}
