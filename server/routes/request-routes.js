const express = require('express');
const jwthandler = require('./../config/token')
const ECmodel = require('./../models/Requqest_models/extraClass_model')
const Pmodel = require('./../models/Requqest_models/placement_model')
const Wmodel = require('./../models/Requqest_models/workshop_model')
const Mmodel = require('./../models/Requqest_models/midsem_model')
const Cmodel = require('./../models/Requqest_models/compre_model')
const sendEmail = require('./../sendEmail')

const bodyParser = require('body-parser');
var ObjectID = require('mongodb').ObjectID;
const app = express()
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/extraClasses/insert',(req,res)=>{
    // console.log(req.body)
    new ECmodel({
        User_email : req.body[`user_email`],
        User_Name : req.body[`username`],
        Course_No : req.body[`Course No`],
        Course_Title : req.body[`Course Title`],
        Class_Rooms : req.body[`Class Rooms`],
        Date : req.body.Date,
        Time_Start : req.body[`Time Start`],
        Time_end : req.body[`Time End`],
        Granted : false,
        Belongs_to : "extraClasses",
        Rejected :false,
        // PhoneNo : req.body[`Phone No`]
    }).save().then((newECrequest)=>{
        res.send(newECrequest)
    })
})

// app.post('/placements/insert',(req,res)=>{
    // console.log(req.body)
//     // new Pmodel({

//     // }).save().then((newPrequest)=>{
//     //     res.send(newPrequest)
//     // })
//     res.send(req.body)
// })

app.post('/workshops/insert',(req,res)=>{
    // console.log(req.body)
    new Wmodel({
        User_email : req.body[`user_email`],
        User_Name : req.body[`username`],
        Name_of_Workshop : req.body[`Name of Workshop`],
        Name_of_Club : req.body[`Name of Department/Club`],
        Class_Rooms : req.body[`Class Rooms`],
        Date : req.body.Date,
        Time_Start : req.body[`Time Start`],
        Time_end : req.body[`Time End`],
        Granted : false,
        Belongs_to : "workshops",
        Rejected :false,
        // PhoneNo : req.body[`Phone No`]
    }).save().then((newWrequest)=>{
        res.send(newWrequest)
    })
})

app.post('/midsem/insert',(req,res)=>{
    // console.log(req.body)
    new Mmodel({
        User_email : req.body[`user_email`],
        User_Name : req.body[`username`],
        Course_No : req.body[`Course No`],
        Course_Title : req.body[`Course Title`],
        Class_Rooms : req.body[`Class Rooms`],
        Date : req.body.Date,
        Time_Start : req.body[`Time Start`],
        Time_end : req.body[`Time End`],
        Granted : false,
        Belongs_to : "midsem",
        Rejected :false,
        // PhoneNo : req.body[`Phone No`]
    }).save().then((newMrequest)=>{
        res.send(newMrequest)
    })
})

app.post('/compre/insert',(req,res)=>{
    // console.log(req.body)
    new Cmodel({
        User_email : req.body[`user_email`],
        User_Name : req.body[`username`],
        Course_No : req.body[`Course No`],
        Course_Title : req.body[`Course Title`],
        Class_Rooms : req.body[`Class Rooms`],
        Date : req.body.Date,
        Time_Start : req.body[`Time Start`],
        Time_end : req.body[`Time End`],
        Granted : false,
        Belongs_to : "compre",
        Rejected :false,
        // PhoneNo : req.body[`Phone No`]
    }).save().then((newCrequest)=>{
      res.send(newCrequest)
    })
})





// send this to bookings page as history
app.get('/extraClasses/getitems',(req,res)=>{
    ECmodel.find({Granted : true}).sort({Date : 1}).then((data)=>{
        // data.sort(function(a, b){return  (new Date(b.Date))-(new Date(a.Date)) });
        // console.log(data)
        res.send(data)
    })
})

app.get('/placements/getitems',(req,res)=>{
    Pmodel.find({Granted : true}).sort({Date : 1}).then((data)=>{
        // data.sort(function(a, b){return  (new Date(b.Date))-(new Date(a.Date)) });
        // console.log(data)
        res.send(data)
    })
})

app.get('/workshops/getitems',(req,res)=>{
    Wmodel.find({Granted : true}).sort({Date : 1}).then((data)=>{
        // data.sort(function(a, b){return  (new Date(b.Date))-(new Date(a.Date)) });
        // console.log(data)
        res.send(data)
    })
})

app.get('/midsem/getitems',(req,res)=>{
    Mmodel.find({Granted : true}).sort({Date : 1}).then((data)=>{
        // data.sort(function(a, b){return  (new Date(b.Date))-(new Date(a.Date)) });
        // console.log(data)
        res.send(data)
    })
})

app.get('/compre/getitems',(req,res)=>{
    Cmodel.find({Granted : true}).sort({Date : 1}).then((data)=>{
        // data.sort(function(a, b){return  (new Date(b.Date))-(new Date(a.Date)) });
        // console.log(data)
        res.send(data)
    })
})

//send this to requests tab or page with a accept and reject also button
app.get('/all',(req,res)=>{
    // console.log("all requested")
    var data = new Array()
    ECmodel.find({Granted : false,Rejected : false}).sort({Date : 1}).then((ECdata)=>{
        // console.log(typeof(ECdata))
        data = data.concat(ECdata)
    }).then(()=>{
        Wmodel.find({Granted : false,Rejected : false}).sort({Date : 1}).then((Wdata)=>{
            // console.log(typeof(Wdata))
            data = data.concat(Wdata)
        }).then(()=>{
            Mmodel.find({Granted : false,Rejected : false}).sort({Date : 1}).then((Mdata)=>{
                // console.log(typeof(Mdata))
                data = data.concat(Mdata)
            }).then(()=>{
                Cmodel.find({Granted : false,Rejected : false}).sort({Date : 1}).then((Cdata)=>{
                    // console.log(typeof(Cdata))
                    data = data.concat(Cdata)
                }).then(()=>{
                    data.sort(function(a, b){return  (new Date(b.Date))-(new Date(a.Date)) });
                    // console.log(data)
                    res.send(data)
                })
            })
        })
    })
})


app.put('/extraClasses/update',(req,res)=>{
    req.body.Granted = true
    sendEmail(req.body.User_email, 'CC-Lab Request Accepted', "Your Request for ExtraClasses has been Accepted");
    ECmodel.findOneAndUpdate({_id : ObjectID(req.body._id)},{...req.body}).then((updated)=>{
        // console.log(updated)
        res.send(updated)
    })
})

app.put('/workshops/update',(req,res)=>{
    req.body.Granted = true
    sendEmail(req.body.User_email, 'CC-Lab Request Accepted', "Your Request for Workshop has been Accepted");
    Wmodel.findOneAndUpdate({_id : ObjectID(req.body._id)},{...req.body}).then((updated)=>{
        // console.log(updated)
        res.send(updated)
    })
})

app.put('/midsem/update',(req,res)=>{
    req.body.Granted = true
    sendEmail(req.body.User_email, 'CC-Lab Request Accepted', "Your Request for Midsem has been Accepted");
    Mmodel.findOneAndUpdate({_id : ObjectID(req.body._id)},{...req.body}).then((updated)=>{
        // console.log(updated)
        res.send(updated)
    })
})

app.put('/compre/update',(req,res)=>{
    req.body.Granted = true
    sendEmail(req.body.User_email, 'CC-Lab Request Accepted', "Your Request for Compre has been Accepted");
    Cmodel.findOneAndUpdate({_id : ObjectID(req.body._id)},{...req.body}).then((updated)=>{
        // console.log(updated)
        res.send(updated)
    })
})

app.put('/extraClasses/reject',(req,res)=>{
    console.log("Extraclasses reject")
    // console.log(req.body)
    // ECmodel.findOneAndRemove({_id: ObjectID(req.body._id) }).then((deleted)=>{
    //     console.log("Going to delete")
    //     console.log(deleted)
    //     console.log("Already deleted")
    //     res.send("Deleted Successfully")
    // })
    // res.send("Response received")
    sendEmail(req.body.User_email, 'CC-Lab Request Rejected', req.body.Comment);    
    req.body.Rejected = true
    req.body.Granted = false
    ECmodel.findOneAndUpdate({_id : ObjectID(req.body._id)},{...req.body}).then((updated)=>{
        // console.log(updated)
        res.send(updated)
    })
})

app.put('/workshops/reject',(req,res)=>{
    // Wmodel.findOneAndRemove({_id: ObjectID(req.body._id) }).then((deleted)=>{
    //     console.log("Going to delete")
    //     console.log(deleted)
    //     console.log("Already deleted")
    //     res.send("Deleted Successfully")
    // })
    req.body.Rejected = true
    req.body.Granted = false
    sendEmail(req.body.User_email, 'CC-Lab Request Rejected', req.body.Comment);
    Wmodel.findOneAndUpdate({_id : ObjectID(req.body._id)},{...req.body}).then((updated)=>{
        // console.log(updated)
        res.send(updated)
    })
})

app.put('/midsem/reject',(req,res)=>{
    // Mmodel.findOneAndRemove({_id: ObjectID(req.body._id) }).then((deleted)=>{
    //     console.log("Going to delete")
    //     console.log(deleted)
    //     console.log("Already deleted")
    //     res.send("Deleted Successfully")
    // })
    req.body.Rejected = true
    req.body.Granted = false
    sendEmail(req.body.User_email, 'CC-Lab Request Rejected', req.body.Comment);
    Mmodel.findOneAndUpdate({_id : ObjectID(req.body._id)},{...req.body}).then((updated)=>{
        // console.log(updated)
        res.send(updated)
    })
})


app.put('/compre/reject',(req,res)=>{
    // Cmodel.findOneAndRemove({_id: ObjectID(req.body._id) }).then((deleted)=>{
    //     console.log("Going to delete")
    //     console.log(deleted)
    //     console.log("Already deleted")
    //     res.send("Deleted Successfully")
    // })
    req.body.Rejected = true
    req.body.Granted = false
    sendEmail(req.body.User_email, 'CC-Lab Request Rejected', req.body.Comment);
    Cmodel.findOneAndUpdate({_id : ObjectID(req.body._id)},{...req.body}).then((updated)=>{
        // console.log(updated)
        res.send(updated)
    })
})




app.post('/mybookings/accepted',(req,res)=>{
    // console.log(req.body)
    var data = new Array()
    ECmodel.find({User_email : req.body.email,Granted:true}).sort({Date : 1}).then((ECdata)=>{
        data = data.concat(ECdata)
    }).then(()=>{
        Wmodel.find({User_email : req.body.email,Granted:true}).sort({Date : 1}).then((Wdata)=>{
            data = data.concat(Wdata)
        }).then(()=>{
            Mmodel.find({User_email : req.body.email,Granted:true}).sort({Date : 1}).then((Mdata)=>{
                data = data.concat(Mdata)
            }).then(()=>{
                Cmodel.find({User_email : req.body.email,Granted:true}).sort({Date : 1}).then((Cdata)=>{
                    data = data.concat(Cdata)
                }).then(()=>{
                    // console.log(data)
                    data.sort((a,b) => (a.Date < b.Date) ? 1 : ((b.Date < a.Date) ? -1 : 0)); 
                    res.send(data)
                })
            })
        })
    })
})

app.post('/mybookings/pending',(req,res)=>{
    // console.log(req.body)
    var data = new Array()
    ECmodel.find({User_email : req.body.email,Granted:false,Rejected:false}).sort({Date : 1}).then((ECdata)=>{
        data = data.concat(ECdata)
    }).then(()=>{
        Wmodel.find({User_email : req.body.email,Granted:false,Rejected:false}).sort({Date : 1}).then((Wdata)=>{
            data = data.concat(Wdata)
        }).then(()=>{
            Mmodel.find({User_email : req.body.email,Granted:false,Rejected:false}).sort({Date : 1}).then((Mdata)=>{
                data = data.concat(Mdata)
            }).then(()=>{
                Cmodel.find({User_email : req.body.email,Granted:false,Rejected:false}).sort({Date : 1}).then((Cdata)=>{
                    data = data.concat(Cdata)
                }).then(()=>{
                    // console.log(data)
                    data.sort((a,b) => (a.Date < b.Date) ? 1 : ((b.Date < a.Date) ? -1 : 0)); 
                    res.send(data)
                })
            })
        })
    })
})

app.post('/mybookings/rejected',(req,res)=>{
    // console.log(req.body)
    var data = new Array()
    ECmodel.find({User_email : req.body.email,Rejected:true}).sort({Date : 1}).then((ECdata)=>{
        data = data.concat(ECdata)
    }).then(()=>{
        Wmodel.find({User_email : req.body.email,Rejected:true}).sort({Date : 1}).then((Wdata)=>{
            data = data.concat(Wdata)
        }).then(()=>{
            Mmodel.find({User_email : req.body.email,Rejected:true}).sort({Date : 1}).then((Mdata)=>{
                data = data.concat(Mdata)
            }).then(()=>{
                Cmodel.find({User_email : req.body.email,Rejected:true}).sort({Date : 1}).then((Cdata)=>{
                    data = data.concat(Cdata)
                }).then(()=>{
                    // console.log(data)
                    data.sort((a,b) => (a.Date < b.Date) ? 1 : ((b.Date < a.Date) ? -1 : 0)); 
                    res.send(data)
                })
            })
        })
    })
})

app.post('/mybookings/search',(req,res)=>{
    // console.log(req.body)
    let str=req.body["search_string"]
    // console.log(str)
    currCards=req.body["data"]
    updatedCards = currCards.filter(function(item){
        if(item["Belongs_to"]==="extraClasses")
        {
            return item["Course_Title"].toLowerCase().search(str.toLowerCase()) !== -1;
        }
        else if(item["Belongs_to"]==="workshops")
        {
            return item["Name_of_Workshop"].toLowerCase().search(str.toLowerCase()) !== -1;
        }
        else if(item["Belongs_to"]==="midsems")
        {
            return item["Course_Title"].toLowerCase().search(str.toLowerCase()) !== -1;
        }
        else if(item["Belongs_to"]==="compre")
        {
            return item["Course_Title"].toLowerCase().search(str.toLowerCase()) !== -1;
        }
        })
        
    //   console.log("updated cardssssssssssssssss")
    //   console.log(updatedCards)
    res.send(updatedCards)
})

app.post('/extraClasses/search',(req,res)=>{
    // console.log(req.body)
    // console.log("called")
    ECmodel.find({Rejected: false,Granted:true,Class_Rooms:req.body["Room_no"]}).sort({Date_Time:-1}).then((searchResult)=>{
        res.send(searchResult)
    })
})

app.post('/placements/search',(req,res)=>{
    // console.log(req.body)
    // console.log("called")
    Pmodel.find({Rejected: false,Granted:true,Class_Rooms:req.body["Room_no"]}).sort({Date_Time:-1}).then((searchResult)=>{
        res.send(searchResult)
    })
})

app.post('/workshops/search',(req,res)=>{
    // console.log(req.body)
    // console.log("called")
    Wmodel.find({Rejected: false,Granted:true,Class_Rooms:req.body["Room_no"]}).sort({Date_Time:-1}).then((searchResult)=>{
        res.send(searchResult)
    })
})

app.post('/midsems/search',(req,res)=>{
    // console.log(req.body)
    // console.log("called")
    Mmodel.find({Rejected: false,Granted:true,Class_Rooms:req.body["Room_no"]}).sort({Date_Time:-1}).then((searchResult)=>{
        res.send(searchResult)
    })
})

app.post('/compre/search',(req,res)=>{
    // console.log(req.body)
    // console.log("called")
    Cmodel.find({Rejected: false,Granted:true,Class_Rooms:req.body["Room_no"]}).sort({Date_Time:-1}).then((searchResult)=>{
        res.send(searchResult)
    })
})

app.post('/newRequests/search',(req,res)=>{
    // console.log("search in all requests")
    // console.log(req.body)
    // console.log("called")
    var arr= new Array()
    ECmodel.find({Rejected: false,Granted:false,Class_Rooms:req.body["Room_no"]}).sort({Date_Time:-1}).then((ecData)=>{
        arr=arr.concat(ecData)
        Wmodel.find({Rejected: false,Granted:false,Class_Rooms:req.body["Room_no"]}).sort({Date_Time:-1}).then((wData)=>{
            arr=arr.concat(wData)
            Mmodel.find({Rejected: false,Granted:false,Class_Rooms:req.body["Room_no"]}).sort({Date_Time:-1}).then((mData)=>{
                arr=arr.concat(mData)
                Cmodel.find({Rejected: false,Granted:false,Class_Rooms:req.body["Room_no"]}).sort({Date_Time:-1}).then((cData)=>{
                    arr=arr.concat(cData)
                }).then(()=>{
                    // console.log("gathered data")
                    // console.log(arr)
                    res.send(arr)
                })
            })
        })
    })
})


module.exports = app;
