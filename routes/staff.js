const express = require('express');
const fs = require('fs');
const routes = express.Router();

const controlRoute = require('readFromFile, writeToFile,updateFile,deleteFromFile');


routes.route('/')
    .get(controlRoute.readFromFile('./staff/staff.json'))
    .post(controlRoute.writeToFile('./staff/staff.json'))
    // .put(staffs.updateFile)
    // .delete(staffs.deleteFromFile)

module.exports = routes