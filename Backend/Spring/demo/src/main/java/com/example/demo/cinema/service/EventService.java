package com.example.demo.cinema.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.example.demo.cinema.model.Event;

import reactor.core.publisher.Mono;


@Service
public class EventService {

    private final String apiUrl = "https://www.apollokino.ee/xml/Events";

    public Mono<List<Event>> getEventDetails() {
        return WebClient.create(apiUrl)
                .get()
                .retrieve()
                .bodyToFlux(Event.class)
                .collectList();

    }
}
