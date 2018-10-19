#!/usr/bin/env nodejs

'use strict';

const Server = require('socket.io');
const io = new Server();

require('dotenv').config({ silent: true });

const express = require('express');

let app = express();

app.get('/', (req, res) => res.send('Hello World!'))

module.exports = app;