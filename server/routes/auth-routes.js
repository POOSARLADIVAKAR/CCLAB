const router = require('express').Router();
const passport = require('passport');
const passportSetup=require('./../config/passport-setup');
const userModel=require('./../models/user-model')
const jwthandler = require('./../config/token')

router.get('/google', passport.authenticate('google', { scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
    ]
},{ failureRedirect: '/' }));

router.get('/google/redirect', passport.authenticate('google',{ failureRedirect: '/' }), (req, res) => {
    // console.log('called in redirect '); 
    // console.log(req)
    // const user_string_json = JSON.stringify(req.user)
    
    const user = {username : req.user.username , email : req.user.email , photo : req.user.photo}
    const user_token = jwthandler.generate_token(user);
    // console.log(user_token)
    var bitsMail = /bits-pilani.ac.in/;
    if(!bitsMail.test(user.email)){
        res.redirect('http://localhost:3000');
    }
    res.redirect('http://localhost:3000/?user-token='+user_token);    
    // res.send(req.user);
});

module.exports = router;