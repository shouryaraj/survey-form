const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;  // We need strategy property
const keys = require('../config/key');
const mongoose =require('mongoose');

const User = mongoose.model('users'); // creating user class i.e is model

// Call serializeUser with the user to generate the identifying piece of info that is storing in cookie
passport.serializeUser((user, done) =>{
    done(null, user.id);   // monogo generate unique ID why? we can very easily have multi sign option

});

// deserializeUser taking back from cookie
passport.deserializeUser((id, done) => {

    User.findById(id)  //asynchronous
    .then(user => {
        done(null, user);
    })
    

});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback' //coming back from auth
    // done means that we are done with our callback 
    }, (accessToken, refreshToken, profile, done)=> {
        // searching for existing user in the Database
        User.findOne({ googleId: profile.id}) // .then 
        // This is the way we have to do becasue of asynchronous
         .then((existingUser) => {
            if (existingUser)
            {
                // We already have a record with given profile ID
                done(null, existingUser);
            }
            else{
                // we don't have a user record with this ID, make a new record
                new User({ googleId: profile.id})
                .save() //saving everytime in profile.Id
                // to get the notification saved properly from mongoDB
                .then(user => done(null, user));
                
            }

         })

     
    })
); 