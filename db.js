const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/leberwala')

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("connection stablish");
})

db.on('error',()=>{
    console.log(" Samthing went to wrong");
})

db.on('disconnected',()=>{
    console.log(" disconnected connection");
})

module.exports = db;