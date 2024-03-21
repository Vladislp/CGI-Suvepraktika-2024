package com.example.demo.cinema.service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class LanguageService {

    private final String apiUrl = "https://www.apollokino.ee/xml/News";
    private final WebClient webClient;

    public LanguageService(WebClient.Builder webClientBuilder) {
        // Build WebClient with base URL
        this.webClient = webClientBuilder.baseUrl(apiUrl).build();
    }

    public String getLanguageData() {
        return webClient.get()
                .retrieve()
                .bodyToMono(String.class)
                .block();
    }
    
}
