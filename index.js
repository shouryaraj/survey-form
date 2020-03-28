const express = require('express');     // just like the import express from ''express'
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport  = require('passport');

const keys = require('./config/key');
// const passportConfig = require('./services/passport'); not returing anything hence 
require('./models/User');
require("./services/passport");


mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        // time out to storage of cookie
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days to millisecond

        // key that encrpt 
        keys: [keys.cookieKey] // additional level of security

    })
)
app.use(passport.initialize());
app.use(passport.session());

// calling function from authRoutes using express module
require('./routes/authRoutes')(app);




// Dynamic port binding
const PORT = process.env.PORT || 5000;

// enviroment operation by the service or else default set to 5000
// app.listen(5000);
app.listen(PORT);


// route handlerher
// "/" watch requests trying to access
// get => GET INFO
// req => request (object representing the incoming request)
// res => Object representing the outgoing response
// Test
// app.get('/', (req, res) =>{
//     res.send({bye: 'buddy'});
// });