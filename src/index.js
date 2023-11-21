import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var Question_robots = function () {

};

Question_robots.prototype.init = function (questionKey, location, config) {
    this.questionKey = questionKey;
    this.location = location;
    this.config = config;

    var self = this;
    var afterSave = function () {
    };

    var afterCancel = function () {
    };

    ibobrCore.HTML5InitAnswerHandlers();

    //init save & cancel answer handlers pro tlačítka
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App config={config}/>
        </React.StrictMode>
    );
};

Question_robots.prototype.onlyShowInit = function (questionKey, location, config) {
    this.questionKey = questionKey;
    this.location = location;
    this.config = config;
    this.mode = 'onlyShowInit';
};

/**
 * Returns answer
 * @returns {string}
 */
Question_robots.prototype.answer = function () {
    return JSON.stringify(this.robots);
};

/**
 * Returns data for recovery
 * @returns {string}
 */
Question_robots.prototype.recoveryData = function () {
    return JSON.stringify({
        map: this.config.map,
        robots: this.robots,
        lastRobot1Command: this.lastRobot1Command,
        lastRobot2Command: this.lastRobot2Command,
        isSuccess: this.isSuccess
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

export default Question_robots;