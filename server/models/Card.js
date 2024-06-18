import mongoose from "mongoose";

const CardSchema = new mongoose.Schema(
    {
        rarity: {
            type: String,
            required: true,
        },
        banner: {
            type: String,
        },
        group: {
            type: String,
            required: true,
        },
        isHolo: {
            type: Boolean,
            default: false
        },
        imagePath: {
            type: String,
            default: ""
        },
    },
    { timestamps: true }
)

const Card = mongoose.model("Card", CardSchema);
export default Card;