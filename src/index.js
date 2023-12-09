import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GameBoard from "./components/GameBoard";

function Question_robotsJiranek() {

let playable = true;
let robotAnswer1 = "";
let robotAnswer2 = "";
let robotPozice1;
let robotPozice2;
let completed = false;
let map;

    Question_robotsJiranek.prototype.init = function (questionKey, location, config) {
        this.questionKey = questionKey;
        this.location = location;
        this.config = config;

        var self = this;


        //init save & cancel answer handlers pro tlačítka
        const root = ReactDOM.createRoot(document.getElementById('root'));
        console.log(config);
            root.render(
                <React.StrictMode>
                    <GameBoard data={config} odpoved={saveAnswer} readOnly={playable} gameState={stavHry}/>
                </React.StrictMode>
            );
    };

    function stavHry(e) {
        robotAnswer1 = e.robot1;
        robotAnswer2 = e.robot2;
        robotPozice1 = e.pozice1;
        robotPozice2 = e.pozice2;
        completed = e.completed;
        map = e.actualBoard;
    }


    Question_robotsJiranek.prototype.onlyShowInit = function (questionKey, location, config) {
        this.questionKey = questionKey;
        this.location = location;
        this.config = config;
        playable = false;
        console.log("play " + playable);
        console.log("odpoved " + robotAnswer1);
        const root = ReactDOM.createRoot(document.getElementById('root'));
        console.log(config);
        root.render(
            <React.StrictMode>
                <GameBoard data={config} robot1={robotAnswer1} robot2={robotAnswer2} readOnly={playable}/>
            </React.StrictMode>
        );
    };

    function saveAnswer(odp) {
        robotAnswer1 = odp.robot1;
        robotAnswer2 = odp.robot2;
        completed = odp.completed;
        console.log(robotAnswer1);
        console.log(robotAnswer2);
        console.log("správně?: " + completed);
    }

    Question_robotsJiranek.prototype.answer = function () {
      const odpoved = {robotAnswer1, robotAnswer2, completed, map};
      return odpoved;
    };

    /**
     * Returns data for recovery
     * @returns {string}
     */
    Question_robotsJiranek.prototype.recoveryData = function () {
        const stav = {robotAnswer1, robotAnswer2, robotPozice1, robotPozice2, completed, map};
        return stav;
    };

    /**
     * Restore application and disable moving
     * @param data
     */
    Question_robotsJiranek.prototype.restore = function (data) {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        console.log(config);
        root.render(
            <React.StrictMode>
                <GameBoard data={data} odpoved={saveAnswer} robot1={robotAnswer1} robot2={robotAnswer2} readOnly={playable} gameState={stavHry}/>
            </React.StrictMode>
        );

    };
}
export default Question_robotsJiranek;