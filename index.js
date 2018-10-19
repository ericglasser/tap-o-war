#!/usr/bin/env nodejs

'use strict';

require('dotenv').config({ silent: true });

const express = require('express');

let app = express();

app.get('/', (req, res) => res.send('Hello World!'))

module.exports = app;