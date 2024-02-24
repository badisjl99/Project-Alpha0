
const express = require('express');
const ejs = require('ejs') ;
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express() ;

const movieRouter = require('./routers/movieRouter');

dotenv.config();
const port = process.env.PORT || 3000;


app.set('view engine','ejs');

app.use('/',movieRouter);



mongoose.connect("mongodb+srv://badissnake7:CGntJrkzGhDHx9Yi@cluster0.gnyg3mm.mongodb.net/moviesdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
  });









app.listen(port,()=>{
console.log(`Server Works Correctly https://localhost:${port} `);
});






