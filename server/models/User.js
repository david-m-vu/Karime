import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
        type: String,
        min: 2,
        max: 50,
    },
    lastName: {
        type: String,
        min: 2,
        max: 50,
    },
    username: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    password: {
        type: String,
        required: true,
        min: 5,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,        
    },
    gender: {
        type: String,
    },
    profilePicturePath: {
        type: String,
        default: "",
    },
    isFirstTimeUser: {
        type: Boolean,
        default: true
    },
    hasLoggedInToday: {
        type: Boolean,
        default: false
    },
    friends: {
        type: Array,
        default: [],
    },
    collection: {
        type: Array,
        default: []
    },
    likes: {
        type: Map,
        of: Boolean
    },
    numTickets: Number,
    views: Number,

  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;