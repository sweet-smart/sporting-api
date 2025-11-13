// controllers/eventController.js
import Event from "../models/Event.js";

export const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getEvents = async (req, res) => {
  const events = await Event.find().populate("teams", "name");
  res.json(events);
};
