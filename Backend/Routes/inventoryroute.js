const express = require('express');
const {Inventorymodel} = require('../Model/inventory.model.js');
const inventoryRouter = express.Router();


inventoryRouter.get('/',async(req,res)=>{
    let query = req.query
    try{
        const users = await Inventorymodel.find(query)
        res.send(users)
    }
    catch(err){
        res.send({"err":err})
    }
})

inventoryRouter.post('/addpost',async(req,res)=>{
    let newdata = req.body;
    res.send('POst')
})

inventoryRouter.patch('/updatepost',async(req,res)=>{
    let newdata = req.body;
    res.send('PATCH')
})

inventoryRouter.delete('/postdelete',async(req,res)=>{
    let newdata = req.body;
    res.send('Delete')
})


module.exports={inventoryRouter}