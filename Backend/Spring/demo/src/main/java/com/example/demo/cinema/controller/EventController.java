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

@CrossOrigin(origins= "http://localhost:3000")
@RestController
@RequestMapping("/cinema")
public class EventController {
    @Autowired
    private EventService eventService;

    @GetMapping("/event")
    public Mono<List<Event>> getEventDetails() {
        return eventService.getEventDetails();
    }
}
