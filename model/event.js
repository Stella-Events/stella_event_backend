import { Schema, model } from "mongoose";
import {toJSON} from "@reis/mongoose-to-json"
//Creating a Schema

const eventSchema = new Schema({
    name:{type:String, required:true},
    categoryId:{type: Types.ObjectId, ref: 'Category', required: true},
    date:{type:Date, required:true},
    price:{type:String, required:true},
    location:{type:String, required:true},
    flierUrl:{type:String, required:true}
},{
    timestamps:true
});

eventSchema.plugin(toJSON);

export const EventModel = model('event', eventSchema)