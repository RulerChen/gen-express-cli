import { Request, Response, NextFunction } from 'express';
import { logger } from '#src/middlewares/logger.js';

// Custom error class
export class AppError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);

    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Error handler middleware
export const errorHandler = (err: Error | AppError, _req: Request, res: Response, _next: NextFunction) => {
  let statusCode = 500;
  let message = 'Internal Server Error';

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  } else {
    logger.error(`Unexpected Error: ${err.message}`);
    logger.error(err.stack);
  }

  res.status(statusCode).json({
    statusCode,
    message,
    ...(process.env.NODE_ENV === 'development' && {
      stack: err.stack,
    }),
  });
};
