import {Schema, model } from "mongoose";
import {toJSON} from "@reis/mongoose-to-json";

const categorySchema = new Schema({
    eventType:{type:String, enum:['wedding', 'conference', 'concert']},
    description:{type:String},
    image:{type:String},
    
});

categorySchema.plugin(toJSON);

 export const CategoryModel = model('Category', categorySchema)