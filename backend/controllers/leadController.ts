import type { Request, Response, NextFunction } from "express";
import Lead from "../models/Lead.ts";

export const createLead = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { fullName, email, company, jobTitle, teamSize, needs, areasOfInterest } = req.body;
    
    // Basic validation
    if (!fullName || !email) {
      return res.status(400).json({ status: "fail", message: "Full name and email are required" });
    }

    const newLead = new Lead({
      fullName,
      email,
      company,
      jobTitle,
      teamSize,
      needs,
      areasOfInterest
    });

    const savedLead = await newLead.save();
    res.status(201).json({ status: "success", data: savedLead });
  } catch (error) {
    next(error);
  }
};

export const getAllLeads = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json({ status: "success", results: leads.length, data: leads });
  } catch (error) {
    next(error);
  }
};

export const getLeadStats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const stats = await Lead.aggregate([
      {
        $group: {
          _id: "$teamSize",
          count: { $sum: 1 }
        }
      }
    ]);
    res.status(200).json({ status: "success", data: stats });
  } catch (error) {
    next(error);
  }
};
