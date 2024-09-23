const { uniq } = require('lodash');
const mongoose = require('mongoose');


const personSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        require:true
    },
    number:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        uniq:true
    },
    address:{
        type:String,
        require:true
    },
    salary:{
        type:Number,
        require:true
    }
})

const Person = mongoose.model('Person',personSchema)
module.exports =  Person;