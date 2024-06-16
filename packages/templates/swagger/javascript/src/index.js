import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../apidoc.json';

import routes from './routes/index';

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 8000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(`/api`, routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
