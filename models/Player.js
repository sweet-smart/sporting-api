// models/Player.js
import mongoose from "mongoose";

const playerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    position: String,
    number: Number,
    team: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
    stats: {
      matches: { type: Number, default: 0 },
      goals: { type: Number, default: 0 },
      assists: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Player", playerSchema);
