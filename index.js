const express = require('express');
const fs = require('fs');
const staffRoute = require('./routes/staff')
const bodyParser = require('body-parser');
const app = express();

const port = 5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('./staff');

app.listen(port, () => {
    console.log("Server running on port " + port);
})