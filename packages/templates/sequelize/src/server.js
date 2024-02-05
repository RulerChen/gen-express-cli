import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import routes from './routes/index.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mode = process.env.NODE_ENV || 'development';
if (mode === 'development') {
  app.use(morgan('dev'));
}

if (mode === 'production') {
  app.use(helmet());
}

const apiVersion = process.env.API_VERSION || '1.0';
app.use(`/api/${apiVersion}`, routes);

export default app;
