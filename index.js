import express, { Router } from 'express';
import 'dotenv/config'
import { dbconnection } from './config/db.js';
import eventRouter from './routes/event.js';




// creating an express APP
const app = express();

// applying middleware
app.use(express.json())

// connecting o database
dbconnection()



app.use(eventRouter)

 // listening to port

 const port = 4040
 app.listen(port, () =>{
    console.log(`listening to port ${port}`)
 })