#!/usr/bin/env nodejs

'use strict';

const Server = require('socket.io');
const io = new Server();

var teams = {
    red: 0,
    blue: 0
};

const express = require('express');

let app = express();

app.get('/', (req, res) => res.send('Hello World!'))

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
})

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