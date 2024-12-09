package it.unito.iumtweb.springboot.scorer;

import it.unito.iumtweb.springboot.game.Game;
import it.unito.iumtweb.springboot.game.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ScorerController {

    private final ScorerService scorerService;
    private final GameService gameService;
    @Autowired
    public ScorerController(ScorerService scorerService, GameService gameService) {
        this.scorerService = scorerService;
        this.gameService = gameService;
    }



    @PostMapping("/scores")
    public List<Stadium> getStadiumLocationsByPlayerAndDateRange(@RequestBody Query query) {
        //@todo
    }
    record Query (
            int year,
            String playerName
        ){}


    @PostMapping("/insert_scorer")
    public ResponseEntity<Scorer> insertScorer(@RequestBody Scorer scorer) {
        //@todo
    }
    @PostMapping("/insert_game")
    public ResponseEntity<Game> insertScorer(@RequestBody Game game) {
        //@todo
    }

}
