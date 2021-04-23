const express = require('express');
const config = require('config');
const morgan = require('morgan');

//Custom
const bootcammiddleware=require('./routes/bootcamproutes');

const app = express();

//Body Parser
app.use(express.json());

app.use(morgan("tiny"));

//Mounting Routes

app.use('/api/v1/bootcamp',bootcammiddleware);

const PORT = config.get("PORT");

app.listen(PORT,console.log(`Server Listening on ${PORT}`));