const express = require('express');
const { format } = require('morgan');
const dotenv = require('dotenv').config({path:'./config/config'});
const morgan = require('morgan');

//Custom

const bootcammiddleware=require('./routes/bootcamproutes');

const app = express();

app.use(morgan("tiny"));

//Mounting Routes

app.use('/api/v1/bootcamp',bootcammiddleware);

const PORT = process.env.PORT||5000

app.listen(PORT,console.log(`Server Listening on ${PORT}`));