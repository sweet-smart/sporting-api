// controllers/teamController.js
import Team from "../models/Team.js";

export const createTeam = async (req, res) => {
  try {
    const team = await Team.create(req.body);
    res.status(201).json(team);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getTeams = async (req, res) => {
  const teams = await Team.find().populate("players coach", "name");
  res.json(teams);
};
