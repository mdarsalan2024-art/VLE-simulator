const path = require('path');
const fs = require('fs');
const express = require('express');

const server = express.Router();


server.get('/description' , (req,res,next) => {
     res.render('description');
});

module.exports = server;
