import type { Request, Response, NextFunction } from "express";
import Task from "../models/Task.ts";

export const getAllTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json({ status: "success", results: tasks.length, data: tasks });
  } catch (error) {
    next(error);
  }
};

export const createTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.body.title) {
        return res.status(400).json({ status: "fail", message: "Task title is required" });
    }
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();
    res.status(201).json({ status: "success", data: savedTask });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { 
        new: true,
        runValidators: true 
    });
    
    if (!updatedTask) {
        return res.status(404).json({ status: "fail", message: "Task not found" });
    }

    res.status(200).json({ status: "success", data: updatedTask });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
        return res.status(404).json({ status: "fail", message: "Task not found" });
    }
    res.status(204).json({ status: "success", data: null });
  } catch (error) {
    next(error);
  }
};
