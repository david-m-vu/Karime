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
        idolName: {
            type: String,
            default: ""
        },
        group: {
            type: String,
        },
        isHolo: {
            type: Boolean,
            default: false
        },
        imagePath: {
            type: String,
            default: "",
            required: true
        },
        imageName: {
            type: String, 
            default: "",
            required: true,
        },
    },
    { timestamps: true }
)

const Card = mongoose.model("Card", CardSchema);
export default Card;