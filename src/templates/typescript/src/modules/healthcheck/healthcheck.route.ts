import { Router } from 'express';
import { healthcheckController } from './healthcheck.controller.js';

const router = Router();

router.get('/health', healthcheckController.getHealth);

export default router;
