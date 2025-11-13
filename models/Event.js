// models/Event.js
import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    startDate: Date,
    endDate: Date,
    location: String,
    teams: [{ type: mongoose.Schema.Types.ObjectId, ref: "Team" }],
    description: String,
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
