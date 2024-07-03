import express, { Router } from 'express';
import 'dotenv/config'
import { dbconnection } from './config/db.js';
import eventRouter from './routes/event.js';
import categoryRouter from './routes/category.js';
import expressOasGenerator from 'express-oas-generator'
import mongoose from 'mongoose';
import cors from "cors"




// creating an express app
const app = express();


// Documentation
expressOasGenerator.handleResponses(app, {
   alwaysServeDocs: true ,
   tags: ['categories', 'events'],
   mongooseModels:mongoose.modelNames(),
});

// applying middleware
app.use(express.json());
app.use(cors());


// use routes
app.use(eventRouter);
app.use(categoryRouter);

expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));

// connecting o database
dbconnection()





 // listening to port

 const port = 4040
 app.listen(port, () =>{
    console.log(`listening to port ${port}`)
 })