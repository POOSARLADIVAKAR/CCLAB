var express = require('express');
const authRoutes = require('./routes/auth-routes');
const keys = require('./config/keys');
const passport=require('passport');
const passportSetup = require('./config/passport-setup');
const cookieSession=require('cookie-session');
const mongoose = require('mongoose');
const cors= require('cors');
const userModel = require('./models/user-model');
const resourceModel = require('./models/Resource_model')
const cookieParser = require('cookie-parser')
const jwthandler = require("./config/token")
const complaintModel = require('./models/Complaint_model')
var bodyParser = require('body-parser'); //Parse data passed from post method and make it accessible

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
app.use(cookieParser())
app.use(bodyParser.json()); //for any json i.e from front end
app.use(bodyParser.urlencoded({ extended: false })) //for any url data eg:postman data

mongoose.connect('mongodb://127.0.0.1:27017/myapp',{useNewUrlParser: true},() => {
    console.log('connected to mongodb');
}).catch(err => console.error(err)) ;

const db=mongoose.connection;
db.on('error',console.error.bind(console,'MongoDb Error'));


app.get('/',(req,res)=>{
    console.log('requested `/` route');
    // res.redirect("http://localhost:4000/auth/google")
    res.send('in /')
});
// app.get('/query',(req,res)=>{
//     console.log('in query')
//     console.log(req)
//     console.log(req.query.token)
//     // // res.send(JSON.stringify(req.token))
//     // res.send(req.query.token)
//     res.send('in query')
// })

app.post('/Complaints',(req,res)=>{
    console.log(req.body)
    complaintModel.find({Logged_user : req.body.email,Room_no : req.body.room ,Issue : req.body.desc,}).then((Complaint)=>{
        if(Complaint.length !=0 ){
            console.log("Alredy found")
            console.log(Complaint)
            res.send(Complaint)
        }
        else{
            new complaintModel({
                Logged_user : req.body.email,
                Room_no : req.body.room,
                Date_time : req.body.date,
                System_no : req.body.system,
                Issue : req.body.desc,
                Solved : false
            }).save().then((newComplaint)=>{
                console.log("Newly created complaint")
                console.log(newComplaint)
                res.send(newComplaint)
            })
        }
    })
})

app.post('/Complaints/search',(req,res)=>{
    // console.log(req.body)
    res.send(req.body)
})

app.get('/Complaints/log',(req,res)=>{
    complaintModel.find({Solved : false}).sort({Date_time : -1}).then((log)=>{
        // console.log(log)
        res.send(log)
    })
    
})

app.get('/Complaints/solved',(req,res)=>{
    complaintModel.find({Solved : true}).sort({Date_time : -1}).then((solved)=>{
        // console.log(solved)
        res.send(solved)
    })
})
app.post('/Complaints/update',(req,res)=>{
    // console.log(req.body)
    // console.log(req.body._id)
    // res.send(req.body)
    console.log("Data received")
    complaintModel.update({_id: req.body.id},{Solved:true}  ).then((updated)=>{
        console.log(updated)    
    })
    res.send("updated successfuly")
})

app.post('/Complaints/mycomplaints',(req,res)=>{
    // console.log(req.body)
    complaintModel.find({Logged_user : req.body.email}).sort({Date_time : -1}).then((log)=>{
        console.log(log)
        console.log(JSON.stringify(log))
        res.send(JSON.stringify(log))
    })
    // res.send("Successful request")
})

app.post('/Resources/display',(req,res)=>{
    resourceModel.find({Room_no : req.body.Room_no}).then((data)=>{
        res.send(JSON.stringify(data))
    })
})

app.post('/Resources/update',(req,res)=>{
    resourceModel.update({Room_no : req.body.Room_no},{...req.bdy}).then((updated)=>{
        res.send(updated)
    })
    res.send("updated successfuly")
})

app.post('/Resources/insert',(req,res)=>{
    new resourceModel({
        //.....
        //.....
    }).save((newResource)=>{
        console.log("Newly created Resource")
                console.log(newResource)
                res.send(newResource)
    })
})

app.listen(4000, () => {
    console.log('app now listening for requests on port 4000');
});






