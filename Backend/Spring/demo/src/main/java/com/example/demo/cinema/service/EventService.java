package com.example.demo.cinema.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.example.demo.cinema.model.Event;

import reactor.core.publisher.Mono;

/**
 * Service class for retrieving cinema events details using WebClient.
 */
@Service
public class EventService {
    // The URL of the cinema events API
    private final String apiUrl = "https://www.apollokino.ee/xml/Events";
     /**
     * Retrieve details of cinema events from the specified API.
     *
     * @return A Mono containing a list of Event objects.
     */
    public Mono<List<Event>> getEventDetails() {
        // Use WebClient to perform a GET request and retrieve events as a Flux
        return WebClient.create(apiUrl)
                .get()
                .retrieve()
                .bodyToFlux(Event.class)
                // Collect events into a list within a Mono
                .collectList();

    }
}
