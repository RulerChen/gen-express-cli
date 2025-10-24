import { AppError } from '#src/middlewares/error-handler.js';

// In-memory database (replace with real database in production)
const users = [];

export const clearUsers = () => {
  users.length = 0;
};

export const userService = {
  // Get all users
  getAllUsers: async () => {
    return users;
  },

  // Get user by ID
  getUserById: async (id) => {
    const user = users.find((u) => u.id === id);
    if (!user) {
      throw new AppError('User not found', 404);
    }
    return user;
  },

  // Create user
  createUser: async (data) => {
    const existingUser = users.find((u) => u.email === data.email);
    if (existingUser) {
      throw new AppError('User with this email already exists', 409);
    }

    const newUser = {
      id: crypto.randomUUID(),
      ...data,
      createdAt: new Date(),
    };

    users.push(newUser);
    return newUser;
  },

  // Delete user
  deleteUser: async (id) => {
    const userIndex = users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      throw new AppError('User not found', 404);
    }

    users.splice(userIndex, 1);
  },
};
