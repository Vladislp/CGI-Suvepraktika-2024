package com.example.demo.cinema.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.cinema.service.NewsService;

@CrossOrigin(origins= "http://localhost:3000")
@RestController
@RequestMapping("/cinema")
public class NewsController {
    @Autowired
    private NewsService NewsService;


    @GetMapping("/news")
    public String getNewsData() {
        return NewsService.getNewsData();
    }
}
