import express from 'express';

import UserController from '../controllers/user';

const router = express.Router();

router.get('/', UserController.getAllUsers);

export default router;
