const express = require('express');
const jwthandler = require('./../config/token')
const ECmodel = require('./../models/Requqest_models/extraClass_model')
const Pmodel = require('./../models/Requqest_models/placement_model')
const Wmodel = require('./../models/Requqest_models/workshop_model')
const Mmodel = require('./../models/Requqest_models/midsem_model')
const Cmodel = require('./../models/Requqest_models/compre_model')

const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/extraClasses/insert',(req,res)=>{
    console.log(req.body)
    // new ECmodel({

    // }).save().then((newECrequest)=>{
    //     res.send(newECrequest)
    // })
    res.send(req.body)
})

app.post('/placements/insert',(req,res)=>{
    console.log(req.body)
    // new Pmodel({

    // }).save().then((newPrequest)=>{
    //     res.send(newPrequest)
    // })
    res.send(req.body)
})

app.post('/workshops/insert',(req,res)=>{
    console.log(req.body)
    // new Wmodel({

    // }).save().then((newWrequest)=>{
    //     res.send(newWrequest)
    // })
    res.send(req.body)
})

app.post('/midsem/insert',(req,res)=>{
    console.log(req.body)
    // new Mmodel({

    // }).save().then((newMrequest)=>{
    //     res.send(newMrequest)
    // })
    res.send(req.body)
})

app.post('/compre/insert',(req,res)=>{
    console.log(req.body)
    // new Cmodel({

    // }).save().then((newCrequest)=>{
    //     res.send(newCrequest)
    // })
    res.send(req.body)
})






app.get('/extraClasses/getitems',(req,res)=>{
    res.send("in extraclasses")
})

app.get('/placements/getitems',(req,res)=>{
    res.send("in placements")
})

app.get('/workshops/getitems',(req,res)=>{
    res.send("in workshops")
})

app.get('/midsem/getitems',(req,res)=>{
    res.send("in midsem")
})

app.get('/compre/getitems',(req,res)=>{
    res.send("in compre")
})
module.exports = app;