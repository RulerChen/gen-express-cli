import express from 'express';

import UserController from '../controllers/user.controller.js';

const router = express.Router();

router.post('/', UserController.createUser);

router.get('/', UserController.getAllUsers);

router.get('/:id', UserController.getUserById);

router.put('/:id', UserController.updateUserById);

router.delete('/:id', UserController.deleteUserById);

export default router;
