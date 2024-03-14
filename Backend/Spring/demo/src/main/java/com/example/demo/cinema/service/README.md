# Cinema Service Documentation
## Overview

The Cinema Service module consists of two Java classes: CinemaService and EventService. These classes are responsible for retrieving cinema-related data and event details from external APIs using the WebClient library in a Spring Boot application.
CinemaService.java

This class is a service component responsible for fetching general cinema-related data. It interacts with the Apollo Kino API to retrieve theater areas information.
## Purpose

    To provide functionality for retrieving cinema-related data from the Apollo Kino API.

## Methods

    getCinemaData(): Retrieves cinema data from the specified API endpoint.
        Returns: A string containing cinema data.

## Dependencies

    WebClient: Used for making HTTP requests to the external API.
    apiUrl: The base URL of the cinema data API.

# EventService.java

This class is a service component responsible for fetching details of cinema events. It interacts with the Apollo Kino API to retrieve information about upcoming events.
## Purpose

    To provide functionality for retrieving details of cinema events from the Apollo Kino API.

## Methods

    getEventDetails(): Retrieves event details from the specified API endpoint.
        Returns: A Mono containing a list of Event objects.

## Dependencies

    WebClient: Used for making HTTP requests to the external API.
    apiUrl: The base URL of the cinema events API.

# Service Component

A service component in Spring Boot is a class annotated with @Service that encapsulates business logic and performs operations such as data retrieval, processing, and manipulation. These services are typically used to delegate tasks and interact with other components of the application, such as controllers or repositories.

In this module, CinemaService and EventService are service components designed to handle specific tasks related to retrieving cinema-related data and event details, respectively. By encapsulating this functionality within dedicated service classes, the codebase becomes more modular, maintainable, and easier to test.
# How to Use

To utilize the functionality provided by the Cinema Service module, inject the CinemaService or EventService class into other components of your Spring Boot application where needed. Call the appropriate methods (getCinemaData() or getEventDetails()) to retrieve cinema data or event details as required by your application logic.
# Additional Resources

    WebClient Usage Tutorial: A tutorial on using WebClient for making HTTP requests in Spring Boot applications.

