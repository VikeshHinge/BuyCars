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
    bootspace:{type:String}
});

const Inventorymodel = mongoose.model('inventorymodel',inventorySchema)

module.exports={Inventorymodel}