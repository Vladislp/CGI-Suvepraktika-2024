package com.example.demo.cinema.model;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Represents a cinema event with its associated details.
 */
public class Event {
    @JsonProperty("ID")
    private Long id;

    @JsonProperty("Title")
    private String title;

    @JsonProperty("OriginalTitle")
    private String originalTitle;

    @JsonProperty("ProductionYear")
    private int productionYear;

    @JsonProperty("LengthInMinutes")
    private int lengthInMinutes;

    @JsonProperty("Images")
    private Images images;

    @JsonProperty("Genres")
    private String genres;

    @JsonProperty("ShortSynopsis")
    private String shortsynopsis;

    @JsonProperty("Rating")
    private String rating;

    /**
     * Default constructor for the Event class.
     */
    public Event() {
        // Default constructor for Jackson deserialization
    }

    /**
     * Parameterized constructor for creating an Event with specified details.
     *
     * @param id            The unique identifier of the event.
     * @param title         The title of the event.
     * @param originalTitle The original title of the event.
     */
    public Event(Long id, String title, String originalTitle) {
        this.id = id;
        this.title = title;
        this.originalTitle = originalTitle;
    }

    /**
     * Retrieves the unique identifier of the event.
     *
     * @return The event's unique identifier.
     */
    public Long getId() {
        return id;
    }

    /**
     * Retrieves the title of the event.
     *
     * @return The title of the event.
     */
    public String getTitle() {
        return title;
    }

    /**
     * Retrieves the title of the event.
     *
     * @return The title of the event.
     */
    public String getRating() {
        return rating;
    }

    /**
     * Retrieves the original title of the event.
     *
     * @return The original title of the event.
     */
    public String getOriginalTitle() {
        return originalTitle;
    }

    /**
     * Retrieves the production year of the event.
     *
     * @return The production year of the event.
     */
    public int getProductionYear() {
        return productionYear;
    }

    /**
     * Retrieves the length of the event in minutes.
     *
     * @return The length of the event in minutes.
     */
    public int getLengthInMinutes() {
        return lengthInMinutes;
    }

    /**
     * Retrieves the genres of the event.
     *
     * @return The genres of the event.
     */
    public String getGenres() {
        return genres;
    }

    /**
     * Retrieves the genres of the event.
     *
     * @return The genres of the event.
     */
    public String getShortSynopsis() {
        return shortsynopsis;
    }

    /**
     * Retrieves the images associated with the event.
     *
     * @return The images associated with the event.
     */
    public Images getImages() {
        return images;
    }

    /**
     * Sets the images associated with the event.
     *
     * @param images The images to be set for the event.
     */
    public void setImages(Images images) {
        this.images = images;
    }
}
