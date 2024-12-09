package it.unito.iumtweb.springboot.stadium;

import org.springframework.stereotype.Service;

@Service
public class StadiumService {

    private final StadiumRepository stadiumRepository;

    public StadiumService(StadiumRepository stadiumRepository) {
        this.stadiumRepository = stadiumRepository;
    }


    }
