package it.unito.iumtweb.springboot.stadium;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StadiumController {

    private final StadiumService stadiumService;

    public StadiumController(StadiumService stadiumService) {
        this.stadiumService = stadiumService;
    }

    @PostMapping("/get_stadiums")
    public List<Stadium> getStadiumLocations(@RequestBody List<String> stadiumNames) {
        //@todo

    }

    @PostMapping("/insert_stadium")
       public ResponseEntity<Stadium> insertStadium(@RequestBody Stadium stadium) {
          //@todo
       }
}
