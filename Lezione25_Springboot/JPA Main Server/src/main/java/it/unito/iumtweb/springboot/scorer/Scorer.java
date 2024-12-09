package it.unito.iumtweb.springboot.scorer;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "scorer")
public class
Scorer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "scorer")
    private String scorer;

    @JoinColumn(name = "game_id")
    private Long gameId;

    @Column(name = "date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date date;

    public Scorer(String scorer, Long gameId, Date date) {
        this.scorer = scorer;
        this.gameId = gameId;
        this.date = date;
    }

    public Scorer() {
    }

    public String getScorer() {
        return scorer;
    }

    public void setScorer(String scorer) {
        this.scorer = scorer;
    }

    public Long getGameId() {
        return gameId;
    }

    public void setGameId(Long game) {
        this.gameId = game;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date minute) {
        this.date = minute;
    }
}
