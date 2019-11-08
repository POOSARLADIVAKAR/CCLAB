const router = require('express').Router();
const jwthandler = require('./../config/token')

router.get('/extraClasses',(req,res)=>{
    res.send("in extraclasses")
})

router.get('/placements',(req,res)=>{
    
})

router.get('/workshops',(req,res)=>{
    
})

router.get('/midsem',(req,res)=>{
    
})

router.get('/compre',(req,res)=>{
    
})
module.exports = router;