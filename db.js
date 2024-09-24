const mongoose = require('mongoose');
require('dotenv').config();



// const uri = process.env.MONGO_URL_LOCAL; 

const uri = process.env.MONGO_URL; 

// mongoose.connect('mongodb://127.0.0.1/leberwala')
mongoose.connect(uri)

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