const express = require('express');     // just like the import express from ''express'
const app = express();

// route handlerher
// "/" watch requests trying to access
// get => GET INFO
// req => request (object representing the incoming request)
// res => Object representing the outgoing response
app.get('/', (req, res) =>{
    res.send({bye: 'buddy'});
});
// Dynamic port binding
const PORT = process.env.PORT || 5000;

// enviroment operation by the service or else default set to 5000
// app.listen(5000);
app.listen(PORT);

