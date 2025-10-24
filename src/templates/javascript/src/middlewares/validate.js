import { ZodError } from 'zod';
import { AppError } from './error-handler.js';

export const validate = (schema) => async (req, _res, next) => {
  try {
    await schema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = error.issues.map((issue) => ({
        path: issue.path.join('.'),
        message: issue.message,
      }));
      return next(new AppError(`Validation Error: ${JSON.stringify(errors)}`, 400));
    } else {
      next(error);
    }
  }
};
