#!/usr/bin/env nodejs

'use strict';

const Server = require('socket.io');
const io = new Server();

var teams = {
    red: 0,
    blue: 0
};

var count = {
    red: 0,
    blue: 0
};

var running = false;

const express = require('express');

let app = express();

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/clear', function (req, res) {
    teams = {
        red: 0,
        blue: 0
    };
    
    count = {
        red: 0,
        blue: 0
    };

    res.json({
        status: "ok"
    });
});

app.get('/count', function (req, res) {
    res.json(count);
});

app.get('/start', function (req, res) {
    running = true;
    res.json({
        running: running
    });
});


app.get('/stop', function (req, res) {
    running = false;
    res.json({
        running: running
    });
});

app.get('/join', function (req, res) {
    if (teams.red > teams.blue) {
        addTeamBlue(res);
    } else if (teams.red < teams.blue) {
        addTeamRed(res);
    } else {
        if(Math.random() > .5) {
            addTeamRed(res);
        } else {
            addTeamBlue(res);
        }
    }
});

app.get('/click/:team', function (req, res) {
    if (running) {
        if (req.param("team") === "red") {
            count.red++;
        } else if (req.param("team") === "blue") {
            count.blue++;
        }
    } 
    res.json(count);
});

app.get('/click/:team', function (req, res) {
    if (running) {
        if (req.param("team") === "red") {
            count.red++;
        } else if (req.param("team") === "blue") {
            count.blue++;
        }
    } 
    res.json(count);
});

function addTeamRed(res) {
    teams.red++;
    return res.json({
        team: "red",
        numbers: teams
    });
}

function addTeamBlue(res) {
    teams.blue++;
    return res.json({
        team: "blue",
        numbers: teams
    });
}


module.exports = app;