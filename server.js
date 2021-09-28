'use strict';
const express = require('express');

const cors = require('cors');

const axios = require('axios');

require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.json());
const mongoose =require('mongoose');

const PORT=process.env.PORT;
const MONGO=process.env.MONGO;

mongoose.connect(MONGO);

const allData=(request,response)=>{
    const url="https://fruit-api-301.herokuapp.com/getFruit";
    axios.get(url).then(result=>{
        response.json(result.data);
    })
}
 
const{addFav,getFav,deleteFav,updateFav}=require('./controllers/fr.controller');
app.get('/allData',allData);

app.get('/fav',getFav);
app.post('/fav',addFav);
app.delete('/fav/:fav_id',deleteFav)
app.put('/fav/:fav_id',updateFav)

app.listen(PORT)
