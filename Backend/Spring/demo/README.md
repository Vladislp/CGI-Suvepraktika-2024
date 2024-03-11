# Cinema Backend

This project is the backend part of a cinema-related application. It provides an API to fetch cinema events from the Apollo Kino service.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- Retrieves cinema events from the Apollo Kino API.
- Provides a RESTful API for the frontend to consume.

## Technologies Used

- Spring Boot
- Java
- Gradle

## Getting Started

### Prerequisites

- Java Development Kit (JDK): [Download and Install JDK](https://www.oracle.com/java/technologies/javase-downloads.html)
- Apache Maven: [Download and Install Maven](https://maven.apache.org/)

### Installation

1. Clone the repository (I am using github Desktop for this):
   ![image](https://github.com/Vladislp/CGI-Suvepraktika-2024/assets/42935979/e90072cb-a00b-41bc-a2d9-b793a750b975)
2. Next, click her
   ![Screenshot 2024-03-11 113446](https://github.com/Vladislp/CGI-Suvepraktika-2024/assets/42935979/8b8f472d-c3b7-4d2f-89d1-6a0c3a511fcd)
3. Click the "Add" button and "Clone Repository"
   ![image](https://github.com/Vladislp/CGI-Suvepraktika-2024/assets/42935979/1780a94c-fe00-4462-a660-cfa2616158dd)
4. We need to copy adress from here (**HTTPS**)
   ![image](https://github.com/Vladislp/CGI-Suvepraktika-2024/assets/42935979/4a2b322b-8a77-4010-8d9b-cb5102fbbd2f)
5. We have repository now on our computer.

   ![image](https://github.com/Vladislp/CGI-Suvepraktika-2024/assets/42935979/3fdd31f1-fc1f-4749-9d34-cc0729477841)

### Usage
The backend server will be running on http://localhost:8080 by default.
1) Go to ![image](https://github.com/Vladislp/CGI-Suvepraktika-2024/assets/42935979/a9a5d2fc-d6d1-4412-a9ee-fdda2bf93f25)

2) Use ./gradlew bootRun and you should have result similar to this

![image](https://github.com/Vladislp/CGI-Suvepraktika-2024/assets/42935979/dcbf2cd2-0c4d-46b6-9998-8572fc860440)

3) If curious how to start front-end as well,

[Frontend Repository](https://github.com/Vladislp/CGI-Suvepraktika-2024/tree/main/FrontEnd/frontend#installation)


### API Endpoints (For now)

    GET /api/events: Retrieves a list of cinema events.
