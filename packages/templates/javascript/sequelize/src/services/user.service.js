import User from '../models/user.model.js';

async function createUser(username, password) {
  return await User.create({ username, password });
}

async function getAllUsers() {
  return await User.findAll();
}

async function getUserById(id) {
  return await User.findByPk(id);
}

async function updateUserById(id, username, password) {
  return await User.update({ username, password }, { where: { id } });
}

async function deleteUserById(id) {
  return await User.destroy({ where: { id } });
}

export default {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
