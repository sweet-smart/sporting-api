// models/Team.js
import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    coach: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    founded: Number,
    city: String,
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: "Player" }],
  },
  { timestamps: true }
);

export default mongoose.model("Team", teamSchema);
