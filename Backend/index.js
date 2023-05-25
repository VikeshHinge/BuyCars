const express = require('express')
const connection = require('./Connection/db.js')
const {oemRouter} = require('./Routes/oemroutes.js')
const {inventoryRouter} = require('./Routes/inventoryroute.js')
require('dotenv').config();

const app = express()
app.use(express.json())

app.use('/oem',oemRouter)

app.use('/inventory',inventoryRouter)



app.listen(process.env.port, async()=>{
    try{
        await connection;
        console.log('DB is Connected')
     }
     catch(err){
         console.log(err)
     }
     console.log(`server running on ${process.env.port}`)
})