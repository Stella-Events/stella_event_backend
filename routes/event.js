import { Router } from "express";
import { deleteEvent, getEvent, getEventId, patchEvent, postEvent } from "../controllers/controller.js";
import { localUploads } from "../middleware/uploads.js";

// Create a router 
const eventRouter = Router()


// Define routes
eventRouter.post('/events',localUploads.single('image'),postEvent);
eventRouter.get('/events', getEvent);
eventRouter.get('/events/:id',getEventId );
eventRouter.patch('/events/:id', patchEvent);
eventRouter.delete('/events/:id', deleteEvent );




// Export router
export default eventRouter;