const express = require('express');
const {OEMmodel} = require('../Model/oem.model.js');
const oemRouter = express.Router();

oemRouter.get('/',async(req,res)=>{
    let query = req.query
    try{
        const users = await OEMmodel.find(query)
        res.send(users)
    }
    catch(err){
        res.send({"err":err})
    }
})


oemRouter.post('/addmodels',async(req,res)=>{
    let newdata = req.body;
    try{
        let data = new OEMmodel(newdata)
        await data.save()
        res.send({msg:'Post Success !'})
    }
    catch(err){
        res.send({"err":err})
    }
})


module.exports = {oemRouter}