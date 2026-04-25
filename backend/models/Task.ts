import mongoose, { Model, Document } from "mongoose";

interface ITask extends Document {
  title: string;
  description?: string;
  status: string;
  createdAt: Date;
}

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ["pending", "in-progress", "completed"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

const Task: Model<ITask> = mongoose.models.Task || mongoose.model<ITask>("Task", TaskSchema);

export default Task;
