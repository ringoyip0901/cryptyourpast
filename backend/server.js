const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const controller = require("./database/controller.js")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
const PORT = 4000; 

app.use(express.static(path.join(__dirname, '/../build')))

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/../index.html'))
})

app.post('/saveHistory', controller.saveHistory)

app.get('/getHistory', controller.getHistory)

app.listen(PORT, () => {
  console.log('Server is now running on localhost 4000')
});