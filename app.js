const express = require("express");
const dotenv = require("dotenv");

const app = express();
const ejs = require("ejs");

app.set('view engine', 'ejs');
const path = require('path')
app.use(express.static('public'))


dotenv.config({path: './.env'});



app.get("/",function(req,res){
    res.render("index");
 });

 
app.listen(3000, function(){
    console.log("listening on 3000");
  });