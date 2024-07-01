import express from 'express';
import 'dotenv/config'
import { dbconnection } from './config/db.js';




// creating an express APP
const app = express();
app.use(express.json())

// connecting o database
dbconnection()





 // listening to port

 const port = 4040
 app.listen(port, () =>{
    console.log(`listening to port ${port}`)
 })