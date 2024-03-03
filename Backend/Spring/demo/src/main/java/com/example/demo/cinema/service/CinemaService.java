// Tutorial on WebClient Usage : https://www.youtube.com/watch?v=RHZgllzbjVQ

package com.example.demo.cinema.service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class CinemaService {

    private final String apiUrl = "https://www.apollokino.ee/xml/TheatreAreas";

    private final WebClient webClient;

    public CinemaService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl(apiUrl).build();
    }

    public String getCinemaData() {
        return webClient.get()
                .retrieve()
                .bodyToMono(String.class)
                .block(); // blocking for simplicity, consider using reactive programming for non-blocking
    }
}
