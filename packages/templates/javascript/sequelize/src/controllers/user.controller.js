import HttpStatus from 'http-status-codes';

import userService from '../services/user.service.js';

async function createUser(req, res) {
  try {
    const { username, password } = req.body;
    const user = await userService.createUser(username, password);
    res.status(HttpStatus.CREATED).json({
      user,
    });
  } catch (err) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      error: err.message,
    });
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    res.status(HttpStatus.OK).json({
      users,
    });
  } catch (err) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      error: err.message,
    });
  }
}

async function getUserById(req, res) {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    res.status(HttpStatus.OK).json({
      user,
    });
  } catch (err) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      error: err.message,
    });
  }
}

async function updateUserById(req, res) {
  try {
    const { id } = req.params;
    const { username, password } = req.body;
    const user = await userService.updateUserById(id, username, password);
    res.status(HttpStatus.OK).json({
      user,
    });
  } catch (err) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      error: err.message,
    });
  }
}

async function deleteUserById(req, res) {
  try {
    const { id } = req.params;
    await userService.deleteUserById(id);
    res.status(HttpStatus.NO_CONTENT).json();
  } catch (err) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      error: err.message,
    });
  }
}

export default {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
