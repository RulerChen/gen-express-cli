import User from '../models/user.model.js';

async function createUser(username, password) {
  return await User.create({ username, password });
}

export default {
  createUser,
};
