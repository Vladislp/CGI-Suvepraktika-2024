package com.example.demo.cinema.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.cinema.service.LanguageService;

@CrossOrigin(origins= "http://localhost:3000")
@RestController
@RequestMapping("/cinema")
public class LanguageController {
    @Autowired
    private LanguageService LanguageService;


    @GetMapping("/language")
    public String getLanguageData() {
        return LanguageService.getLanguageData();
    }
}
