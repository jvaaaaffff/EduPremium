import type { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("API Error:", err);

  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";
  let errors: any = null;

  // Mongoose Validation Error
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = 'Validation Error';
    errors = Object.values(err.errors).map((el: any) => el.message);
  }

  // Mongoose Duplicate Key Error
  if (err.code === 11000) {
    statusCode = 400;
    const duplicateField = Object.keys(err.keyValue)[0];
    message = `Duplicate field value: ${duplicateField}. Please use another value!`;
  }

  // Mongoose CastError (invalid ObjectId)
  if (err.name === 'CastError') {
    statusCode = 400;
    message = `Invalid ${err.path}: ${err.value}.`;
  }

  res.status(statusCode).json({
    status: statusCode >= 400 && statusCode < 500 ? "fail" : "error",
    statusCode,
    message,
    ...(errors && { errors }),
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
