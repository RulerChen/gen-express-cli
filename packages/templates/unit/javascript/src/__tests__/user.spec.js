import { jest } from '@jest/globals';
import UserController from '../controllers/user.js';
import usersModel from '../models/user.js';

describe('getAllUsers', () => {
  it('should return all users', () => {
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    usersModel.getUsers = jest.fn().mockReturnValue(['user1', 'user2']);

    UserController.getAllUsers(req, res);

    expect(usersModel.getUsers).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(['user1', 'user2']);
  });
});
