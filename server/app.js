var express = require('express');
const authRoutes = require('./routes/auth-routes');
const keys = require('./config/keys');
const passport=require('passport');
const passportSetup = require('./config/passport-setup');
const cookieSession=require('cookie-session');
const mongoose = require('mongoose');
const cors= require('cors');
const userModel = require('./models/user-model');
const app = express();

//sudo service mongod start
// run mongo after this
//sudo service mongod stop




app.use(cors());
app.use(passport.initialize());
app.use('/auth', authRoutes);
app.use(passport.session());
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));


mongoose.connect('mongodb://127.0.0.1:27017/myapp',{useNewUrlParser: true},() => {
    console.log('connected to mongodb');
}).catch(err => console.error(err)) ;

const db=mongoose.connection;
db.on('error',console.error.bind(console,'MongoDb Error'));


app.get('/',(req,res)=>{
    console.log('requested `/` route');
    res.send('request accpted');
});

app.listen(4000, () => {
    console.log('app now listening for requests on port 4000');
});






