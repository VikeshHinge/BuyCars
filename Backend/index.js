const express = require('express')
const connection = require('./Connection/db.js')
const {oemRouter} = require('./Routes/oemroutes.js')
const {inventoryRouter} = require('./Routes/inventoryroute.js')
const {dealerRouter} = require('./Routes/dealersroute.js')
const {userRouter} = require('./Routes/usersroute.js')
require('dotenv').config();

const app = express()
app.use(express.json())

app.use('/oem',oemRouter)
app.use('/inventory',inventoryRouter)

app.use('/dealer',dealerRouter)
app.use('/users',userRouter)


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