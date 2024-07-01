import { Schema, model } from "mongoose";

//Creating a Schema

const eventSchema = new Schema({
    name:{type:String, required:true},
    date:{type:Date, required:true},
    price:{type:String, required:true},
    location:{type:String, required:true},
    flierUrl:{type:String, required:true}
},{
    timestamps:true
});

export const EventModel = model('event', eventSchema)