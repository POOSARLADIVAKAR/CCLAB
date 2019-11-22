var express = require('express');
const authRoutes = require('./routes/auth-routes');
const requestRoutes = require('./routes/request-routes');
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
const lostItemModel = require('./models/LostItem_model')
var bodyParser = require('body-parser'); //Parse data passed from post method and make it accessible

const app = express();

//sudo service mongod start
// run mongo after this
//sudo service mongod stop


app.use(cors());
app.use(passport.initialize());
app.use('/auth', authRoutes);
app.use('/requests', requestRoutes);
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
    console.log(req.body)
    complaintModel.find({Room_no : req.body.Room_no}).sort({Date_time : -1}).then((log)=>{
        console.log(log)
        // log.sort(function(a, b){return  (new Date(b.Date_time))-(new Date(a.Date_time)) });
        res.send(log)
    })
})

app.get('/Complaints/log',(req,res)=>{
    complaintModel.find({Solved : false}).sort({Date_time : -1}).then((log)=>{
        // log.sort(function(a, b){return  (new Date(b.Date_time))-(new Date(a.Date_time)) });
        res.send(log)
    })
    
})

app.get('/Complaints/solved',(req,res)=>{
    complaintModel.find({Solved : true}).sort({Date_time : -1}).then((solved)=>{
        res.send(solved)
    })
})
app.post('/Complaints/update',(req,res)=>{
    console.log("Data received")
    complaintModel.update({_id: req.body.id},{Solved:true}  ).then((updated)=>{
        console.log(updated)    
    })
    res.send("updated successfuly")
})

app.post('/Complaints/mycomplaints',(req,res)=>{
    complaintModel.find({Logged_user : req.body.email}).sort({Date_time : -1}).then((log)=>{
        // items.sort(function(a, b){return  (new Date(b.Date))-(new Date(a.Date)) }); 
        //already working sorting
        console.log(log)
        console.log(JSON.stringify(log))
        res.send(JSON.stringify(log))
    })
})

app.get('/Resources/getData',(req,res)=>{
    resourceModel.find({}).then((data)=>{
        res.send(JSON.stringify(data))
    })
})

app.post('/Resources/update',(req,res)=>{
    console.log(req.body)
    resourceModel.find({Room_no : req.body.Room_no}).then((items)=>{
        console.log(items)
    })

    resourceModel.update({Room_no : req.body.Room_no},{...req.body}).then((updated)=>{
        //res.send(updated)
        resourceModel.find({}).then((data)=>{
            res.send(JSON.stringify(data))
        })
    })
})

app.post('/Resources/insert',(req,res)=>{
    console.log(req.body)
    new resourceModel({

        Room_no : req.body.Room_no,
        Systems : req.body.Systems,
        Projector : req.body.Projector,
        Operating_systems : req.body.Operating_systems,
        Softwares : req.body.Softwares

    }).save().then((newResource)=>{
        console.log("Newly created Resource")
                console.log(newResource)
                res.send(newResource)
    })
})

app.post('/LostItem',(req,res)=>{
    console.log(req.body)
    new lostItemModel({
        Room_no : req.body.Room_no,
        Date : new Date(req.body.Date),
        Item : req.body.Item,
        Collected : false

    }).save().then((newItem)=>{
        console.log("Found a new Item")
                console.log(newItem)
                res.send(newItem)
    })
})

app.get('/getItems',(req,res)=>{
    lostItemModel.find({Collected :false}).then((items)=>{
        items.sort(function(a, b){return  (new Date(b.Date))-(new Date(a.Date)) });
        res.send(items)
    })
})

app.post('/returnedItem',(req,res)=>{
    console.log(req.body)
    lostItemModel.update({_id : req.body._id},{Collected : true}).then((updated)=>{
        res.send(updated)
    })
})


app.listen(4000, () => {
    console.log('app now listening for requests on port 4000');
});






