import { Schema, model,Types } from "mongoose";
import {toJSON} from "@reis/mongoose-to-json";



//Creating a Schema
const eventSchema = new Schema({
    name:{type:String, required:true},
    categoryId:{type: Types.ObjectId, ref: 'Category'},
    date:{type:Date, required:true},
    time:{type: String, required:true},
    price:{type:Number, required:true},
    ticket: { type: String, required:true},
    location:{type:String, required:true},
    image:{type:String },
},{
    timestamps:true
});

eventSchema.plugin(toJSON);
export const EventModel = model('event', eventSchema)