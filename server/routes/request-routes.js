const express = require('express');
const jwthandler = require('./../config/token')
const ECmodel = require('./../models/Requqest_models/extraClass_model')
const Pmodel = require('./../models/Requqest_models/placement_model')
const Wmodel = require('./../models/Requqest_models/workshop_model')
const Mmodel = require('./../models/Requqest_models/midsem_model')
const Cmodel = require('./../models/Requqest_models/compre_model')

const bodyParser = require('body-parser');
var ObjectID = require('mongodb').ObjectID;
const app = express()
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/extraClasses/insert',(req,res)=>{
    console.log(req.body)
    new ECmodel({
        User_email : req.body[`user email`],
        User_Name : req.body[`username`],
        Course_No : req.body[`Course No`],
        Course_Title : req.body[`Course Title`],
        Class_Rooms : req.body[`Class Rooms`],
        Date : req.body.Date,
        Time_Start : req.body[`Time Start`],
        Time_end : req.body[`Time End`],
        Granted : false,
        Belongs_to : "extraClasses"
    }).save().then((newECrequest)=>{
        res.send(newECrequest)
    })
})

// app.post('/placements/insert',(req,res)=>{
//     console.log(req.body)
//     // new Pmodel({

//     // }).save().then((newPrequest)=>{
//     //     res.send(newPrequest)
//     // })
//     res.send(req.body)
// })

app.post('/workshops/insert',(req,res)=>{
    console.log(req.body)
    new Wmodel({
        User_email : req.body[`user email`],
        User_Name : req.body[`username`],
        Name_of_Workshop : req.body[`Name of Workshop`],
        Name_of_Club : req.body[`Name of Department/Club`],
        Class_Rooms : req.body[`Class Rooms`],
        Date : req.body.Date,
        Time_Start : req.body[`Time Start`],
        Time_end : req.body[`Time End`],
        Granted : false,
        Belongs_to : "workshops"
    }).save().then((newWrequest)=>{
        res.send(newWrequest)
    })
})

app.post('/midsem/insert',(req,res)=>{
    console.log(req.body)
    new Mmodel({
        User_email : req.body[`user email`],
        User_Name : req.body[`username`],
        Course_No : req.body[`Course No`],
        Course_Title : req.body[`Course Title`],
        Class_Rooms : req.body[`Class Rooms`],
        Date : req.body.Date,
        Time_Start : req.body[`Time Start`],
        Time_end : req.body[`Time End`],
        Granted : false,
        Belongs_to : "midsem"
    }).save().then((newMrequest)=>{
        res.send(newMrequest)
    })
})

app.post('/compre/insert',(req,res)=>{
    console.log(req.body)
    new Cmodel({
        User_email : req.body[`user email`],
        User_Name : req.body[`username`],
        Course_No : req.body[`Course No`],
        Course_Title : req.body[`Course Title`],
        Class_Rooms : req.body[`Class Rooms`],
        Date : req.body.Date,
        Time_Start : req.body[`Time Start`],
        Time_end : req.body[`Time End`],
        Granted : false,
        Belongs_to : "compre"
    }).save().then((newCrequest)=>{
      res.send(newCrequest)
    })
})





// send this to bookings page as history
app.get('/extraClasses/getitems',(req,res)=>{
    ECmodel.find({Granted : true}).sort({Date : 1}).then((data)=>{
        console.log(data)
        res.send(data)
    })
})

app.get('/placements/getitems',(req,res)=>{
    Pmodel.find({Granted : true}).sort({Date : 1}).then((data)=>{
        console.log(data)
        res.send(data)
    })
})

app.get('/workshops/getitems',(req,res)=>{
    Wmodel.find({Granted : true}).sort({Date : 1}).then((data)=>{
        console.log(data)
        res.send(data)
    })
})

app.get('/midsem/getitems',(req,res)=>{
    Mmodel.find({Granted : true}).sort({Date : 1}).then((data)=>{
        console.log(data)
        res.send(data)
    })
})

app.get('/compre/getitems',(req,res)=>{
    Cmodel.find({Granted : true}).sort({Date : 1}).then((data)=>{
        console.log(data)
        res.send(data)
    })
})

//send this to requests tab or page with a accept and reject also button
app.get('/all',(req,res)=>{
    console.log("all requested")
    var data = new Array()
    ECmodel.find({Granted : false}).sort({Date : 1}).then((ECdata)=>{
        // console.log(typeof(ECdata))
        data = data.concat(ECdata)
    }).then(()=>{
        Wmodel.find({Granted : false}).sort({Date : 1}).then((Wdata)=>{
            // console.log(typeof(Wdata))
            data = data.concat(Wdata)
        }).then(()=>{
            Mmodel.find({Granted : false}).sort({Date : 1}).then((Mdata)=>{
                // console.log(typeof(Mdata))
                data = data.concat(Mdata)
            }).then(()=>{
                Cmodel.find({Granted : false}).sort({Date : 1}).then((Cdata)=>{
                    // console.log(typeof(Cdata))
                    data = data.concat(Cdata)
                }).then(()=>{
                    // console.log(data)
                    res.send(data)
                })
            })
        })
    })
})


app.put('/extraClasses/update',(req,res)=>{
    req.body.Granted = true
    ECmodel.findOneAndUpdate({_id : ObjectID(req.body._id)},{...req.body}).then((updated)=>{
        console.log(updated)
        res.send(updated)
    })
})

app.put('/workshops/update',(req,res)=>{
    req.body.Granted = true
    Wmodel.findOneAndUpdate({_id : ObjectID(req.body._id)},{...req.body}).then((updated)=>{
        console.log(updated)
        res.send(updated)
    })
})

app.put('/midsem/update',(req,res)=>{
    req.body.Granted = true
    Mmodel.findOneAndUpdate({_id : ObjectID(req.body._id)},{...req.body}).then((updated)=>{
        console.log(updated)
        res.send(updated)
    })
})

app.put('/compre/update',(req,res)=>{
    req.body.Granted = true
    Cmodel.findOneAndUpdate({_id : ObjectID(req.body._id)},{...req.body}).then((updated)=>{
        console.log(updated)
        res.send(updated)
    })
})

app.put('/extraClasses/reject',(req,res)=>{
    console.log("Extraclasses reject")
    // console.log(req.body)
    ECmodel.findOneAndRemove({_id: ObjectID(req.body._id) }).then((deleted)=>{
        console.log("Going to delete")
        console.log(deleted)
        console.log("Already deleted")
        res.send("Deleted Successfully")
    })
    // res.send("Response received")
})

app.put('/workshops/reject',(req,res)=>{
    Wmodel.findOneAndRemove({_id: ObjectID(req.body._id) }).then((deleted)=>{
        console.log("Going to delete")
        console.log(deleted)
        console.log("Already deleted")
        res.send("Deleted Successfully")
    })
})

app.put('/midsem/reject',(req,res)=>{
    Pmodel.findOneAndRemove({_id: ObjectID(req.body._id) }).then((deleted)=>{
        console.log("Going to delete")
        console.log(deleted)
        console.log("Already deleted")
        res.send("Deleted Successfully")
    })
})


app.put('/compre/reject',(req,res)=>{
    Cmodel.findOneAndRemove({_id: ObjectID(req.body._id) }).then((deleted)=>{
        console.log("Going to delete")
        console.log(deleted)
        console.log("Already deleted")
        res.send("Deleted Successfully")
    })
})

module.exports = app;