import mongoose, { Model, Document } from "mongoose";

interface ILead extends Document {
  fullName: string;
  email: string;
  company?: string;
  jobTitle?: string;
  teamSize?: string;
  needs?: string;
  areasOfInterest?: string[];
  status: string;
  source: string;
  createdAt: Date;
  updatedAt: Date;
}

const LeadSchema = new mongoose.Schema(
  {
    fullName: { 
      type: String, 
      required: [true, 'Full name is required'],
      trim: true,
      minlength: [2, 'Full name must be at least 2 characters long']
    },
    email: { 
      type: String, 
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please provide a valid email address']
    },
    company: { type: String, trim: true },
    jobTitle: { type: String, trim: true },
    teamSize: { 
      type: String,
      enum: {
        values: ['1-10', '11-50', '51-200', '201-1000', '1000+'],
        message: '{VALUE} is not a valid team size'
      }
    },
    needs: { type: String, trim: true },
    areasOfInterest: [{ 
      type: String,
      enum: ['AI & Machine Learning', 'Product Management', 'Data Science', 'Executive Leadership', 'Other']
    }],
    status: {
      type: String,
      enum: ['New', 'Contacted', 'Qualified', 'Lost'],
      default: 'New'
    },
    source: { type: String, default: "Inquiry Form" },
  },
  { timestamps: true }
);

const Lead: Model<ILead> = mongoose.models.Lead || mongoose.model<ILead>("Lead", LeadSchema);

export default Lead;
