const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    prise:{
        type:Number,
        require:true,
        default:20
    },
    test:{
        type:String,
        enum:['sweet','spicy','sour'],
        require:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredience:{
        type:[String],
        default:[]
    }
})

const Menu = mongoose.model('Menu',menuSchema)

module.exports = Menu;