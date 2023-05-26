const express = require('express');
const {Inventorymodel} = require('../Model/inventory.model.js');
const inventoryRouter = express.Router();
const {dealerAuthantication} = require('../middleware/dealersMiddleware.js')


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

inventoryRouter.post('/addpost',dealerAuthantication,async(req,res)=>{
    let newdata = req.body;
    console.log(newdata)
    res.send(newdata)
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