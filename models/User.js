const mongoose = require('mongoose');  // importing the library

const {Schema } = mongoose; // const Schema = mongoose.Schema; same thing
// In mongo we can have random property in each use, it dosen't say to fix.
// But in Mongoose we loose this random property becasue it wants to know in advance all the property.

// define indiviual property
const userSchema = new Schema({
    googleId:  String
                // Value that is assign is always would be string

});

// creating a model here users: name of the collection
// UserSchema that is ID
mongoose.model('users', userSchema)