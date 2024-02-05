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

export default {
  createUser,
};
