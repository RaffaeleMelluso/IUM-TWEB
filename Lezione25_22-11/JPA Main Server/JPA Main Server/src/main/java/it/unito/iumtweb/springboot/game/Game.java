package it.unito.iumtweb.springboot.game;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "game")
public class Game {

    //@todo generate the id

    // @todo the column in the database must be called "date"
    private Date date;

    // @todo the column in the database must be called "home_team"
    private String homeTeam;

    // @todo the column in the database must be called "home_team_score"
    private int homeTeamScore;

    // @todo the column in the database must be called "away_team"
    private String awayTeam;

    // @todo the column in the database must be called "away_team_score"
    private int awayTeamScore;

    // @todo the column in the database must be called "stadium"
    private String stadium;

    public Game() {
    }

    public Game(Date date, String homeTeam, int homeTeamScore, String awayTeam, int awayTeamScore, String stadium) {
        this.date = date;
        this.homeTeam = homeTeam;
        this.homeTeamScore = homeTeamScore;
        this.awayTeam = awayTeam;
        this.awayTeamScore = awayTeamScore;
        this.stadium = stadium;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getHomeTeam() {
        return homeTeam;
    }

    public void setHomeTeam(String homeTeam) {
        this.homeTeam = homeTeam;
    }

    public int getHomeTeamScore() {
        return homeTeamScore;
    }

    public void setHomeTeamScore(int homeTeamScore) {
        this.homeTeamScore = homeTeamScore;
    }

    public String getAwayTeam() {
        return awayTeam;
    }

    public void setAwayTeam(String awayTeam) {
        this.awayTeam = awayTeam;
    }

    public int getAwayTeamScore() {
        return awayTeamScore;
    }

    public void setAwayTeamScore(int awayTeamScore) {
        this.awayTeamScore = awayTeamScore;
    }

    public String getStadium() {
        return stadium;
    }

    public void setStadium(String stadium) {
        this.stadium = stadium;
    }
}
