import express from 'express';




// creating an express APP
 const app = express();








 // listening to port

 const port = 4040
 app.listen(port, () =>{
    console.log(`lisening to port ${port}`)
 })