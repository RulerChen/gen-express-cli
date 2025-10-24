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

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type GetUserByIdInput = z.infer<typeof getUserByIdSchema>;
export type DeleteUserInput = z.infer<typeof deleteUserSchema>;
