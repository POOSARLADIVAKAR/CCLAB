const router = require('express').Router();
const passport = require('passport');
const passportSetup=require('./../config/passport-setup');
const userModel=require('./../models/user-model')

router.get('/google', passport.authenticate('google', { scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
    ]
},{ failureRedirect: '/' }));

router.get('/google/redirect', passport.authenticate('google',{ failureRedirect: '/' }), (req, res) => {
    console.log('called in redirect '); 
    // res.redirect('/');
    res.send(req.user);
});

module.exports = router;