// Tutorial on WebClient Usage : https://www.youtube.com/watch?v=RHZgllzbjVQ

package com.example.demo.cinema.service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
/**
 * Service class for retrieving cinema-related data using WebClient.
 */
@Service
public class CinemaService {
    // The URL of the cinema data API
    private final String apiUrl = "https://www.apollokino.ee/xml/TheatreAreas";
    // WebClient for making HTTP requests
    private final WebClient webClient;
    /**
     * Constructor for the CinemaService class.
     *
     * @param webClientBuilder The builder for creating a WebClient instance.
     */
    public CinemaService(WebClient.Builder webClientBuilder) {
        // Build WebClient with base URL
        this.webClient = webClientBuilder.baseUrl(apiUrl).build();
    }
    /**
     * Retrieve cinema-related data from the specified API.
     *
     * @return A string containing cinema data.
     */
    public String getCinemaData() {
        // Perform GET request and retrieve the response body as a string
        return webClient.get()
                .retrieve()
                .bodyToMono(String.class)
                .block(); // blocking for simplicity, consider using reactive programming for non-blocking
    }
}
