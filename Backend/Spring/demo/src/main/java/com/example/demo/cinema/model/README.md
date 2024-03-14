# Event Model
## Overview

The Event.java file represents a cinema event with its associated details. It serves as a model class to encapsulate information about cinema events.
## File Description

    File Name: Event.java
    Purpose: This file defines the Event class, which encapsulates various attributes of a cinema event such as ID, title, original title, production year, length in minutes, genres, short synopsis, rating, and images.
    Usage: The Event class is used to represent individual cinema events and is typically used in conjunction with other components of the application, such as controllers and services.

## Class Structure

    Attributes:
        id: The unique identifier of the event.
        title: The title of the event.
        originalTitle: The original title of the event.
        productionYear: The production year of the event.
        lengthInMinutes: The length of the event in minutes.
        genres: The genres of the event.
        shortSynopsis: A short synopsis of the event.
        rating: The rating of the event.
        images: An object containing image URLs associated with the event.

## Methods

    Getters and Setters: The class includes getter and setter methods for accessing and modifying the attributes of the event.
    Constructors: The class includes a default constructor and a parameterized constructor for creating instances of the Event class with specified details.

# Images Model
## Overview

The Images.java file represents the images associated with a cinema event. It serves as a model class to encapsulate image URLs associated with cinema events.
## File Description

    File Name: Images.java
    Purpose: This file defines the Images class, which encapsulates the URL of the medium-sized portrait image associated with a cinema event.
    Usage: The Images class is used to represent images associated with cinema events within the Event class.

## Class Structure

    Attributes:
        eventMediumImagePortrait: The URL of the medium-sized portrait image associated with the event.

## Methods

    Getters and Setters: The class includes getter and setter methods for accessing and modifying the eventMediumImagePortrait attribute.