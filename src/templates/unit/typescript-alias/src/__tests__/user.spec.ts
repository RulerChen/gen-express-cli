import { jest } from '@jest/globals';
import { type Request, type Response } from 'express';
import UserController from '@/controllers/user';
import usersModel from '@/models/user';

interface User {
  name: string;
  description: string;
}

describe('getAllUsers', () => {
  it('should return all users', () => {
    const req = {} as unknown as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    usersModel.getUsers = jest.fn<() => User[]>().mockReturnValue([
      { name: 'RulerChen', description: 'Author of this project' },
    ]);

    UserController.getAllUsers(req, res);

    expect(usersModel.getUsers).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([
      { name: 'RulerChen', description: 'Author of this project' },
    ]);
  });
});
