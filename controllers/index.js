const express = require ('express');
const fs = require('fs');
const util = require(util);

//reading data from Json file
const readFromFile = async(datapath) => { 
    const asycReadFile = util.promisify (fs.readFileSync);
    const file = await asyncReadFile(path, 'utf-8');
    const model = JSON.parse(file);
    return model;
}

//writing data to Json file
const writeToFile = async(fileName, data) => {
    const path="./models/${fileName}.json";
    const asyncwriteFile = util.promisify(fs.writeFileSync); 
    const file = await asyncReadFile(path, 'utf-8');
    const model = JSON.parse(file); 
    model.push(data);
    }

//updating data from json file
const updateFile = async(fileName, data) => {
    const path="./models/${fileName}.json";
    const asyncwriteFile = util.promisify(fs.writeFileSync); 
    const file = await asyncReadFile(path, 'utf-8');
    const model = JSON.parse(file); 
    model.push(data);
    }

//deleting data from Json file
const deleteFromFile = async(fileName, id) => {
    const path = ".models/${fileName}.json";
    const file = await asyncReadFile(path, 'utf-8');
    const model = JSON.parse(file);
    
}

module.exports = {readFromFile, writeToFile,updateFile,deleteFromFile};