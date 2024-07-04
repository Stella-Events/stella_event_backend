import { Router } from "express";
import { deleteEvent, getEvent, getEventId, patchEvent, postEvent } from "../controllers/controller.js";
import { remoteUploads } from "../middleware/uploads.js";

// Create a router 
const eventRouter = Router()

eventRouter.post('/events',remoteUploads.single('image'),postEvent);
eventRouter.get('/events', getEvent);
eventRouter.get('/events/:id',getEventId );
eventRouter.patch('/events/:id', patchEvent);
eventRouter.delete('/events/:id', deleteEvent );




// Export router
export default eventRouter;


//http://localhost:4040/events?filer={"date":{"$gte":"2024-09-19", "$lte":"2024-03-02"