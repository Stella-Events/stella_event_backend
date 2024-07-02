import { Schema, model,Types } from "mongoose";



//Creating a Schema
const eventSchema = new Schema({
    name:{type:String},
    categoryId:{type: Types.ObjectId, ref: 'Category'},
    date:{type:Date},
    time:{type: String},
    price:{type:Number},
    tickets: [{ type: String }],
    location:{type:String},
    flierUrl:{type:String}
},{
    timestamps:true
});

export const EventModel = model('event', eventSchema)