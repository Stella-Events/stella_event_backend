import {Schema, model } from "mongoose";
import {toJSON} from "@reis/mongoose-to-json";

const categorySchema = new Schema({
    eventType:{type:String, enum:['wedding', 'conference'], required:true},
    description:{type:String},
    image:{type:String,required:true},
    
});

categorySchema.plugin(toJSON);

 export const CategoryModel = model('Category', categorySchema)