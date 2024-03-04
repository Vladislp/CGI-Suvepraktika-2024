package com.example.demo.cinema.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Event {
    @JsonProperty("ID")
    private Long id;
    @JsonProperty("Title")
    private String title;
    @JsonProperty("OriginalTitle")
    private String originalTitle;

    public Event() {

    }

    public Event(Long id, String title, String originalTitle) {
        this.id=id;
        this.title=title;
        this.originalTitle=originalTitle;
    }

    public Long getId() {
        return id;
    }
    public String getTitle() {
        return title;
    }
    public String getOriginalTitle() {
        return originalTitle;
    }
}

