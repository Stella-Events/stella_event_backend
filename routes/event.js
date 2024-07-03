import { Router } from "express";
import { deleteEvent, getEvent, getEventId, patchEvent, postEvent } from "../controllers/controller.js";
import { remoteUploads } from "../middleware/uploads.js";

// Creating a router app
const eventRouter = Router()

eventRouter.post('/events',remoteUploads.single('image'),postEvent);
eventRouter.get('/events', getEvent);
eventRouter.get('/events/:id',getEventId );
eventRouter.patch('/events/:id', patchEvent);
eventRouter.delete('/events/:id', deleteEvent );










export default eventRouter;

