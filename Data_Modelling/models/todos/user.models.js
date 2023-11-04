import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      max: [12, "Max 12 password characters Allowed"],
      min: [6, "password must be at least 6 characters"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
