import mongoose from "mongoose";
const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dignosedWith: {
      type: String,
      required,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    BloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
      required: true,
    },
    gender: {
      type: String,
      enum: ["M", "F", "O"],
      required: true,
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
  },
  { timestamps: true }
);
export const Patient = mongoose.model("Patient", patientSchema);
