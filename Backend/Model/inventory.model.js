const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema({
    engine:{type:String,required:true},
    model:{type:String,required:true},
    fuel:{type:Array,required:true},
    year:{type:Number,required:true},
    power:{type:String,required:true},
    mileage:{type:String,required:true},
    list_price:{type:String,required:true},
    colors:{type:Array,required:true},
    max_speed:{type:Number,required:true},
    img:{type:String,required:true},
    bootspace:{type:String},
    km_odeometer:{type:Number,required:true},
    major_scratches:{type:Array,required:true},
    paint:{type:String,required:true},
    accident_report:{type:Number,required:true},
    pre_buyers:{type:Number,required:true},
    location:{type:String,required:true},
    images:{type:Array,required:true},
    title:{type:String,required:true},
    description:{type:String,required:true}
});

const Inventorymodel = mongoose.model('marketplace_Inventory',inventorySchema)

module.exports={Inventorymodel}


