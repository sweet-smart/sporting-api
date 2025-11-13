// routes/playerRoutes.js
import express from "express";
import { addPlayer, getPlayers } from "../Controller/playerController.js";
import { protect } from "../Middleware/authMiddleware.js";
import { authorizeRoles } from "../Middleware/roleMiddleware.js";

const router = express.Router();

router.post("/", protect, authorizeRoles("coach", "admin"), addPlayer);
router.get("/", getPlayers);

export default router;
