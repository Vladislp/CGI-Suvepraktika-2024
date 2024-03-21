package com.example.demo.cinema.service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class ShowService {

    private final String apiUrl = "https://www.apollokino.ee/xml/Schedule";
    private final WebClient webClient;

    public ShowService(WebClient.Builder webClientBuilder) {
        // Build WebClient with base URL
        this.webClient = webClientBuilder.baseUrl(apiUrl).build();
    }

    public String getShowData() {
        return webClient.get()
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
}
