import { Router } from 'express';
import { userController } from './user.controller.js';
import { validate } from '#src/middlewares/validate.js';
import { createUserSchema, getUserByIdSchema, deleteUserSchema } from './user.schema.js';

const router = Router();

router.get('/v1/users/', userController.getAllUsers);
router.get('/v1/users/:id', validate(getUserByIdSchema), userController.getUserById);
router.post('/v1/users/', validate(createUserSchema), userController.createUser);
router.delete('/v1/users/:id', validate(deleteUserSchema), userController.deleteUser);

export default router;
