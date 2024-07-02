import { Router } from "express";
import { deleteEvent, getEvent, getEventId, patchEvent, postEvent } from "../controllers/controller";

// Creating a router app
const eventRouter = Router()

eventRouter.post('/events',postEvent );
eventRouter.get('/events', getEvent);
eventRouter.get('/events/:id',getEventId );
eventRouter.patch('/events/:id', patchEvent);
eventRouter.delete('/events/:id', deleteEvent );










export default eventRouter;

