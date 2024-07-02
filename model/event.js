import { Schema, model } from "mongoose";
import {toJSON} from "@reis/mongoose-to-json"


//Creating a Schema
const eventSchema = new Schema({
    name:{type:String, required:true},
    categoryId:{type: Types.ObjectId, ref: 'Category', required: true},
    date:{type:Date, required:true},
    time:{type: String},
    price:{type:Number, required:true},
    tickets: [{ type: String }],
    location:{type:String, required:true},
    flierUrl:{type:String, required:true}
},{
    timestamps:true
});

eventSchema.plugin(toJSON);

export const EventModel = model('event', eventSchema)