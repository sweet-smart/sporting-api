// models/Match.js
import mongoose from "mongoose";

const matchSchema = new mongoose.Schema(
  {
    homeTeam: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },
    awayTeam: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },
    matchDate: { type: Date, required: true },
    venue: String,
    status: {
      type: String,
      enum: ["scheduled", "in-progress", "finished"],
      default: "scheduled",
    },
    result: {
      homeScore: { type: Number, default: 0 },
      awayScore: { type: Number, default: 0 },
    },
    stats: Object,
  },
  { timestamps: true }
);

export default mongoose.model("Match", matchSchema);
