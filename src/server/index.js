const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const aylien = require('aylien_textapi');
const dotenv = require('dotenv');
dotenv.config();


const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

//Setting up TextApi
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

//A post request to analyse text using Aylien API
app.post('/analyseText', analyseText);

/**
 * @description Posts data fetched from user input and sends it for text sentiment analysis
 * @param {Object} request - contains the data passed from client
 * @param {Object} response - response to be sent back to client
 */
function analyseText(request, response) {
    textapi.sentiment({
        text: request.body.text,
        mode: request.body.mode
      }, (error, apiResponse) => {
        response.send(apiResponse);
      });
}

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});


