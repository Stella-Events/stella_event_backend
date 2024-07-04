import express, { Router } from 'express';
import cors from 'cors'
import 'dotenv/config'
import { dbconnection } from './config/db.js';
import eventRouter from './routes/event.js';
import expressOasGenerator from 'express-oas-generator'
import mongoose from 'mongoose';




// creating an express app
const app = express();

// Documentation
expressOasGenerator.handleResponses(app, {
   alwaysServeDocs: true ,
   tags: ['categories', 'events'],
   mongooseModels:mongoose.modelNames(),
});

// applying middleware
app.use(cors())
app.use(express.json())
app.use(eventRouter)

expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));

// connecting o database
dbconnection()



 // listening to port
 const port = 4040
 app.listen(port, () =>{
    console.log(`listening to port ${port}`)
 })