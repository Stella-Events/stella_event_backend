import express from 'express';




// creating an express APP
const app = express();
app.use(express.json())








 // listening to port

 const port = 4040
 app.listen(port, () =>{
    console.log(`lisening to port ${port}`)
 })