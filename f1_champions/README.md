# F1 Champions
F1 Champions application shows F1 world champions form 2005 to 2015 and allows the user to select an year to get all the records of the races for the selected year. It also highlights the world champion from the list.

## Prerequisite
Please make sure following tools are installed/configured before trying this.<br>
* nodejs<br>
* npm (package manger)<br>
* Any web browser

## Installation
1. Download the project form (https://github.com/harini-arnolda/frontend-challenge.git).

2. Use the npm package manager to install needed packages.

```bash
cd f1_champions
npm install
```
3. Start the project using the bellow scripts

```bash
npm start
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

## How it has been implemented.

### Project uses the react-redux architecture. Please refer the below details to understand how it has been implemented.

The project was setup using [Create React App](https://github.com/facebook/create-react-app) and customized to facilitate the requirements.<br>

The Code structure used is a slight variation of "Rails-Style" structure where actions, components and reducers are put into separate folders.<br>

Redux is used in order to manage the state of the application.<br>

Redux-Thunk is used to handle asynchronous actions in Redux.<br>

The project consist of two container components which interacts with the redux store and presentational components to render html elements and to pass props through the container tree Provider is used.<br>

Styling is mainly done with react-bootstarp to ensure accessibility and responsiveness. Customized styles have also been included.<br>

Axios is used to make XMLHttpRequests from the browser.
