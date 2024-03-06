package com.example.demo.cinema.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.cinema.model.Event;
import com.example.demo.cinema.service.EventService;

import reactor.core.publisher.Mono;
/**
 * Controller class for handling cinema event-related HTTP requests.
 * https://github.com/Vladislp/CGI-Suvepraktika-2024/issues/9
 */
@CrossOrigin(origins= "http://localhost:3000")
@RestController
@RequestMapping("/cinema")
public class EventController {
    @Autowired
    private EventService eventService;
    /**
     * Endpoint to retrieve details of cinema events.
     *
     * @return A reactive Mono containing a list of events.
     */
    @CrossOrigin(origins= "http://localhost:3000")
    @GetMapping("/event")
    public Mono<List<Event>> getEventDetails() {
        return eventService.getEventDetails();
    }
}
