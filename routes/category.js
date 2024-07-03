import { Router } from "express";
import { getCategories, postCategories } from "../controllers/cat_controller.js";
import { localUploads } from "../middleware/uploads.js";

// Create a router
const categoryRouter = Router();

// Define routes
categoryRouter.post('/categories', localUploads.single('image'), postCategories);
categoryRouter.get('/categories', getCategories);


// Export router
export default categoryRouter;
