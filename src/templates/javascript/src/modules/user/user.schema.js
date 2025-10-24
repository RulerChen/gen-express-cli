import { z } from 'zod';

export const createUserSchema = z.object({
  body: z.object({
    name: z.string().min(2, 'Name must be at least 2 characters').max(50),
    email: z.email('Invalid email address'),
  }),
});

export const getUserByIdSchema = z.object({
  params: z.object({
    id: z.uuid('Invalid user ID'),
  }),
});

export const deleteUserSchema = z.object({
  params: z.object({
    id: z.uuid('Invalid user ID'),
  }),
});
