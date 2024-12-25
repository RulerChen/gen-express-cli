import { type Request, type Response } from 'express';
import usersModel from '../models/user';

function getAllUsers(req: Request, res: Response): void {
  const users = usersModel.getUsers();
  res.status(200).json(users);
}

export default {
  getAllUsers,
};
