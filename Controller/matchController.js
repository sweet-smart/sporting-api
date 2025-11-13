// controllers/matchController.js
import Match from "../models/Match.js";
import mongoose from "mongoose";

export const scheduleMatch = async (req, res) => {
  try {
    const { homeTeam, awayTeam, matchDate, venue } = req.body;

    // Validate that homeTeam and awayTeam are valid ObjectIds
    if (!mongoose.Types.ObjectId.isValid(homeTeam)) {
      return res.status(400).json({ message: "Invalid homeTeam ObjectId" });
    }
    if (!mongoose.Types.ObjectId.isValid(awayTeam)) {
      return res.status(400).json({ message: "Invalid awayTeam ObjectId" });
    }

    const match = await Match.create({ homeTeam, awayTeam, matchDate, venue });
    res.status(201).json(match);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getMatches = async (req, res) => {
  const matches = await Match.find().populate("homeTeam awayTeam", "name");
  res.json(matches);
};
