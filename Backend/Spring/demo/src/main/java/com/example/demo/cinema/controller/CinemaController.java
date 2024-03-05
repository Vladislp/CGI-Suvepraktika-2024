// One of tutorials used: "https://springjavatutorial.medium.com/how-to-create-a-rest-controller-in-spring-boot-6eec912bc522"

package com.example.demo.cinema.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.cinema.service.CinemaService;
/**
 * Controller class for handling cinema-related HTTP requests.
 */
@CrossOrigin(origins= "http://localhost:3000")
@RestController
@RequestMapping("/cinema")
public class CinemaController {

    @Autowired
    private CinemaService cinemaService;
    /**
     * Endpoint to retrieve cinema-related data.
     *
     * @return A string containing cinema data.
     */
    @GetMapping("/data")
    public String getCinemaData() {
        return cinemaService.getCinemaData();
    }
}
