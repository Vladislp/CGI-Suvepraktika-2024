package com.example.demo.cinema.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Shows {
    @JsonProperty("ID")
    private Long id;

    public Long getId() {
        return id;
    }

    public Shows() {
        
    }

    public void setShows(Long id) {
        this.id = id;
    }
}