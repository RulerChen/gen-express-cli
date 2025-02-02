import usersModel from '@/models/user.js';

function getAllUsers(req, res) {
  const users = usersModel.getUsers();
  res.status(200).json(users);
}

export default {
  getAllUsers,
};
