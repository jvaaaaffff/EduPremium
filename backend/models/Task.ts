import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ["pending", "in-progress", "completed"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Task", TaskSchema);
