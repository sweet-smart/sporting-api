// controllers/playerController.js
import Player from "../models/Player.js";

export const addPlayer = async (req, res) => {
  try {
    const player = await Player.create(req.body);
    res.status(201).json(player);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getPlayers = async (req, res) => {
  const players = await Player.find().populate("team", "name");
  res.json(players);
};
