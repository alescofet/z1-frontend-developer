# Welcome to my frontend technical test for Z1

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Before starting

##### Before running the app you must type "npm install" in the terminal. 
##### Once you have installed all packages type "npm run start" in the terminal.
##### To run tests open another terminal and type "npm run test" to open the cypress GUI or type "npm run test-hl" to just run the tests in headless mode.

## Features

#####This app homepage let's you click a button that open a "camera" component where you'll click on the objective and this will trigger an API call that will respond with an "Approved" or "Rejected" state, after that the state will be saved.

#####If the photo is "Approved" it'll show the idCard with a green border and an "Accepted" label until you reload the page and if the photo is "Rejected" it'll show the idCard with a red border and a "Rejected" label but this will have a purple button that let's you retake the photo.