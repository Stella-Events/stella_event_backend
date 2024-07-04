import { Schema, model,Types } from "mongoose";
import {toJSON} from "@reis/mongoose-to-json";



//Creating a Schema
const eventSchema = new Schema({
    name:{type:String, required:true},
    categories:{type:String,required:true,
        enum:['Concerts','Conferences','Wedding','Tours']
    },
    date:{type:Date, required:true},
    time:{type: String, required:true},
    price:{type:Number, required:true},
    location:{type:String, required:true},
    image:{type:String },
    status:{type:String, required:true,
        enum:['REGULAR','VIP','PLATINUM','GOLD']
    },
    descripion:{type:String},
},{
    timestamps:true
});

eventSchema.plugin(toJSON);
export const EventModel = model('event', eventSchema)