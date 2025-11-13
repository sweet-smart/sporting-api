// routes/eventRoutes.js
import express from "express";
import { createEvent, getEvents } from "../Controller/eventController.js";
import { protect } from "../Middleware/authMiddleware.js";
import { authorizeRoles } from "../Middleware/roleMiddleware.js";

const router = express.Router();

router.post("/", protect, authorizeRoles("admin"), createEvent);
router.get("/", getEvents);

export default router;
