# Project: Flashcard-o-matic

## Project Description 

A local school has decided to put together a flashcard application, Flashcard-o-matic, to help their students study online. Teachers will use this application to create decks of flashcards for the subjects they teach, and students will study the decks. The school needs you to build the application that the students and teachers will use.

## Project setup
Follow the instructions below to get this project up and running on your own machine:


Run `npm install`

To run the tests, you can run the following command: 

`npm test`

Most of the tests in this project wait for content to load via the API before continuing the test. Before the implementation is complete, the content never loads so the test fails with a timeout. As a result, the tests will initially run slowly. It may take perhaps a minute or more for all the tests run. The tests will speed up as the implementation nears completion.

You can run the application using the following command:

`npm start`

The `start` command will start two servers concurrently:

- An API server, powered by json-server, running on `http://localhost:5000`
- A React application running on `http://localhost:3000`

To stop the servers from running, you can press `Ctrl + C`

### Running on Windows

If you are having problems running `npm start` on Windows you may need to run the React client and server in separate terminals. Open a terminal and run `npm run start:react` to start the react application. Open another terminal and run `npm run start:server` to run the server.

## Quick-start : Usage Overview

- Set the focus duration (default to 25 minutes, no less than 5 or more than 60).
- Set the break duration (default to 5 minutes, no less than 1 or more than 15).
- When the user clicks the "play" button, the timer starts.
- When the focus time expires, an alarm plays and then the break timer starts.
- When the break time expires, the alarm plays again and then the focus timer starts.

## Detailed instructions for use

### Initial Screen

The initial screen lets the user set the length of the focus and break and break sessions.

< Initial Screen img >

The "stop" button is disabled on the initial screen because the user has not yet started the timer.

When the user clicks the "play" button, the timer will always start a new focus session.

### Active Session Screen
After the user clicks the "play" button, the buttons to change the focus and break duration are disabled, and the session timer appears.

< Active Session Screen img>

The session timer shows the type of session, either "Focusing" or "On Break", the total duration of the session, the time remaining, and a progress bar showing how much of the session is complete.

### Paused Session Screen

If the user clicks the "pause" button, "paused" appears below the time remaining.

< Paused Session Screen img >

The session timer shows the type of session, either "Focusing" or "On Break", the total duration of the session, the time remaining, and a progress bar showing how much of the session is complete.

### Stopping a session

Stopping a session returns the application to the initial screen and the user is able to change the focus and break duration.

Clicking the "play" button will always start a new focus session.

## Technology

### Built with:

- This application uses Bootstrap 4 for styling and Open-Iconic icons for icons.
- React; Created with create-react-app


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

