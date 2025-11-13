// routes/matchRoutes.js
import express from "express";
import { scheduleMatch, getMatches } from "../Controller/matchController.js";
import { protect } from "../Middleware/authMiddleware.js";
import { authorizeRoles } from "../Middleware/roleMiddleware.js";

const router = express.Router();

router.post("/", protect, authorizeRoles("admin"), scheduleMatch);
router.get("/", getMatches);

export default router;
