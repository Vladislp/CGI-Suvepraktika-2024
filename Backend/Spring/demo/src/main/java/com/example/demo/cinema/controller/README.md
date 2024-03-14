# Cinema Controller
## Overview

The CinemaController.java file is a Spring Boot controller class responsible for handling HTTP requests related to cinema data. It provides endpoints for retrieving cinema-related information.
## File Description

    File Name: CinemaController.java
    Purpose: This file defines the CinemaController class, which is annotated with @RestController to indicate that it is a controller class for handling HTTP requests. It includes methods to handle requests related to cinema data.
    Tutorial Used: The controller class implementation is based on the tutorial available at Spring Java Tutorial - How to Create a REST Controller in Spring Boot.

## Endpoints

    GET /cinema/data: Endpoint to retrieve cinema-related data.
        Method: GET
        Path: /cinema/data
        Description: Returns a string containing cinema data.
        Usage: Accessing this endpoint will trigger the getCinemaData() method in the CinemaService class to retrieve cinema data.

# Event Controller
## Overview

The EventController.java file is a Spring Boot controller class responsible for handling HTTP requests related to cinema events. It provides endpoints for retrieving details of cinema events.
## File Description

    File Name: EventController.java
    Purpose: This file defines the EventController class, which is annotated with @RestController to indicate that it is a controller class for handling HTTP requests. It includes methods to handle requests related to cinema events.
    Issue Reference: The implementation of this controller class is based on Issue #9.
    Note: The controller class is expected to work in conjunction with a service class (EventService) to retrieve event details.

## Endpoints

    GET /cinema/event: Endpoint to retrieve details of cinema events.
        Method: GET
        Path: /cinema/event
        Description: Returns a reactive Mono containing a list of events.
        Usage: Accessing this endpoint will trigger the getEventDetails() method in the EventService class to retrieve details of cinema events.