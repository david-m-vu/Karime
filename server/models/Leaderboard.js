import mongoose from "mongoose";

const LeaderboardSchema = mongoose.Schema(
    {
        ranking: {
            type: Array,
            default: []
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        }
        
    },
    { timestamps: true }
) 

const Leaderboard = new mongoose.model("Leaderboard", LeaderboardSchema);
export default Leaderboard;
