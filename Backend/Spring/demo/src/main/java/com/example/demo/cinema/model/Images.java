package com.example.demo.cinema.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Images {
    @JsonProperty("EventMediumImagePortrait")
    private String eventMediumImagePortrait;

    public String getEventMediumImagePortrait() {
        return eventMediumImagePortrait;
    }

    public void setEventMediumImagePortrait(String eventMediumImagePortrait) {
        this.eventMediumImagePortrait = eventMediumImagePortrait;
    }
}
