import { Router } from "express";
import { getCategories, postCategories } from "../controllers/cat_controller.js";
import { remoteUploads } from "../middleware/uploads.js";

// Create a router
const categoryRouter = Router();

// Define routes
categoryRouter.get('/categories', getCategories);
categoryRouter.post('/categories', remoteUploads.single('image'), postCategories);



// Export router
export default categoryRouter;
