# WikiTest
Wikipedia Watchlist Tests

This repository contains Cypress tests for the Wikipedia page to perform the following tasks:

Add two pages to the watchlist.
Remove one article from the watchlist.
Ensure that the second article is still present in the watchlist.
Go to the article in the watchlist and verify that the title matches.
Getting Started

To run these tests locally, follow the instructions below.

Prerequisites
Node.js installed on your machine.
Cypress installed globally or as a dev dependency in your project.
Installation
Clone this repository to your local machine.

bash
Copy code
git clone https://github.com/Camelion30/wikipedia-watchlist-tests.git
Navigate to the project directory.

bash
Copy code
cd wikipedia-watchlist-tests
Install the dependencies.

bash
Copy code
npm install
Configuration
Before running the tests, make sure to update the following variables in the cypress/integration/spec.js file:

UserIdInput: Camelion30.
UserPasswordInput: omersari2286
WikiWatchList: "https://en.wikipedia.org/wiki/Special:Watchlist".
TestData1 and TestData2: Galatasaray and Manchester United. (Variables are changeable)
TestUrl1 and TestUrl2: URLs of the articles you want to add to the watchlist.
Running the Tests

To run the tests, use one of the following commands:

Run tests in the Cypress Test Runner:

bash
Copy code
npm run cypress:open
Run tests in headless mode:

bash
Copy code
npm run cypress:run
Test Scenarios

Adds two pages to the watchlist and removes one.
Verifies that the removed article is not present in the watchlist.
Verifies that the other article is still present in the watchlist.
Goes to the article in the watchlist and verifies that the title matches.
