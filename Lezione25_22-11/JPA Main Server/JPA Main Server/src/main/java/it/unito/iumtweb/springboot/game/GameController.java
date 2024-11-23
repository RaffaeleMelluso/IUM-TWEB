package it.unito.iumtweb.springboot.game;

import it.unito.iumtweb.springboot.scorer.Scorer;
import it.unito.iumtweb.springboot.scorer.ScorerService;
import it.unito.iumtweb.springboot.scorer.Stadium;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GameController {

    private final GameService gameService;
    @Autowired
    public GameController(GameService gameService) {
        this.gameService = gameService;
    }
    @PostMapping("/insert_game")
    public ResponseEntity<Game> insertScorer(@RequestBody Game game) {
        //@todo
    }

}
