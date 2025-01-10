package it.unito.iumtweb.springboot.scorer;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ScorerService {

    private final ScorerRepository scorerRepository;

   public ScorerService(ScorerRepository scorerRepository) {
        this.scorerRepository = scorerRepository;
    }

    public List<String> getStadiumsForPlayerAndDateRange(String playerName, int year) {
        //@todo
    }

    public Scorer saveScorer(Scorer scorer) {
       //@todo
    }

}
