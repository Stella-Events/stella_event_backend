import { Schema, model, Types } from "mongoose";
import {toJSON} from "@reis/mongoose-to-json"


//Creating a Schema
const eventSchema = new Schema({
    name:{type:String},
    categoryId:{type: Types.ObjectId, ref: 'Category'},
    date:{type:Date},
    duration:{type: String},
    price:{type:Number},
    tickets: [{ type: String }],
    location:{type:String},
    image:{type:String}
},{
    timestamps:true
});

eventSchema.plugin(toJSON);

export const EventModel = model('event', eventSchema)