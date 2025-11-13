// routes/teamRoutes.js
import express from "express";
import { createTeam, getTeams } from "../Controller/teamController.js";
import { protect } from "../Middleware/authMiddleware.js";
import { authorizeRoles } from "../Middleware/roleMiddleware.js";

const router = express.Router();

router.post("/", protect, authorizeRoles("admin", "coach"), createTeam);
router.get("/", getTeams);

export default router;
