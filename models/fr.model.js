'use strict';
const {request,response}=require('express');
const mongoose=require('mongoose');

const frScema=new mongoose.Schema({
    name:{type:String},
    image:{type:String},
    price:{type:Number},
    email:{type:String}
})
const frModel=mongoose.model('myfrs',frScema);

module.exports=frModel;