import express from 'express';

import UserRoutes from './user.routes.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('This is the API root!');
});

router.use('/users', UserRoutes);

export default router;
