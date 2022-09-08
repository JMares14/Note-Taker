const express = require('express');
const PORT =  process.env.PORT||3001;
const tests = require('./db/db.json');
const uniqid = require('uniqid')
const path = require('path');
const fs = require('fs');
const { json } = require('express');
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true}));

