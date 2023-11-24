import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GameBoard from "./components/GameBoard";

function Question_robots() {

let playable = true;
let robotAnswer1 = "";
let robotAnswer2 = "";

    Question_robots.prototype.init = function (questionKey, location, config) {
        this.questionKey = questionKey;
        this.location = location;
        this.config = config;

        var self = this;


        ibobrCore.HTML5InitAnswerHandlers();

        //init save & cancel answer handlers pro tlačítka
        const root = ReactDOM.createRoot(document.getElementById('root'));
        console.log(config);
            root.render(
                <React.StrictMode>
                    <GameBoard data={config} odpoved={Question_robots.prototype.answer} finish={Question_robots.prototype.check} readOnly={playable}/>
                </React.StrictMode>
            );
    };


    Question_robots.prototype.onlyShowInit = function (questionKey, location, config) {
        this.questionKey = questionKey;
        this.location = location;
        this.config = config;
        playable = false;
        console.log("play" + playable);
        console.log("odpoved " + robotAnswer1);
        const root = ReactDOM.createRoot(document.getElementById('root'));
        console.log(config);
        root.render(
            <React.StrictMode>
                <GameBoard data={config} robot1={JSON.stringify(robotAnswer1)} robot2={JSON.stringify(robotAnswer2)} readOnly={playable}/>
            </React.StrictMode>
        );
    };


    Question_robots.prototype.answer = function (odp) {
        robotAnswer1 = odp.robot1;
        robotAnswer2 = odp.robot2;
        console.log(robotAnswer1);
        console.log(robotAnswer2);
    };

    /**
     * Returns data for recovery
     * @returns {string}
     */
    Question_robots.prototype.recoveryData = function () {
        return JSON.stringify({
            map: this.config.map,
            robots: this.robots,
            lastRobot1Command: robotAnswer1,
            lastRobot2Command: robotAnswer2
        });
    };

    /**
     * Restore application and disable moving
     * @param data
     */
    Question_robots.prototype.restore = function (data) {
        if (data) {
            var stored_data = JSON.parse(data);
            this.lastRobot1Command = stored_data.lastRobot1Command;
            this.lastRobot2Command = stored_data.lastRobot2Command;
            this.robots = stored_data.robots;
            this.isSuccess = stored_data.isSuccess;
            this.completed = true;
            this.render();
        }

    };
}
export default Question_robots;