import mongoose, { Mongoose } from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      reqired: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodos: [
      {
        type: Mongoose.Schema.types.ObjectId,
        ref: "SubTodo",
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
