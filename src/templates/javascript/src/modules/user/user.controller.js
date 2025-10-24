import { userService } from './user.service.js';

export const userController = {
  // GET /users
  getAllUsers: async (_req, res) => {
    const users = await userService.getAllUsers();
    res.status(200).json({
      status: 'success',
      data: users,
    });
  },

  // GET /users/:id
  getUserById: async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: user,
    });
  },

  // POST /users
  createUser: async (req, res) => {
    const user = await userService.createUser(req.body);
    res.status(201).json({
      status: 'success',
      data: user,
    });
  },

  // DELETE /users/:id
  deleteUser: async (req, res) => {
    await userService.deleteUser(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  },
};
