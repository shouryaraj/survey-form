// .use kind of generic service, passport i want to know the user can use new googlestrategy
const passport = require('passport');
// app is the express module here app.get is routing after getting the webaddress
module.exports = (app) =>{
    app.get('/auth/google', 
    passport.authenticate('google', {
    scope: ['profile', 'email']      // we can access get drive, photos etcs
    })
)

app.get('/auth/google/callback', passport.authenticate('google'));

app.get('/api/current_user', (req, res) => {
    res.send(req.user);

});

app.get('/api/logout', (req, res) => {
    req.logout();
    // passport request inbuilt function, so just use it and kill the user
    res.send(req.user);
});

};

