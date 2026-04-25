import { Router } from "express";
import { getAllTasks, createTask, updateTask, deleteTask } from "../controllers/taskController.ts";
import { createLead, getAllLeads, getLeadStats } from "../controllers/leadController.ts";

const router = Router();

// Health route
router.get("/health", (req, res) => {
  res.status(200).json({ status: "success", message: "API is working!" });
});

// Tasks CRUD
router.route("/tasks")
  .get(getAllTasks)
  .post(createTask);

router.route("/tasks/:id")
  .patch(updateTask)
  .delete(deleteTask);

// Lead Capture
router.route("/leads")
  .get(getAllLeads)
  .post(createLead);

router.get("/leads/stats", getLeadStats);

export default router;

