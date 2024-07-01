import mongoose from 'mongoose';
import 'dotenv/config'


 const dbConnect = process.env.Mongo_url
 
 export const dbconnection = () => {
    mongoose.connect(dbConnect).then(

        console.log('database connected')
    )
 }