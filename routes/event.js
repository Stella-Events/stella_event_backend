import { Router } from "express";
import { getEvent, postEvent } from "../controllers/controller";

// Creating a router app
const eventRouter = Router()

eventRouter.post('/events',postEvent );
eventRouter.get('/events', getEvent);
eventRouter.get('/events/:id', );
eventRouter.patch('/events/:id', );
eventRouter.delete('/events/:id', );










export default eventRouter;

